import { Module } from '@nestjs/common';
import { BinhluanService } from './binhluan.service';
import { BinhluanController } from './binhluan.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [BinhluanController],
  providers: [BinhluanService, PrismaService],
})
export class BinhluanModule { }
