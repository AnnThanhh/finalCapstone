import { Module } from '@nestjs/common';
import { NguoidungService } from './nguoidung.service';
import { NguoidungController } from './nguoidung.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [NguoidungController],
  providers: [NguoidungService, PrismaService],
})
export class NguoidungModule { }
