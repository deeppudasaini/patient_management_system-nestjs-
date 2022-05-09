import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaClient } from '@prisma/client';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { UpdateAnnouncementDto } from './dto/update-announcement.dto';

@Injectable()
export class AnnouncementService {
  constructor(private prisma: PrismaService) {} 
  async create(createAnnouncementDto: CreateAnnouncementDto) {
    const announcement= await this.prisma.announcement.create({
      data:{
        title:createAnnouncementDto.title,
        description:createAnnouncementDto.description,
        date:createAnnouncementDto.date,
        announcer_id:createAnnouncementDto.announcer_id,
        type:createAnnouncementDto.type,
        status:createAnnouncementDto.status
      }
    });

     return {
       message:"Announcement Created Successfully",
       data:announcement
     };
  }

  async findAll() {
    const announcements=this.prisma.announcement.findMany();
    return announcements;
  }

  async findOne(id: number) {
    const announcement= await this.prisma.announcement.findFirst({
      where:{
        id:id
      }
    });
    return announcement;
  }

  async update(id: number, updateAnnouncementDto: UpdateAnnouncementDto) {
    const newAnn= await this.prisma.announcement.findUnique({
      where:{
        id:id
      }
    });
    if(!newAnn){
      throw new ForbiddenException(
        'Announcement Doesnot Exists'
      )
    }
    return this.prisma.announcement.update({
      where:{
        id:id
      },
      data:{
        ...updateAnnouncementDto
      }
    })
  }

  async remove(id: number) {
    const ann=await this.prisma.announcement.findUnique({
      where:{
        id:id
      }
    });
    if(!ann){
      throw new ForbiddenException(
        'Announcements Doesnot Exists'
      )
    }
    await this.prisma.announcement.delete({
      where:{
        id:id
      }
    })
  }
}
