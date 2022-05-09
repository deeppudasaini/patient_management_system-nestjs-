import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Injectable()
export class RoleService {
  constructor(private prisma: PrismaService) {} 
 async create(createRoleDto: CreateRoleDto) {
   const role= await this.prisma.role.create({
     data:{
       ...createRoleDto
     }
   })
    return {
      message:"Role Created Successfully",
      data:role
    };
  }

  async findAll() {
    const roles=this.prisma.role.findMany();
    return roles;
  }

  async findOne(id: number) {
    const role= await this.prisma.role.findFirst({
      where:{
        id:id
      }
    });
    return role;
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    const newRole= await this.prisma.role.findUnique({
      where:{
        id:id
      }
    });
    if(!newRole){
      throw new ForbiddenException(
        'Role Doesnot Exists'
      )
    }
    return this.prisma.role.update({
      where:{
        id:id
      },
      data:{
        ...updateRoleDto
      }
    })
  }

  async remove(id: number) {
    const role=await this.prisma.role.findUnique({
      where:{
        id:id
      }
    });
    if(!role){
      throw new ForbiddenException(
        'Role Doesnot Exists'
      )
    }
    await this.prisma.role.delete({
      where:{
        id:id
      }
    })
  }
}
