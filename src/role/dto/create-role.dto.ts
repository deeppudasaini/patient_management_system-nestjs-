import { IsNotEmpty, IsNumberString, IsString } from "class-validator";

export class CreateRoleDto {
    
    @IsNotEmpty()
    
    @IsString()
    name: string;

}
