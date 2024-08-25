import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient, ViTri } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { ViTriDTO } from './dto/vitri.dto';

@Injectable()
export class VitriService {
    constructor(private configService: ConfigService, private prismaService: PrismaService) {

    }

    async getAllViTri(): Promise<ViTri[]> {
        let data: ViTri[] = await this.prismaService.viTri.findMany();
        return data;
    }

    async createViTri(model: ViTriDTO): Promise<any> {
        let newData = {
            id: model.id,
            ten_vi_tri: model.tenViTri,
            tinh_thanh: model.tinhThanh,
            quoc_gia: model.quocGia,
            hinh_anh: model.hinhAnh
        }
        return await this.prismaService.viTri.create({
            data: newData
        })
    }

    async deleteViTri(id: number) {
        return await this.prismaService.viTri.delete({
            where: {
                id: id
            }
        })
    }

    async getViTriInfo(id: number) {
        return await this.prismaService.viTri.findMany({
            where: {
                id: id
            }
        })
    }

    async updateViTri(id: number, model: ViTriDTO): Promise<any> {
        let newData = {
            id: model.id,
            ten_vi_tri: model.tenViTri,
            tinh_thanh: model.tinhThanh,
            quoc_gia: model.quocGia,
            hinh_anh: model.hinhAnh
        }
        const data = await this.prismaService.viTri.update({
            where: {
                id: id
            },
            data: newData
        })
        return data;
    }

    async updateViTriHinhAnh(id: number, url: string): Promise<any> {
        const result = this.prismaService.viTri.update({
            where: {
                id: id
            },
            data: {
                hinh_anh: url
            }
        })
        console.log(result)
        return result;
    }
}
