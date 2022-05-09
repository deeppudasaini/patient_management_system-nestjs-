import { DepartmentService } from './department.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { CreateDepartmentStaffDto } from './dto/create-departmentstaff.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { UpdateDepartmentStaffDto } from './dto/update-departmentstaff.dto';
export declare class DepartmentController {
    private readonly departmentService;
    constructor(departmentService: DepartmentService);
    create(createDepartmentDto: CreateDepartmentDto): Promise<{
        message: string;
        data: import(".prisma/client").Department;
    }>;
    findAll(): Promise<import(".prisma/client").Department[]>;
    findOne(id: string): Promise<import(".prisma/client").Department>;
    update(id: string, updateDepartmentDto: UpdateDepartmentDto): Promise<import(".prisma/client").Department>;
    remove(id: string): {
        message: string;
    };
    createDepartmentStaff(createDepartmentStaffDto: CreateDepartmentStaffDto): Promise<{
        message: string;
        data: import(".prisma/client").StaffsOnDepartments;
    }>;
    findAllDepartmentStaff(): Promise<import(".prisma/client").StaffsOnDepartments[]>;
    findOneDepartmentStaff(id: string): Promise<import(".prisma/client").StaffsOnDepartments>;
    updateDepartmentStaff(id: string, updateDepartmentStaffDto: UpdateDepartmentStaffDto): Promise<import(".prisma/client").StaffsOnDepartments>;
    removeDepartmentStaff(id: string): {
        message: string;
    };
}
