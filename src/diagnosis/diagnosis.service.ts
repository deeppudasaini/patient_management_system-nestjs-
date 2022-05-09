import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDiagnosisDto } from './dto/create-diagnosis.dto';
import { UpdateDiagnosisDto } from './dto/update-diagnosis.dto';

@Injectable()
export class DiagnosisService {
  constructor(private prisma: PrismaService) {} 
  async create(createDiagnosisDto: CreateDiagnosisDto) {
    const d= await this.prisma.diagnosis.create({
      data:{
       ...createDiagnosisDto
      }
    });

     return {
       message:"Diagnosis Created Successfully",
       data:d
     };
  }

  async findAll() {
    const appointment=await this.prisma.diagnosis.findMany();
    return appointment;
  }

async findOne(id: number) {
    const appointment= await this.prisma.diagnosis.findFirst({
      where:{
        id:id
      }
    });
    return appointment;
  }

  async update(id: number, updateDiagnosisDto: UpdateDiagnosisDto) {
    const newAnn= await this.prisma.diagnosis.findUnique({
      where:{
        id:id
      }
    });
    if(!newAnn){
      throw new ForbiddenException(
        'Diagnosis Doesnot Exists'
      )
    }
    return this.prisma.diagnosis.update({
      where:{
        id:id
      },
      data:{
        ...updateDiagnosisDto
      }
    })
  }

  async remove(id: number) {
    const ann=await this.prisma.diagnosis.findUnique({
      where:{
        id:id
      }
    });
    if(!ann){
      throw new ForbiddenException(
        'Diagnosis Doesnot Exists'
      )
    }
    await this.prisma.diagnosis.delete({
      where:{
        id:id
      }
    })
  }
}
