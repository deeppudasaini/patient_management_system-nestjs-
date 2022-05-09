import { PartialType } from '@nestjs/mapped-types';
import { CreateDrugDto } from './create-drug.dto';
import { IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
export class UpdateDrugDto extends PartialType(CreateDrugDto) {
    @IsString()
@IsOptional()
@MinLength(3)
@MaxLength(100)
trade_name?: string;
@IsString()
@IsOptional()
@MinLength(3)
@MaxLength(100)
generic_name?: string;
@IsOptional()
@IsInt()
staff_id?: number;
}
