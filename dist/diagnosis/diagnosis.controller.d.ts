import { DiagnosisService } from './diagnosis.service';
import { CreateDiagnosisDto } from './dto/create-diagnosis.dto';
import { UpdateDiagnosisDto } from './dto/update-diagnosis.dto';
export declare class DiagnosisController {
    private readonly diagnosisService;
    constructor(diagnosisService: DiagnosisService);
    create(createDiagnosisDto: CreateDiagnosisDto): Promise<{
        message: string;
        data: import(".prisma/client").Diagnosis;
    }>;
    findAll(): Promise<import(".prisma/client").Diagnosis[]>;
    findOne(id: string): Promise<import(".prisma/client").Diagnosis>;
    update(id: string, updateDiagnosisDto: UpdateDiagnosisDto): Promise<import(".prisma/client").Diagnosis>;
    remove(id: string): {
        message: string;
    };
}
