import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Req, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { NguoidungService } from './nguoidung.service';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { NguoiDung } from '@prisma/client';
import { UserInfoDTO } from './dto/nguoidung.dto';
import { AuthGuard } from '@nestjs/passport';
import { FilesUploadDto } from 'src/file/file-upload.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@ApiTags("NguoiDung")
@Controller('nguoidung')
export class NguoidungController {
  constructor(private readonly nguoidungService: NguoidungService) { }

  @Get("/get-users")
  getAllUsers(): Promise<NguoiDung[]> {
    return this.nguoidungService.getAllUsers();
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Post("/create-user")
  createUser(@Body() model: UserInfoDTO) {
    return this.nguoidungService.createUsers(model)
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Delete("/delele-user/:id")
  deleteUser(@Param("id", ParseIntPipe) id: number) {
    return this.nguoidungService.deleteUser(id)
  }

  @Get("/get-user-info/:id")
  getUserInfo(@Param("id", ParseIntPipe) id: number) {
    return this.nguoidungService.getUserInfo(id)
  }

  @Get("/get-user-by-name/:name")
  searchUserInfoByName(@Param("name") name: string) {
    return this.nguoidungService.searchUserInfoByName(name)
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Put("/update-user-info/:id")
  updateUserInfo(@Param("id", ParseIntPipe) id: number, @Body() userInfoDTO: UserInfoDTO) {
    return this.nguoidungService.updateUsers(id, userInfoDTO)
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @ApiConsumes("multipart/form-data")
  @ApiBody({
    type: FilesUploadDto,
  })
  @UseInterceptors(FilesInterceptor("file", 1, {
    storage: diskStorage({
      destination: process.cwd() + "/public/img/avt",
      filename: (req, file, callback) => callback(null, new Date().getTime() + "_" + file.originalname)
    })
  }))
  @Post("/upload-avatar")
  uploadAvatar(@Req() req, @UploadedFiles() files: Express.Multer.File[]) {
    const id = req.user.id
    const file = files[0]
    const url = `/public/img/avt/{file.filename}`
    return this.nguoidungService.uploadAvatar(id, url);
  }
}
