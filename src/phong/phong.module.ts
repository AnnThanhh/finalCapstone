import { Module } from '@nestjs/common';
import { PhongService } from './phong.service';
import { PhongController } from './phong.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PhongController],
  providers: [PhongService, PrismaService],
})
export class PhongModule { }
