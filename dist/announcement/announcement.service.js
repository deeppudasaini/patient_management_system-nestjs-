"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnouncementService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AnnouncementService = class AnnouncementService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createAnnouncementDto) {
        const announcement = await this.prisma.announcement.create({
            data: {
                title: createAnnouncementDto.title,
                description: createAnnouncementDto.description,
                date: createAnnouncementDto.date,
                announcer_id: createAnnouncementDto.announcer_id,
                type: createAnnouncementDto.type,
                status: createAnnouncementDto.status
            }
        });
        return {
            message: "Announcement Created Successfully",
            data: announcement
        };
    }
    async findAll() {
        const announcements = this.prisma.announcement.findMany();
        return announcements;
    }
    async findOne(id) {
        const announcement = await this.prisma.announcement.findFirst({
            where: {
                id: id
            }
        });
        return announcement;
    }
    async update(id, updateAnnouncementDto) {
        const newAnn = await this.prisma.announcement.findUnique({
            where: {
                id: id
            }
        });
        if (!newAnn) {
            throw new common_1.ForbiddenException('Announcement Doesnot Exists');
        }
        return this.prisma.announcement.update({
            where: {
                id: id
            },
            data: Object.assign({}, updateAnnouncementDto)
        });
    }
    async remove(id) {
        const ann = await this.prisma.announcement.findUnique({
            where: {
                id: id
            }
        });
        if (!ann) {
            throw new common_1.ForbiddenException('Announcements Doesnot Exists');
        }
        await this.prisma.announcement.delete({
            where: {
                id: id
            }
        });
    }
};
AnnouncementService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AnnouncementService);
exports.AnnouncementService = AnnouncementService;
//# sourceMappingURL=announcement.service.js.map