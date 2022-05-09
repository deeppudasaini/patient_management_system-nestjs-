import { PrescriptionService } from './prescription.service';
import { CreatePrescriptionDto } from './dto/create-prescription.dto';
import { UpdatePrescriptionDto } from './dto/update-prescription.dto';
export declare class PrescriptionController {
    private readonly prescriptionService;
    constructor(prescriptionService: PrescriptionService);
    create(createPrescriptionDto: CreatePrescriptionDto): Promise<{
        message: string;
        data: import(".prisma/client").Prescription;
    }>;
    findAll(): Promise<import(".prisma/client").Prescription[]>;
    findOne(id: string): Promise<import(".prisma/client").Prescription>;
    update(id: string, updatePrescriptionDto: UpdatePrescriptionDto): Promise<import(".prisma/client").Prescription>;
    remove(id: string): {
        message: string;
    };
}
