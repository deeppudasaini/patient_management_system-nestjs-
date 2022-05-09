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
exports.PrescriptionService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PrescriptionService = class PrescriptionService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createPrescriptionDto) {
        const appointment = await this.prisma.prescription.create({
            data: Object.assign({}, createPrescriptionDto)
        });
        return {
            message: "Prescription Added Successfully",
            data: appointment
        };
    }
    async findAll() {
        const appointment = await this.prisma.prescription.findMany();
        return appointment;
    }
    async findOne(id) {
        const appointment = await this.prisma.prescription.findFirst({
            where: {
                id: id
            }
        });
        return appointment;
    }
    async update(id, updateDepartmentDto) {
        const newAnn = await this.prisma.prescription.findUnique({
            where: {
                id: id
            }
        });
        if (!newAnn) {
            throw new common_1.ForbiddenException('Appointment Doesnot Exists');
        }
        return this.prisma.prescription.update({
            where: {
                id: id
            },
            data: Object.assign({}, updateDepartmentDto)
        });
    }
    async remove(id) {
        const ann = await this.prisma.prescription.findUnique({
            where: {
                id: id
            }
        });
        if (!ann) {
            throw new common_1.ForbiddenException('Prescription Doesnot Exists');
        }
        await this.prisma.prescription.delete({
            where: {
                id: id
            }
        });
    }
};
PrescriptionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrescriptionService);
exports.PrescriptionService = PrescriptionService;
//# sourceMappingURL=prescription.service.js.map