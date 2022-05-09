import { CreateAnnouncementDto } from './create-announcement.dto';
declare const UpdateAnnouncementDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateAnnouncementDto>>;
export declare class UpdateAnnouncementDto extends UpdateAnnouncementDto_base {
    title?: string;
    description?: string;
    date?: Date;
    announcer_id?: number;
    type?: string;
    status?: boolean;
}
export {};
