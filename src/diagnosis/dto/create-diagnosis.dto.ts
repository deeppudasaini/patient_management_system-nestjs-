import { IsInt,IsNotEmpty, IsOptional, IsString,MinLength,MaxLength, IsBoolean } from "class-validator";

export class CreateDiagnosisDto {
    @IsNotEmpty()
    @IsInt()
    staff_id: number;
    @IsNotEmpty()
    @IsInt()
    patient_id: number;
    @IsOptional()
    @IsString()
    @MinLength(5)
    @MaxLength(100)
    diagnosis_symptoms: string;
    @IsOptional()
    @IsString()
    @MinLength(5)
    @MaxLength(200)
    diagnosis_advice: string;
    @IsOptional()
    @IsString()
    @MinLength(5)
    @MaxLength(50)
    diagnosed_disease: string;
    @IsNotEmpty()
    @IsBoolean()
    status: boolean;

}
