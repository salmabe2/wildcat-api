import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Area } from './entities/area.entity';
import { AreaController } from './area.controller';
import { AreaService } from './area.service';

@Module({
  controllers: [AreaController],
  providers: [AreaService],
  imports: [
    ConfigModule.forRoot(),
    // TypeOrmModule.forFeature([Area])
  ],
})
export class AreaModule {}
