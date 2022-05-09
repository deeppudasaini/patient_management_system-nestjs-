import { ScheduleService } from './schedule.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
export declare class ScheduleController {
    private readonly scheduleService;
    constructor(scheduleService: ScheduleService);
    create(createScheduleDto: CreateScheduleDto): Promise<{
        message: string;
        data: import(".prisma/client").Schedule;
    }>;
    findAll(): Promise<import(".prisma/client").Schedule[]>;
    findOne(id: string): Promise<import(".prisma/client").Schedule>;
    update(id: string, updateScheduleDto: UpdateScheduleDto): Promise<import(".prisma/client").Schedule>;
    remove(id: string): {
        message: string;
    };
}
