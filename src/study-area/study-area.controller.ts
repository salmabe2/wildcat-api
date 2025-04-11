import { Controller, Get, Param } from '@nestjs/common';
import { StudyAreaService } from './study-area.service';

@Controller('study-area')
export class StudyAreaController {
  constructor(private readonly studyAreaService: StudyAreaService) {}

  @Get()
  findAll() {
    return this.studyAreaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studyAreaService.findOne(+id);
  }
}
