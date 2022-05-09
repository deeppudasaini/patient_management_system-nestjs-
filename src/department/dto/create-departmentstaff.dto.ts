import { IsInt, IsNotEmpty } from "class-validator";

export class CreateDepartmentStaffDto {
    @IsNotEmpty()
    @IsInt()
    staff_id: number;
    @IsNotEmpty()
    @IsInt()
    department_id: number;
}
