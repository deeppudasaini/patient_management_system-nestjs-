import { PrismaService } from 'src/prisma/prisma.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
export declare class ScheduleService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createScheduleDto: CreateScheduleDto): Promise<{
        message: string;
        data: import(".prisma/client").Schedule;
    }>;
    findAll(): Promise<import(".prisma/client").Schedule[]>;
    findOne(id: number): Promise<import(".prisma/client").Schedule>;
    update(id: number, updateScheduleDto: UpdateScheduleDto): Promise<import(".prisma/client").Schedule>;
    remove(id: number): Promise<void>;
}
