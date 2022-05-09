import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {} 
  async create(createUserDto: CreateUserDto) {
    const appointment= await this.prisma.user.create({
      data:{
       ...createUserDto
      }
    });

     return {
       message:"User Created Successfully",
       data:appointment
     };
  }

  async findAll() {
    const appointment=await this.prisma.user.findMany();
    return appointment;
  }

async findOne(id: number) {
    const appointment= await this.prisma.user.findFirst({
      where:{
        id:id
      }
    });
    return appointment;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const newAnn= await this.prisma.user.findUnique({
      where:{
        id:id
      }
    });
    if(!newAnn){
      throw new ForbiddenException(
        'User Doesnot Exists'
      )
    }
    return this.prisma.user.update({
      where:{
        id:id
      },
      data:{
        ...updateUserDto
      }
    })
  }

  async remove(id: number) {
    const ann=await this.prisma.user.findUnique({
      where:{
        id:id
      }
    });
    if(!ann){
      throw new ForbiddenException(
        'User Doesnot Exists'
      )
    }
    await this.prisma.user.delete({
      where:{
        id:id
      }
    })
  }
}
