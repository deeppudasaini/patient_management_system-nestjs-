import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): Promise<{
        message: string;
        data: import(".prisma/client").User;
    }>;
    findAll(): Promise<import(".prisma/client").User[]>;
    findOne(id: number): Promise<import(".prisma/client").User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<import(".prisma/client").User>;
    remove(id: number): Promise<void>;
}
