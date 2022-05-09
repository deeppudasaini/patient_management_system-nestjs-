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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const argon = require("argon2");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../prisma/prisma.service");
const runtime_1 = require("@prisma/client/runtime");
const config_1 = require("@nestjs/config");
let AuthService = class AuthService {
    constructor(prisma, jwt, config) {
        this.prisma = prisma;
        this.jwt = jwt;
        this.config = config;
    }
    async register(dto) {
        const hashedPassword = await argon.hash(dto.password);
        try {
            const userToRegister = await this.prisma.user.create({
                data: {
                    first_name: dto.first_name,
                    last_name: dto.last_name,
                    username: dto.username,
                    password: hashedPassword,
                    email: dto.email,
                    dob: dto.dob,
                    phone: dto.phone,
                    gender: dto.gender,
                    blood_group: dto.blood_group,
                    address: dto.address,
                    role_id: dto.role_id
                }
            });
            return this.signJwtToken(userToRegister.id, userToRegister.email);
        }
        catch (e) {
            console.log(e);
            if (e instanceof
                runtime_1.PrismaClientKnownRequestError) {
                if (e.code === 'P2002') {
                    throw new common_1.ForbiddenException('Credentials Already Taken');
                }
            }
            throw e;
        }
    }
    async login(dto) {
        const user = await this.prisma.user.findUnique({
            where: {
                username: dto.username
            }
        });
        if (!user) {
            throw new common_1.ForbiddenException('Incorrect Credentials');
        }
        const pswdMtch = await argon.verify(user.password, dto.password);
        if (!pswdMtch) {
            throw new common_1.ForbiddenException('Credentials Incorrect');
        }
        return this.signJwtToken(user.id, user.email);
    }
    async signJwtToken(userId, email) {
        const payload = {
            sub: userId,
            email
        };
        const secret_key = this.config.get('JWT_SECRET');
        const token = this.jwt.signAsync(payload, {
            expiresIn: '30m',
            secret: secret_key
        });
        return token;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map