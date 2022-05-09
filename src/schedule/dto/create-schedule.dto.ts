import { Type } from "class-transformer";
import { IsBoolean, IsDate, IsInt, IsNotEmpty, Max, Min } from "class-validator";

export class CreateScheduleDto {
    @IsNotEmpty()
    @IsInt()
    staff_id: number;
    @IsNotEmpty()
    @IsInt()
    @Min(0)
    @Max(6)
    weekday: number;
    @IsNotEmpty()
    @IsDate()
    @Type(()=>Date)
    start_time: Date;
    @IsNotEmpty()
    @IsDate()
    @Type(()=>Date)
    end_time: Date;
    @IsNotEmpty()
    @IsBoolean()
    status: boolean;

}
