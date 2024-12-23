import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { StudyAreaService } from './study-area.service';
import { StudyAreaController } from './study-area.controller';
import { StudyArea, StudyAreaSchema } from './entities/study-area.entity';

@Module({
  controllers: [StudyAreaController],
  providers: [StudyAreaService],
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([{ name: StudyArea.name, schema: StudyAreaSchema }])
  ]
})
export class StudyAreaModule { }
