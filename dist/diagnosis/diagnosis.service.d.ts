import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDiagnosisDto } from './dto/create-diagnosis.dto';
import { UpdateDiagnosisDto } from './dto/update-diagnosis.dto';
export declare class DiagnosisService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createDiagnosisDto: CreateDiagnosisDto): Promise<{
        message: string;
        data: import(".prisma/client").Diagnosis;
    }>;
    findAll(): Promise<import(".prisma/client").Diagnosis[]>;
    findOne(id: number): Promise<import(".prisma/client").Diagnosis>;
    update(id: number, updateDiagnosisDto: UpdateDiagnosisDto): Promise<import(".prisma/client").Diagnosis>;
    remove(id: number): Promise<void>;
}
