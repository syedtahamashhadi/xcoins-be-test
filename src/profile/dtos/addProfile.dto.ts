import { IsOptional, IsString } from "class-validator";

export class AddProfileParamDto{
    @IsString()
    email: string

    @IsString()
    name: string

    @IsString()
    nickname: string
}