import { IsBoolean, isDate, IsDate, IsDateString, IsEmail, IsInt, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsPhoneNumber, IsString, Max, MaxLength, MinLength } from "class-validator";
import { Type } from 'class-transformer';
export class RegisterDto{
    @IsNotEmpty()
    @IsString()
    
    first_name: string;
    @IsNotEmpty()
    @IsString()
    
    last_name:string;
    @IsNotEmpty()
    @MinLength(8)
    username:string;
    @IsNotEmpty()
    @MinLength(8)
    password:string;
    @IsNotEmpty()
    @IsEmail()
    email:string;
    @IsNotEmpty()
    @IsDate()
    @Type(()=>Date)
    dob:Date;
    @IsOptional()
    @IsNumberString()
    @MinLength(10)
    @MaxLength(15)
    phone:string;
    @IsNotEmpty()
    @MaxLength(1)
    gender:string;
    @IsOptional()
    blood_group:string;
    @IsNotEmpty()
    address:string;
    @IsNotEmpty()
    @IsInt()
    role_id:number;
    @IsNotEmpty()
    @IsBoolean()
    status:boolean;



}