import { Injectable } from '@nestjs/common';
import { Phong } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { PhongDTO } from './dto/phong.dto';

@Injectable()
export class PhongService {
    constructor(private prismaService: PrismaService) { }

    async getAllPhong(): Promise<Phong[]> {
        let data: Phong[] = await this.prismaService.phong.findMany();
        return data;
    }

    async createPhong(model: PhongDTO): Promise<any> {
        let newData = {
            id: model.id,
            ten_phong: model.tenPhong,
            khach: model.khach,
            phong_ngu: model.phongNgu,
            giuong: model.giuong,
            phong_tam: model.phongTam,
            mo_ta: model.moTa,
            gia_tien: model.giaTien,
            may_giat: model.mayGiat,
            ban_la: model.banLa,
            tivi: model.tivi,
            wifi: model.wifi,
            bep: model.bep,
            do_xe: model.doXe,
            ban_ui: model.banUi,
            ma_vi_tri: model.maViTri,
            hinh_anh: model.hinhAnh
        }
        let data = await this.prismaService.phong.create({
            data: newData
        })
        return data
    }

    async getPhongByViTri(ma_vi_tri: number): Promise<Phong[]> {
        return this.prismaService.phong.findMany({
            where: {
                ma_vi_tri: ma_vi_tri
            },
        })
    }

    async deletePhong(id: number): Promise<any> {
        return await this.prismaService.phong.delete({
            where: {
                id: id
            }
        })
    }

    async getPhongInfo(id: number): Promise<any> {
        await this.prismaService.phong.findFirst({
            where: {
                id: id
            }
        })
        return "xóa thành công"
    }

    async updatePhong(id: number, model: PhongDTO): Promise<any> {
        let newData = {
            id: model.id,
            ten_phong: model.tenPhong,
            khach: model.khach,
            phong_ngu: model.phongNgu,
            giuong: model.giuong,
            phong_tam: model.phongTam,
            mo_ta: model.moTa,
            gia_tien: model.giaTien,
            may_giat: model.mayGiat,
            ban_la: model.banLa,
            tivi: model.tivi,
            wifi: model.wifi,
            bep: model.bep,
            do_xe: model.doXe,
            ban_ui: model.banUi,
            ma_vi_tri: model.maViTri,
            hinh_anh: model.hinhAnh
        }
        const data = await this.prismaService.phong.update({
            where: {
                id: id
            },
            data: newData
        })
        return data;
    }

    async uploadHinhPhong(id: number, url: string): Promise<any> {
        return this.prismaService.phong.update({
            where: {
                id: id
            },
            data: { hinh_anh: url }
        });
    }
}
