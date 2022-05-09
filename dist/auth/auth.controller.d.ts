import { AuthService } from './auth.service';
import { AuthDto, RegisterDto } from './dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(dto: AuthDto): Promise<string>;
    register(dto: RegisterDto): Promise<string>;
}
