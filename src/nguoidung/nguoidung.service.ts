import { Injectable } from '@nestjs/common';
import { NguoiDung } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserInfoDTO } from './dto/nguoidung.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class NguoidungService {
    constructor(private prismaService: PrismaService) { }

    async getAllUsers(): Promise<NguoiDung[]> {
        let data: NguoiDung[] = await this.prismaService.nguoiDung.findMany();
        return data;
    }

    async createUsers(model: UserInfoDTO): Promise<any> {
        const existingUser = await this.prismaService.nguoiDung.findFirst({
            where: {
                id: model.id
            }
        })
        if (existingUser) {
            model.id = 0
        } else {
            const checkEmail = await this.prismaService.nguoiDung.findFirst({
                where: {
                    email: model.email,
                },
            });
            if (checkEmail) {
                return "Email đã tồn tại"
            }
            const hashedPassword = bcrypt.hashSync(model.password, 10);
            const newData = {
                id: model.id,
                name: model.fullName,
                email: model.email,
                pass_word: hashedPassword,
                phone: model.phone,
                birth_day: model.birthDay,
                gender: model.gender,
                role: model.role
            }
            return await this.prismaService.nguoiDung.create({
                data: newData
            })
        }
    }

    async deleteUser(id: number) {
        return await this.prismaService.nguoiDung.delete({
            where: {
                id: id
            }
        })
    }

    async getUserInfo(id: number) {
        return await this.prismaService.nguoiDung.findMany({
            where: {
                id: id
            }
        })
    }

    async searchUserInfoByName(name: string): Promise<NguoiDung[]> {
        return await this.prismaService.nguoiDung.findMany({
            where: {
                name: name
            }
        })
    }

    async updateUsers(id: number, model: UserInfoDTO): Promise<any> {
        const hashedPassword = bcrypt.hashSync(model.password, 10);
        const newData = {
            id: model.id,
            name: model.fullName,
            email: model.email,
            pass_word: hashedPassword,
            phone: model.phone,
            birth_day: model.birthDay,
            gender: model.gender,
            role: model.role
        }
        const data = await this.prismaService.nguoiDung.update({
            where: {
                id: id
            },
            data: newData
        })
        return data;
    }

    async uploadAvatar(id: number, url: string): Promise<any> {
        return this.prismaService.nguoiDung.update({
            where: {
                id: id
            },
            data: { avatar: url }
        });
    }
}
