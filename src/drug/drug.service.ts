import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDrugDto } from './dto/create-drug.dto';
import { UpdateDrugDto } from './dto/update-drug.dto';

@Injectable()
export class DrugService {
  constructor(private prisma: PrismaService) {} 
  async create(createDrugDto: CreateDrugDto) {
    const drug= await this.prisma.drug.create({
      data:{
       ...createDrugDto
      }
    });

     return {
       message:"Drug Created Successfully",
       data:drug
     };
  }

  async findAll() {
    const drug=await this.prisma.drug.findMany();
    return drug;
    
  }

  async findOne(id: number) {
    const drug= await this.prisma.drug.findFirst({
      where:{
        id:id
      }
    });
    return drug;
  }

  async update(id: number, updateDrugDto: UpdateDrugDto) {
    const newDrug= await this.prisma.drug.findUnique({
      where:{
        id:id
      }
    });
    if(!newDrug){
      throw new ForbiddenException(
        'Drug Doesnot Exists'
      )
    }
    return this.prisma.drug.update({
      where:{
        id:id
      },
      data:{
        ...updateDrugDto
      }
    })
  }

  async remove(id: number) {
    const newDrug=await this.prisma.drug.findUnique({
      where:{
        id:id
      }
    });
    if(!newDrug){
      throw new ForbiddenException(
        'Drug Doesnot Exists'
      )
    }
    await this.prisma.drug.delete({
      where:{
        id:id
      }
    })
  }
}
