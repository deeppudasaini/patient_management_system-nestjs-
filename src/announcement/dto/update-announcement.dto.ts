import { PartialType } from '@nestjs/mapped-types';

import { CreateAnnouncementDto } from './create-announcement.dto';
import { IsBoolean, isDate, IsDate, IsDateString, IsEmail, IsInt, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsPhoneNumber, IsString, Max, MaxLength, Min, MinLength } from "class-validator";
import { Type } from 'class-transformer';

export class UpdateAnnouncementDto extends PartialType(CreateAnnouncementDto) {
    @IsOptional()
    @IsString()
    @MinLength(10)
    @MaxLength(100)
    title?:string;
    @IsOptional()
    @IsString()
    @MaxLength(500)
    @IsOptional()
    description?:string;
    
    @IsDate()
    @Type(()=>Date)
    date?:Date;
    
    announcer_id?:number;
    @IsOptional()
    @IsString()
    type?:string;
    status?:boolean;
    
}
