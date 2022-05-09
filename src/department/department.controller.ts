import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { CreateDepartmentStaffDto } from './dto/create-departmentstaff.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { UpdateDepartmentStaffDto } from './dto/update-departmentstaff.dto';

@Controller('department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Post()
  create(@Body() createDepartmentDto: CreateDepartmentDto) {
    return this.departmentService.create(createDepartmentDto);
  }

  @Get()
  findAll() {
    return this.departmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.departmentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDepartmentDto: UpdateDepartmentDto) {
    return this.departmentService.update(+id, updateDepartmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.departmentService.remove(+id);
    return {
      "message":"Department Removed Successfully"
    }
  }
  @Post()
  createDepartmentStaff(@Body() createDepartmentStaffDto: CreateDepartmentStaffDto) {
    return this.departmentService.createDepartmentStaff(createDepartmentStaffDto);
  }

  @Get()
  findAllDepartmentStaff() {
    return this.departmentService.findAllDepartmentStaff();
  }

  @Get(':id')
  findOneDepartmentStaff(@Param('id') id: string) {
    return this.departmentService.findOneDepartmentStaff(+id);
  }

  @Patch(':id')
  updateDepartmentStaff(@Param('id') id: string, @Body() updateDepartmentStaffDto: UpdateDepartmentStaffDto) {
    return this.departmentService.updateDepartmentStaff(+id, updateDepartmentStaffDto);
  }

  @Delete(':id')
  removeDepartmentStaff(@Param('id') id: string) {
    this.departmentService.removeDepartmentStaff(+id);
    return {
      "message":"Staff's Department Removed Successfully"
    }
  }
}
