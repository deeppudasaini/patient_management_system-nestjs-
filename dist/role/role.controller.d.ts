import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
export declare class RoleController {
    private readonly roleService;
    constructor(roleService: RoleService);
    create(createRoleDto: CreateRoleDto): Promise<{
        message: string;
        data: import(".prisma/client").Role;
    }>;
    findAll(): Promise<import(".prisma/client").Role[]>;
    findOne(id: string): Promise<import(".prisma/client").Role>;
    update(id: string, updateRoleDto: UpdateRoleDto): Promise<import(".prisma/client").Role>;
    remove(id: string): {
        message: string;
    };
}
