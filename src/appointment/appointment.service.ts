import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';

@Injectable()
export class AppointmentService {
  constructor(private prisma: PrismaService) {} 
  async create(createAppointmentDto: CreateAppointmentDto) {
    const appointment= await this.prisma.appointment.create({
      data:{
       ...createAppointmentDto
      }
    });

     return {
       message:"Appointment Booked Successfully",
       data:appointment
     };
  }

  async findAll() {
    const appointment=await this.prisma.appointment.findMany();
    return appointment;
  }

async findOne(id: number) {
    const appointment= await this.prisma.appointment.findFirst({
      where:{
        id:id
      }
    });
    return appointment;
  }

  async update(id: number, updateAppointmentDto: UpdateAppointmentDto) {
    const newAnn= await this.prisma.appointment.findUnique({
      where:{
        id:id
      }
    });
    if(!newAnn){
      throw new ForbiddenException(
        'Appointment Doesnot Exists'
      )
    }
    return this.prisma.appointment.update({
      where:{
        id:id
      },
      data:{
        ...updateAppointmentDto
      }
    })
  }

  async remove(id: number) {
    const ann=await this.prisma.appointment.findUnique({
      where:{
        id:id
      }
    });
    if(!ann){
      throw new ForbiddenException(
        'Appointments Doesnot Exists'
      )
    }
    await this.prisma.appointment.delete({
      where:{
        id:id
      }
    })
  }
}
