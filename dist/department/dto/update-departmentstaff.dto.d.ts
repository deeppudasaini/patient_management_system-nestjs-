import { CreateDepartmentDto } from './create-department.dto';
declare const UpdateDepartmentStaffDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateDepartmentDto>>;
export declare class UpdateDepartmentStaffDto extends UpdateDepartmentStaffDto_base {
    staff_id?: number;
    department_id?: number;
}
export {};
