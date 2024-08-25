import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { BinhluanService } from './binhluan.service';
import { BinhLuan } from '@prisma/client';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { BinhLuanDTO } from './dto/binhluan.dto';

@ApiTags("BinhLuan")
@Controller('binhluan')
export class BinhluanController {
  constructor(private readonly binhluanService: BinhluanService) { }

  @Get("/get-binh-luan")
  getAllBinhLuan(): Promise<BinhLuan[]> {
    return this.binhluanService.getAllBinhLuan()
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Post("/create-binh-luan")
  createBinhLuan(@Body() binhLuanDTO: BinhLuanDTO): Promise<any> {
    return this.binhluanService.createBinhLuan(binhLuanDTO)
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Put("/update-binh-luan/:id")
  updateBinhLuan(@Param("id", ParseIntPipe) id: number, @Body() binhLuanDTO: BinhLuanDTO) {
    return this.binhluanService.updateBinhLuan(id, binhLuanDTO)
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Delete("/delele-binh-luan/:id")
  deleteBinhLuan(@Param("id", ParseIntPipe) id: number) {
    return this.binhluanService.deleteBinhLuan(id)
  }

  @Get("/get-binh-luan-theo-ma-phong/:maPhong")
  getBinhLuan(@Param("maPhong", ParseIntPipe) maPhong: number): Promise<BinhLuan[]> {
    return this.binhluanService.getBinhLuan(maPhong)
  }
}
