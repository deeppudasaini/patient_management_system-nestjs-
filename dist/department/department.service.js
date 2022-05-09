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
exports.DepartmentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let DepartmentService = class DepartmentService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createDepartmentDto) {
        const dep = await this.prisma.department.create({
            data: Object.assign({}, createDepartmentDto)
        });
        return {
            message: "Department Booked Successfully",
            data: dep
        };
    }
    async findAll() {
        const dep = await this.prisma.department.findMany();
        return dep;
    }
    async findOne(id) {
        const dep = await this.prisma.department.findFirst({
            where: {
                id: id
            }
        });
        return dep;
    }
    async update(id, updateDepartmentDto) {
        const newAnn = await this.prisma.department.findUnique({
            where: {
                id: id
            }
        });
        if (!newAnn) {
            throw new common_1.ForbiddenException('Department Doesnot Exists');
        }
        return this.prisma.department.update({
            where: {
                id: id
            },
            data: Object.assign({}, updateDepartmentDto)
        });
    }
    async remove(id) {
        const ann = await this.prisma.department.findUnique({
            where: {
                id: id
            }
        });
        if (!ann) {
            throw new common_1.ForbiddenException('Department Doesnot Exists');
        }
        await this.prisma.department.delete({
            where: {
                id: id
            }
        });
    }
    async createDepartmentStaff(createDepartmentStaffDto) {
        const appointment = await this.prisma.staffsOnDepartments.create({
            data: Object.assign({}, createDepartmentStaffDto)
        });
        return {
            message: "Department Assigned Successfully",
            data: appointment
        };
    }
    async findAllDepartmentStaff() {
        const appointment = await this.prisma.staffsOnDepartments.findMany();
        return appointment;
    }
    async findOneDepartmentStaff(id) {
        const appointment = await this.prisma.staffsOnDepartments.findFirst({
            where: {
                id: id
            }
        });
        return appointment;
    }
    async updateDepartmentStaff(id, updateDepartmentStaffDto) {
        const newAnn = await this.prisma.staffsOnDepartments.findUnique({
            where: {
                id: id
            }
        });
        if (!newAnn) {
            throw new common_1.ForbiddenException('Department Assignemnt Doesnot Exists');
        }
        return this.prisma.staffsOnDepartments.update({
            where: {
                id: id
            },
            data: Object.assign({}, updateDepartmentStaffDto)
        });
    }
    async removeDepartmentStaff(id) {
        const ann = await this.prisma.staffsOnDepartments.findUnique({
            where: {
                id: id
            }
        });
        if (!ann) {
            throw new common_1.ForbiddenException('Department Assignment Doesnot Exists');
        }
        await this.prisma.staffsOnDepartments.delete({
            where: {
                id: id
            }
        });
    }
};
DepartmentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DepartmentService);
exports.DepartmentService = DepartmentService;
//# sourceMappingURL=department.service.js.map