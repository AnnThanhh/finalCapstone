import { Module } from '@nestjs/common';
import { VitriService } from './vitri.service';
import { VitriController } from './vitri.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [VitriController],
  providers: [VitriService, PrismaService],
})
export class VitriModule { }
