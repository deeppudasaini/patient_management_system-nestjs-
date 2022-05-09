import { DrugService } from './drug.service';
import { CreateDrugDto } from './dto/create-drug.dto';
import { UpdateDrugDto } from './dto/update-drug.dto';
export declare class DrugController {
    private readonly drugService;
    constructor(drugService: DrugService);
    create(createDrugDto: CreateDrugDto): Promise<{
        message: string;
        data: import(".prisma/client").Drug;
    }>;
    findAll(): Promise<import(".prisma/client").Drug[]>;
    findOne(id: string): Promise<import(".prisma/client").Drug>;
    update(id: string, updateDrugDto: UpdateDrugDto): Promise<import(".prisma/client").Drug>;
    remove(id: string): {
        message: string;
    };
}
