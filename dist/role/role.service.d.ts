import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
export declare class RoleService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createRoleDto: CreateRoleDto): Promise<{
        message: string;
        data: import(".prisma/client").Role;
    }>;
    findAll(): Promise<import(".prisma/client").Role[]>;
    findOne(id: number): Promise<import(".prisma/client").Role>;
    update(id: number, updateRoleDto: UpdateRoleDto): Promise<import(".prisma/client").Role>;
    remove(id: number): Promise<void>;
}
