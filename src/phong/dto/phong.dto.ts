import { ApiProperty } from "@nestjs/swagger";

export class PhongDTO {
    @ApiProperty()
    id: number

    @ApiProperty()
    tenPhong: string

    @ApiProperty()
    khach: number

    @ApiProperty()
    phongNgu: number

    @ApiProperty()
    giuong: number

    @ApiProperty()
    phongTam: number

    @ApiProperty()
    moTa: string

    @ApiProperty()
    giaTien: number

    @ApiProperty()
    mayGiat: boolean

    @ApiProperty()
    banLa: boolean

    @ApiProperty()
    tivi: boolean

    @ApiProperty()
    wifi: boolean

    @ApiProperty()
    bep: boolean

    @ApiProperty()
    doXe: boolean

    @ApiProperty()
    hoBoi: boolean

    @ApiProperty()
    banUi: boolean

    @ApiProperty()
    maViTri: number

    @ApiProperty()
    hinhAnh: string

    //tenPhong, khach, phongNgu, giuong, phongTam, moTa, giaTien, mayGiat, banLa, tivi, wifi, bep, do_xe, ho_boi, ban_ui, hinhAnh
}