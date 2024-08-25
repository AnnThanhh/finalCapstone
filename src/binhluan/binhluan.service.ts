import { Injectable } from '@nestjs/common';
import { BinhLuan } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { BinhLuanDTO } from './dto/binhluan.dto';

@Injectable()
export class BinhluanService {
    constructor(private prismaService: PrismaService) {

    }

    async getAllBinhLuan(): Promise<BinhLuan[]> {
        return await this.prismaService.binhLuan.findMany()
    }

    async createBinhLuan(model: BinhLuanDTO): Promise<any> {
        let newData = {
            id: model.id,
            ma_cong_viec: model.maPhong,
            ma_nguoi_binh_luan: model.maNguoiBinhLuan,
            ngay_binh_luan: model.ngayBinhLuan,
            noi_dung: model.noiDung,
            sao_binh_luan: model.saoBinhLuan
        }
        let data = await this.prismaService.binhLuan.create({
            data: newData
        })
        return data;
    }

    async updateBinhLuan(id: number, model: BinhLuanDTO): Promise<any> {
        let newData = {
            id: model.id,
            ma_cong_viec: model.maPhong,
            ma_nguoi_binh_luan: model.maNguoiBinhLuan,
            ngay_binh_luan: model.ngayBinhLuan,
            noi_dung: model.noiDung,
            sao_binh_luan: model.saoBinhLuan
        }
        return await this.prismaService.binhLuan.update({
            where: {
                id: id
            },
            data: newData
        })
    }

    async deleteBinhLuan(id: number): Promise<any> {
        const data = await this.prismaService.binhLuan.delete({
            where: {
                id: id
            }
        })
        return "đã xóa thành công"
    }

    async getBinhLuan(maPhong: number): Promise<BinhLuan[]> {
        let data: BinhLuan[] = await this.prismaService.binhLuan.findMany({
            where: {
                ma_cong_viec: maPhong
            }
        })
        return data
    }
}
