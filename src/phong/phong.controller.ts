import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { PhongService } from './phong.service';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { Phong } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';
import { PhongDTO } from './dto/phong.dto';
import { query } from 'express';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { FilesUploadDto } from 'src/file/file-upload.dto';

@ApiTags("Phong")
@Controller('phong')
export class PhongController {
  constructor(private readonly phongService: PhongService) { }

  @Get("/get-phong-thue")
  getAllPhong(): Promise<Phong[]> {
    return this.phongService.getAllPhong();
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Post("/create-phong")
  createViTri(@Body() model: PhongDTO) {
    return this.phongService.createPhong(model)
  }

  @Get("/get-phong-theo-vi-tri")
  getPhongByViTri(@Query("ma_vi_tri", ParseIntPipe) ma_vi_tri: number): Promise<Phong[]> {
    return this.phongService.getPhongByViTri(ma_vi_tri);
  }

  @Get("/get-phong-info/:id")
  getPhongInfo(@Param("id", ParseIntPipe) id: number) {
    return this.phongService.getPhongInfo(id)
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Put("/update-phong-info/:id")
  updatePhong(@Param("id", ParseIntPipe) id: number, @Body() phongDTO: PhongDTO) {
    return this.phongService.updatePhong(id, phongDTO)
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Delete("/delele-phong/:id")
  deletePhong(@Param("id", ParseIntPipe) id: number) {
    return this.phongService.deletePhong(id)
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @ApiConsumes("multipart/form-data")
  @ApiBody({
    type: FilesUploadDto,
  })
  @UseInterceptors(FilesInterceptor("file", 1, {
    storage: diskStorage({
      destination: process.cwd() + "/public/img/phong",
      filename: (req, file, callback) => callback(null, new Date().getTime() + "_" + file.originalname)
    })
  }))
  @Post("/upload-hinh-phong/:id")
  uploadHinhPhong(@Param("id", ParseIntPipe) id: number, @UploadedFiles() files: Express.Multer.File[]) {
    const file = files[0];
    const url = `/public/img/phong/${file.filename}`;
    console.log("URL to be saved:", url);
    return this.phongService.uploadHinhPhong(id, url);
  }
}
