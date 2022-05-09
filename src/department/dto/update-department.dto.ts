import { PartialType } from '@nestjs/mapped-types';
import { CreateDepartmentDto } from './create-department.dto';
import { IsBoolean, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
export class UpdateDepartmentDto extends PartialType(CreateDepartmentDto) {
    @IsOptional()
    @IsString()
    @MinLength(3)
    @MaxLength(30)
    name?: string;
    
    @IsString()
    @IsOptional()
    @MaxLength(200)
    description?: string;
    @IsBoolean()
    @IsOptional()
    status?: boolean;
}
