import { Module } from '@nestjs/common';
import { StudyAreaService } from './study-area.service';
import { StudyAreaController } from './study-area.controller';

@Module({
  controllers: [StudyAreaController],
  providers: [StudyAreaService],
})
export class StudyAreaModule {}
