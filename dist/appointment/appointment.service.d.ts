import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
export declare class AppointmentService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createAppointmentDto: CreateAppointmentDto): Promise<{
        message: string;
        data: import(".prisma/client").Appointment;
    }>;
    findAll(): Promise<import(".prisma/client").Appointment[]>;
    findOne(id: number): Promise<import(".prisma/client").Appointment>;
    update(id: number, updateAppointmentDto: UpdateAppointmentDto): Promise<import(".prisma/client").Appointment>;
    remove(id: number): Promise<void>;
}
