import { Module } from '@nestjs/common';
import { DatphongService } from './datphong.service';
import { DatphongController } from './datphong.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [DatphongController],
  providers: [DatphongService, PrismaService],
})
export class DatphongModule { }
