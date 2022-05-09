import { PartialType } from '@nestjs/mapped-types';
import { CreateAppointmentDto } from './create-appointment.dto';
import { IsBoolean, isDate, IsDate, IsDateString, IsEmail, IsInt, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsPhoneNumber, IsString, Max, MaxLength, Min, MinLength } from "class-validator";
import { Type } from 'class-transformer';
export class UpdateAppointmentDto extends PartialType(CreateAppointmentDto) {
    @IsOptional()
    @IsDate()
    @Type(()=>Date)
    appointment_date?: Date;
    @IsOptional()
    @IsDate()
    @Type(()=>Date)
    schedule_date?:Date;
    @IsOptional()
    @IsString()
    time?: string;
    @IsBoolean()
    @IsOptional()
    visited_early?:boolean;
    @IsBoolean()
    @IsOptional()
    appointment_show?:boolean;
    @IsOptional()
    @IsInt()
    staff_id?:number;
    @IsOptional()
    @IsInt()
    patient_id?:number;
    @IsBoolean()
    @IsOptional()
    status?:boolean
}
