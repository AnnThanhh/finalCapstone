import { ApiProperty } from "@nestjs/swagger";

export enum UserRole {
    USER = 'USER',
    ADMIN = 'ADMIN',
}


export class UserInfoDTO {
    @ApiProperty()
    id: number;

    @ApiProperty()
    fullName: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    phone: string;

    @ApiProperty()
    birthDay: string;

    @ApiProperty()
    gender: string;

    @ApiProperty({ enum: UserRole, enumName: 'UserRole' })
    role: UserRole;

    @ApiProperty()
    avatar: string;
}