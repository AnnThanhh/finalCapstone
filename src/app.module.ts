import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BinhluanModule } from './binhluan/binhluan.module';
import { NguoidungModule } from './nguoidung/nguoidung.module';
import { DatphongModule } from './datphong/datphong.module';
import { PhongModule } from './phong/phong.module';
import { VitriModule } from './vitri/vitri.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [AuthModule, BinhluanModule, NguoidungModule, DatphongModule, PhongModule, VitriModule, ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
