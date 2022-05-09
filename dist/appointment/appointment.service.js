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
exports.AppointmentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AppointmentService = class AppointmentService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createAppointmentDto) {
        const appointment = await this.prisma.appointment.create({
            data: Object.assign({}, createAppointmentDto)
        });
        return {
            message: "Appointment Booked Successfully",
            data: appointment
        };
    }
    async findAll() {
        const appointment = await this.prisma.appointment.findMany();
        return appointment;
    }
    async findOne(id) {
        const appointment = await this.prisma.appointment.findFirst({
            where: {
                id: id
            }
        });
        return appointment;
    }
    async update(id, updateAppointmentDto) {
        const newAnn = await this.prisma.appointment.findUnique({
            where: {
                id: id
            }
        });
        if (!newAnn) {
            throw new common_1.ForbiddenException('Appointment Doesnot Exists');
        }
        return this.prisma.appointment.update({
            where: {
                id: id
            },
            data: Object.assign({}, updateAppointmentDto)
        });
    }
    async remove(id) {
        const ann = await this.prisma.appointment.findUnique({
            where: {
                id: id
            }
        });
        if (!ann) {
            throw new common_1.ForbiddenException('Appointments Doesnot Exists');
        }
        await this.prisma.appointment.delete({
            where: {
                id: id
            }
        });
    }
};
AppointmentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AppointmentService);
exports.AppointmentService = AppointmentService;
//# sourceMappingURL=appointment.service.js.map