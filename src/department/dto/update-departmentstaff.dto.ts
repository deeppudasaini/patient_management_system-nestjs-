import { PartialType } from '@nestjs/mapped-types';
import { CreateDepartmentDto } from './create-department.dto';
import { IsInt, IsNotEmpty, IsOptional } from "class-validator";
export class UpdateDepartmentStaffDto extends PartialType(CreateDepartmentDto) {
    @IsOptional()
    @IsInt()
    staff_id?: number;
    @IsOptional()
    @IsInt()
    department_id?: number;
}
