import { ApiProperty } from "@nestjs/swagger";

export class ViTriDTO {
    @ApiProperty()
    id: number;

    @ApiProperty()
    tenViTri: string;

    @ApiProperty()
    tinhThanh: string;

    @ApiProperty()
    quocGia: string;

    @ApiProperty()
    hinhAnh: string;
}