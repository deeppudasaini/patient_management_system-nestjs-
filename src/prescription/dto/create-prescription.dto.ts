import { Type } from "class-transformer";
import { IsNotEmpty, IsOptional,IsInt, IsString, MinLength, MaxLength, Min, Max, IsDate, IsBoolean } from "class-validator";

export class CreatePrescriptionDto {
    @IsNotEmpty()
    @IsInt()
    staff_id: number;
    @IsNotEmpty()
    @IsInt()
    patient_id: number;
    @IsOptional()
    @IsInt()
    drug_id: number;
    @IsNotEmpty()
    @IsInt()
    diagnosis_id: number;
    @IsOptional()
    @IsString()
    @MinLength(5)
    @MaxLength(100)
    advice: string;
    @IsOptional()
    @IsString()
    @MinLength(3)
    @MaxLength(20)
    strength: string;
    @IsOptional()
    @IsString()
    @MinLength(3)
    @MaxLength(20)
    dose: string;
    @IsOptional()
    @IsString()
    @MinLength(3)
    @MaxLength(20)
    dose_unit: string;
    @IsOptional()
    @IsInt()
    @Min(1)
    @Max(10)
    frequency: number;
    @IsOptional()
    @IsDate()
    @Type(()=>Date)
    start_date: Date;
    @IsOptional()
    @IsDate()
    @Type(()=>Date)
    end_date: Date;
    @IsBoolean()
    @IsOptional()
    haematology_test_advice:boolean;
    @IsBoolean()
    @IsOptional()
    serelogy_test_advice:boolean;
    @IsBoolean()
    @IsOptional()
    biochemical_test_advice:boolean;
    @IsBoolean()
    @IsNotEmpty()
    status: boolean;
}
