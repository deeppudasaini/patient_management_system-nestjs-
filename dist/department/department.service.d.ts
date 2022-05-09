import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { CreateDepartmentStaffDto } from './dto/create-departmentstaff.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { UpdateDepartmentStaffDto } from './dto/update-departmentstaff.dto';
export declare class DepartmentService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createDepartmentDto: CreateDepartmentDto): Promise<{
        message: string;
        data: import(".prisma/client").Department;
    }>;
    findAll(): Promise<import(".prisma/client").Department[]>;
    findOne(id: number): Promise<import(".prisma/client").Department>;
    update(id: number, updateDepartmentDto: UpdateDepartmentDto): Promise<import(".prisma/client").Department>;
    remove(id: number): Promise<void>;
    createDepartmentStaff(createDepartmentStaffDto: CreateDepartmentStaffDto): Promise<{
        message: string;
        data: import(".prisma/client").StaffsOnDepartments;
    }>;
    findAllDepartmentStaff(): Promise<import(".prisma/client").StaffsOnDepartments[]>;
    findOneDepartmentStaff(id: number): Promise<import(".prisma/client").StaffsOnDepartments>;
    updateDepartmentStaff(id: number, updateDepartmentStaffDto: UpdateDepartmentStaffDto): Promise<import(".prisma/client").StaffsOnDepartments>;
    removeDepartmentStaff(id: number): Promise<void>;
}
