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
exports.DrugService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let DrugService = class DrugService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createDrugDto) {
        const drug = await this.prisma.drug.create({
            data: Object.assign({}, createDrugDto)
        });
        return {
            message: "Drug Created Successfully",
            data: drug
        };
    }
    async findAll() {
        const drug = await this.prisma.drug.findMany();
        return drug;
    }
    async findOne(id) {
        const drug = await this.prisma.drug.findFirst({
            where: {
                id: id
            }
        });
        return drug;
    }
    async update(id, updateDrugDto) {
        const newDrug = await this.prisma.drug.findUnique({
            where: {
                id: id
            }
        });
        if (!newDrug) {
            throw new common_1.ForbiddenException('Drug Doesnot Exists');
        }
        return this.prisma.drug.update({
            where: {
                id: id
            },
            data: Object.assign({}, updateDrugDto)
        });
    }
    async remove(id) {
        const newDrug = await this.prisma.drug.findUnique({
            where: {
                id: id
            }
        });
        if (!newDrug) {
            throw new common_1.ForbiddenException('Drug Doesnot Exists');
        }
        await this.prisma.drug.delete({
            where: {
                id: id
            }
        });
    }
};
DrugService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DrugService);
exports.DrugService = DrugService;
//# sourceMappingURL=drug.service.js.map