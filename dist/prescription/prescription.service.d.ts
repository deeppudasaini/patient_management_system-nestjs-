import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePrescriptionDto } from './dto/create-prescription.dto';
import { UpdatePrescriptionDto } from './dto/update-prescription.dto';
export declare class PrescriptionService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createPrescriptionDto: CreatePrescriptionDto): Promise<{
        message: string;
        data: import(".prisma/client").Prescription;
    }>;
    findAll(): Promise<import(".prisma/client").Prescription[]>;
    findOne(id: number): Promise<import(".prisma/client").Prescription>;
    update(id: number, updateDepartmentDto: UpdatePrescriptionDto): Promise<import(".prisma/client").Prescription>;
    remove(id: number): Promise<void>;
}
