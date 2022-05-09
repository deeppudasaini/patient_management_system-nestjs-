import { IsBoolean, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateDepartmentDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(30)
    name: string;
    
    @IsString()
    @IsOptional()
    @MaxLength(200)
    description?: string;
    @IsBoolean()
    status: boolean;
}
