import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';

@Injectable()
export class ScheduleService {
  constructor(private prisma: PrismaService) {} 
  async create(createScheduleDto: CreateScheduleDto) {
    const appointment= await this.prisma.schedule.create({
      data:{
       ...createScheduleDto
      }
    });

     return {
       message:"Schedule Created Successfully",
       data:appointment
     };
  }

  async findAll() {
    const appointment=await this.prisma.schedule.findMany();
    return appointment;
  }

async findOne(id: number) {
    const appointment= await this.prisma.schedule.findFirst({
      where:{
        id:id
      }
    });
    return appointment;
  }

  async update(id: number, updateScheduleDto: UpdateScheduleDto) {
    const newAnn= await this.prisma.schedule.findUnique({
      where:{
        id:id
      }
    });
    if(!newAnn){
      throw new ForbiddenException(
        'Schedule Doesnot Exists'
      )
    }
    return this.prisma.schedule.update({
      where:{
        id:id
      },
      data:{
        ...updateScheduleDto
      }
    })
  }

  async remove(id: number) {
    const ann=await this.prisma.schedule.findUnique({
      where:{
        id:id
      }
    });
    if(!ann){
      throw new ForbiddenException(
        'Schedule Doesnot Exists'
      )
    }
    await this.prisma.schedule.delete({
      where:{
        id:id
      }
    })
  }
}
