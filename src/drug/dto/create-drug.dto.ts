import { IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";


export class CreateDrugDto {
@IsString()
@IsOptional()
@MinLength(3)
@MaxLength(100)
trade_name?: string;
@IsString()
@IsNotEmpty()
@MinLength(3)
@MaxLength(100)
generic_name: string;
@IsNotEmpty()
@IsInt()
staff_id: number;

}
