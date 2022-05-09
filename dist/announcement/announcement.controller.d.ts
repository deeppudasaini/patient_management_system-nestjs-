import { AnnouncementService } from './announcement.service';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { UpdateAnnouncementDto } from './dto/update-announcement.dto';
export declare class AnnouncementController {
    private readonly announcementService;
    constructor(announcementService: AnnouncementService);
    create(createAnnouncementDto: CreateAnnouncementDto): Promise<{
        message: string;
        data: import(".prisma/client").Announcement;
    }>;
    findAll(): Promise<import(".prisma/client").Announcement[]>;
    findOne(id: string): Promise<import(".prisma/client").Announcement>;
    update(id: string, updateAnnouncementDto: UpdateAnnouncementDto): Promise<import(".prisma/client").Announcement>;
    remove(id: string): {
        message: string;
    };
}
