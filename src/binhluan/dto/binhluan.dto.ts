import { ApiProperty } from "@nestjs/swagger";

export class BinhLuanDTO {
    @ApiProperty()
    id: number

    @ApiProperty()
    maPhong: number

    @ApiProperty()
    maNguoiBinhLuan: number

    @ApiProperty()
    ngayBinhLuan: Date

    @ApiProperty()
    noiDung: string

    @ApiProperty()
    saoBinhLuan: number
}