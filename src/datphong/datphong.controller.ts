import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { DatphongService } from './datphong.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { DatPhong } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';
import { DatPhongDTO } from './dto/datphong.dto';

@ApiTags("DatPhong")
@Controller('datphong')
export class DatphongController {
  constructor(private readonly datphongService: DatphongService) { }

  @Get("/get-phong-thue")
  getPhongThue(): Promise<DatPhong[]> {
    return this.datphongService.getPhongThue()
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Post("/create-phong-thue")
  createPhongThue(@Body() datPhongDTO: DatPhongDTO): Promise<any> {
    return this.datphongService.createPhongThue(datPhongDTO)
  }

  @Get("/get-phong-thue-info/:id")
  getPhongThueInfo(@Param("id", ParseIntPipe) id: number) {
    return this.datphongService.getPhongThueInfo(id)
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Put("/update-phong-thue-info/:id")
  updatePhongThue(@Param("id", ParseIntPipe) id: number, @Body() datPhongDTO: DatPhongDTO) {
    return this.datphongService.updatePhongThue(id, datPhongDTO)
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Delete("/delele-phong-thue/:id")
  deletePhongThue(@Param("id", ParseIntPipe) id: number) {
    return this.datphongService.deletePhongThue(id)
  }

  @Get("/get-phong-thue-theo-ma-nguoi-dung/:maNguoiDung")
  getPhongThueByMa(@Param("maNguoiDung", ParseIntPipe) maNguoiDung: number): Promise<DatPhong[]> {
    return this.datphongService.getPhongThueByMa(maNguoiDung)
  }
}
