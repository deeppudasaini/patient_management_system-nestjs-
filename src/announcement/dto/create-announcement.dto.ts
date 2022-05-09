import { IsBoolean, isDate, IsDate, IsDateString, IsEmail, IsInt, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsPhoneNumber, IsString, Max, MaxLength, Min, MinLength } from "class-validator";
import { Type } from 'class-transformer';
export class CreateAnnouncementDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(10)
    @MaxLength(100)
    title:string;
    @IsNotEmpty()
    @IsString()
    @MaxLength(500)
    @IsOptional()
    description:string;
    @IsNotEmpty()
    @IsDate()
    @Type(()=>Date)
    date:Date;
    @IsNotEmpty()
    @IsInt()
    announcer_id:number;
    @IsNotEmpty()
    @IsString()
    type:string;
    status:boolean;

}
