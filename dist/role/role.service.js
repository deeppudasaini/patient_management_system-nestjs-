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
exports.RoleService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let RoleService = class RoleService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createRoleDto) {
        const role = await this.prisma.role.create({
            data: Object.assign({}, createRoleDto)
        });
        return {
            message: "Role Created Successfully",
            data: role
        };
    }
    async findAll() {
        const roles = this.prisma.role.findMany();
        return roles;
    }
    async findOne(id) {
        const role = await this.prisma.role.findFirst({
            where: {
                id: id
            }
        });
        return role;
    }
    async update(id, updateRoleDto) {
        const newRole = await this.prisma.role.findUnique({
            where: {
                id: id
            }
        });
        if (!newRole) {
            throw new common_1.ForbiddenException('Role Doesnot Exists');
        }
        return this.prisma.role.update({
            where: {
                id: id
            },
            data: Object.assign({}, updateRoleDto)
        });
    }
    async remove(id) {
        const role = await this.prisma.role.findUnique({
            where: {
                id: id
            }
        });
        if (!role) {
            throw new common_1.ForbiddenException('Role Doesnot Exists');
        }
        await this.prisma.role.delete({
            where: {
                id: id
            }
        });
    }
};
RoleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RoleService);
exports.RoleService = RoleService;
//# sourceMappingURL=role.service.js.map