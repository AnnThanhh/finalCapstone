import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { VitriService } from './vitri.service';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { ViTri } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';
import { ViTriDTO } from './dto/vitri.dto';
import { FilesUploadDto } from 'src/file/file-upload.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@ApiTags("ViTri")
@Controller('vitri')
export class VitriController {
  constructor(private readonly vitriService: VitriService) { }

  @Get("/get-vi-tri")
  getAllViTri(): Promise<ViTri[]> {
    return this.vitriService.getAllViTri();
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Post("/create-vi-tri")
  createViTri(@Body() model: ViTriDTO) {
    return this.vitriService.createViTri(model)
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Delete("/delele-vi-tri/:id")
  deleteViTri(@Param("id", ParseIntPipe) id: number) {
    return this.vitriService.deleteViTri(id)
  }

  @Get("/get-vi-tri-info/:id")
  getViTriInfo(@Param("id", ParseIntPipe) id: number) {
    return this.vitriService.getViTriInfo(id)
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Put("/update-vi-tri-info/:id")
  updateViTri(@Param("id", ParseIntPipe) id: number, @Body() viTriDTO: ViTriDTO) {
    return this.vitriService.updateViTri(id, viTriDTO)
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @ApiConsumes("multipart/form-data")
  @ApiBody({
    type: FilesUploadDto,
  })
  @UseInterceptors(FilesInterceptor("file", 1, {
    storage: diskStorage({
      destination: process.cwd() + "/public/img/vitri",
      filename: (req, file, callback) => callback(null, new Date().getTime() + "_" + file.originalname)
    })
  }))
  @Post("/upload-vi-tri/:id")
  updateViTriHinhAnh(@Param("id", ParseIntPipe) id: number, @UploadedFiles() files: Express.Multer.File[]) {
    const file = files[0];
    const url = `/public/img/avt/${file.filename}`;
    return this.vitriService.updateViTriHinhAnh(id, url);
  }
}
