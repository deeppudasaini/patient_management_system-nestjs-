import { CreateAppointmentDto } from './create-appointment.dto';
declare const UpdateAppointmentDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateAppointmentDto>>;
export declare class UpdateAppointmentDto extends UpdateAppointmentDto_base {
    appointment_date?: Date;
    schedule_date?: Date;
    time?: string;
    visited_early?: boolean;
    appointment_show?: boolean;
    staff_id?: number;
    patient_id?: number;
    status?: boolean;
}
export {};
