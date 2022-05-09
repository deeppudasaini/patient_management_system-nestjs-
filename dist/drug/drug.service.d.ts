import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDrugDto } from './dto/create-drug.dto';
import { UpdateDrugDto } from './dto/update-drug.dto';
export declare class DrugService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createDrugDto: CreateDrugDto): Promise<{
        message: string;
        data: import(".prisma/client").Drug;
    }>;
    findAll(): Promise<import(".prisma/client").Drug[]>;
    findOne(id: number): Promise<import(".prisma/client").Drug>;
    update(id: number, updateDrugDto: UpdateDrugDto): Promise<import(".prisma/client").Drug>;
    remove(id: number): Promise<void>;
}
