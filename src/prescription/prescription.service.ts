import { ForbiddenException, Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePrescriptionDto } from './dto/create-prescription.dto';
import { UpdatePrescriptionDto } from './dto/update-prescription.dto';

@Injectable()
export class PrescriptionService {
  constructor(private prisma: PrismaService) {} 
  async create(createPrescriptionDto: CreatePrescriptionDto) {
    const appointment= await this.prisma.prescription.create({
      data:{
       ...createPrescriptionDto
      }
    });

     return {
       message:"Prescription Added Successfully",
       data:appointment
     };
  }

  async findAll() {
    const appointment=await this.prisma.prescription.findMany();
    return appointment;
  }

async findOne(id: number) {
    const appointment= await this.prisma.prescription.findFirst({
      where:{
        id:id
      }
    });
    return appointment;
  }

  async update(id: number, updateDepartmentDto: UpdatePrescriptionDto) {
    const newAnn= await this.prisma.prescription.findUnique({
      where:{
        id:id
      }
    });
    if(!newAnn){
      throw new ForbiddenException(
        'Appointment Doesnot Exists'
      )
    }
    return this.prisma.prescription.update({
      where:{
        id:id
      },
      data:{
        ...updateDepartmentDto
      }
    })
  }

  async remove(id: number) {
    const ann=await this.prisma.prescription.findUnique({
      where:{
        id:id
      }
    });
    if(!ann){
      throw new ForbiddenException(
        'Prescription Doesnot Exists'
      )
    }
    await this.prisma.prescription.delete({
      where:{
        id:id
      }
    })
  }
}
