import { Injectable } from '@nestjs/common';
import { DatPhong } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { DatPhongDTO } from './dto/datphong.dto';

@Injectable()
export class DatphongService {
    constructor(private prismaService: PrismaService) {
    }

    async getPhongThue(): Promise<DatPhong[]> {
        let data: DatPhong[] = await this.prismaService.datPhong.findMany()
        return data
    }

    async createPhongThue(model: DatPhongDTO): Promise<any> {
        let newData = {
            id: model.id,
            ma_phong: model.maPhong,
            ngay_den: model.ngayDen,
            ngay_di: model.ngayDi,
            so_luong_khach: model.soLuongKhach,
            ma_nguoi_dat: model.maNguoiDung
        }
        let data = await this.prismaService.datPhong.create({
            data: newData
        })
        return data;
    }

    async getPhongThueInfo(id: number) {
        return await this.prismaService.datPhong.findMany({
            where: {
                id: id
            }
        })
    }

    async updatePhongThue(id: number, model: DatPhongDTO): Promise<any> {
        let newData = {
            id: model.id,
            ma_phong: model.maPhong,
            ngay_den: model.ngayDen,
            ngay_di: model.ngayDi,
            so_luong_khach: model.soLuongKhach,
            ma_nguoi_dat: model.maNguoiDung
        }
        const data = await this.prismaService.datPhong.update({
            where: {
                id: id
            },
            data: newData
        })
        return data;
    }

    async deletePhongThue(id: number) {
        return await this.prismaService.datPhong.delete({
            where: {
                id: id
            }
        })
    }

    async getPhongThueByMa(maNguoiDung: number): Promise<DatPhong[]> {
        let data: DatPhong[] = await this.prismaService.datPhong.findMany({
            where: {
                ma_nguoi_dat: maNguoiDung
            }
        })
        return data
    }
}
