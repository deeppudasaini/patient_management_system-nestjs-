import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { UpdateAnnouncementDto } from './dto/update-announcement.dto';
export declare class AnnouncementService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createAnnouncementDto: CreateAnnouncementDto): Promise<{
        message: string;
        data: import(".prisma/client").Announcement;
    }>;
    findAll(): Promise<import(".prisma/client").Announcement[]>;
    findOne(id: number): Promise<import(".prisma/client").Announcement>;
    update(id: number, updateAnnouncementDto: UpdateAnnouncementDto): Promise<import(".prisma/client").Announcement>;
    remove(id: number): Promise<void>;
}
