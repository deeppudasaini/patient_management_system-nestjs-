import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { CreateDepartmentStaffDto } from './dto/create-departmentstaff.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { UpdateDepartmentStaffDto } from './dto/update-departmentstaff.dto';

@Injectable()
export class DepartmentService {
  constructor(private prisma: PrismaService) {} 
  async create(createDepartmentDto: CreateDepartmentDto) {
    const dep= await this.prisma.department.create({
      data:{
       ...createDepartmentDto
      }
    });

     return {
       message:"Department Booked Successfully",
       data:dep
     };
  }

  async findAll() {
    const dep=await this.prisma.department.findMany();
    return dep;
  }

  async findOne(id: number) {
    const dep= await this.prisma.department.findFirst({
      where:{
        id:id
      }
    });
    return dep;
  }

  async update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    const newAnn= await this.prisma.department.findUnique({
      where:{
        id:id
      }
    });
    if(!newAnn){
      throw new ForbiddenException(
        'Department Doesnot Exists'
      )
    }
    return this.prisma.department.update({
      where:{
        id:id
      },
      data:{
        ...updateDepartmentDto
      }
    })
  }

  async remove(id: number) {
    const ann=await this.prisma.department.findUnique({
      where:{
        id:id
      }
    });
    if(!ann){
      throw new ForbiddenException(
        'Department Doesnot Exists'
      )
    }
    await this.prisma.department.delete({
      where:{
        id:id
      }
    })
  }
  
  async createDepartmentStaff(createDepartmentStaffDto: CreateDepartmentStaffDto) {
    const appointment= await this.prisma.staffsOnDepartments.create({
      data:{
       ...createDepartmentStaffDto
      }
    });

     return {
       message:"Department Assigned Successfully",
       data:appointment
     };
  }

  async findAllDepartmentStaff() {
    const appointment=await this.prisma.staffsOnDepartments.findMany();
    return appointment;
  }

  async findOneDepartmentStaff(id: number) {
    const appointment= await this.prisma.staffsOnDepartments.findFirst({
      where:{
        id:id
      }
    });
    return appointment;
  }

  async updateDepartmentStaff(id: number, updateDepartmentStaffDto: UpdateDepartmentStaffDto) {
    const newAnn= await this.prisma.staffsOnDepartments.findUnique({
      where:{
      id:id
      }
    });
    if(!newAnn){
      throw new ForbiddenException(
        'Department Assignemnt Doesnot Exists'
      )
    }
    return this.prisma.staffsOnDepartments.update({
      where:{
        id:id
      },
      data:{
        ...updateDepartmentStaffDto
      }
    })
  }

  async removeDepartmentStaff(id: number) {
    const ann=await this.prisma.staffsOnDepartments.findUnique({
      where:{
        id:id
      }
    });
    if(!ann){
      throw new ForbiddenException(
        'Department Assignment Doesnot Exists'
      )
    }
    await this.prisma.staffsOnDepartments.delete({
      where:{
        id:id
      }
    })
  }
}
