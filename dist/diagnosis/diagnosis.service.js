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
exports.DiagnosisService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let DiagnosisService = class DiagnosisService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createDiagnosisDto) {
        const d = await this.prisma.diagnosis.create({
            data: Object.assign({}, createDiagnosisDto)
        });
        return {
            message: "Diagnosis Created Successfully",
            data: d
        };
    }
    async findAll() {
        const appointment = await this.prisma.diagnosis.findMany();
        return appointment;
    }
    async findOne(id) {
        const appointment = await this.prisma.diagnosis.findFirst({
            where: {
                id: id
            }
        });
        return appointment;
    }
    async update(id, updateDiagnosisDto) {
        const newAnn = await this.prisma.diagnosis.findUnique({
            where: {
                id: id
            }
        });
        if (!newAnn) {
            throw new common_1.ForbiddenException('Diagnosis Doesnot Exists');
        }
        return this.prisma.diagnosis.update({
            where: {
                id: id
            },
            data: Object.assign({}, updateDiagnosisDto)
        });
    }
    async remove(id) {
        const ann = await this.prisma.diagnosis.findUnique({
            where: {
                id: id
            }
        });
        if (!ann) {
            throw new common_1.ForbiddenException('Diagnosis Doesnot Exists');
        }
        await this.prisma.diagnosis.delete({
            where: {
                id: id
            }
        });
    }
};
DiagnosisService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DiagnosisService);
exports.DiagnosisService = DiagnosisService;
//# sourceMappingURL=diagnosis.service.js.map