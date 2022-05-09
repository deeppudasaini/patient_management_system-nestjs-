import { AppointmentService } from './appointment.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
export declare class AppointmentController {
    private readonly appointmentService;
    constructor(appointmentService: AppointmentService);
    create(createAppointmentDto: CreateAppointmentDto): Promise<{
        message: string;
        data: import(".prisma/client").Appointment;
    }>;
    findAll(): Promise<import(".prisma/client").Appointment[]>;
    findOne(id: string): Promise<import(".prisma/client").Appointment>;
    update(id: string, updateAppointmentDto: UpdateAppointmentDto): Promise<import(".prisma/client").Appointment>;
    remove(id: string): {
        message: string;
    };
}
