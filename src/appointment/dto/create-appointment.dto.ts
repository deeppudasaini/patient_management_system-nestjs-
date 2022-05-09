import { IsBoolean, isDate, IsDate, IsDateString, IsEmail, IsInt, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsPhoneNumber, IsString, Max, MaxLength, Min, MinLength } from "class-validator";
import { Type } from 'class-transformer';
export class CreateAppointmentDto {
    @IsNotEmpty()
    @IsDate()
    @Type(()=>Date)
    appointment_date: Date;
    @IsNotEmpty()
    @IsDate()
    @Type(()=>Date)
    schedule_date:Date;
    @IsNotEmpty()
    @IsString()
    time: string;
    @IsBoolean()
    @IsNotEmpty()
    visited_early:boolean;
    @IsBoolean()
    @IsNotEmpty()
    appointment_show:boolean;
    @IsNotEmpty()
    @IsInt()
    staff_id:number;
    @IsNotEmpty()
    @IsInt()
    patient_id:number;
    @IsBoolean()
    @IsNotEmpty()
    status:boolean



}
