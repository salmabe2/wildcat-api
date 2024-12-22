import { Injectable } from '@nestjs/common';
import { CreateStudyAreaDto } from './dto/create-study-area.dto';
import { UpdateStudyAreaDto } from './dto/update-study-area.dto';

@Injectable()
export class StudyAreaService {
  create(createStudyAreaDto: CreateStudyAreaDto) {
    return 'This action adds a new studyArea';
  }

  findAll() {
    return `This action returns all studyArea`;
  }

  findOne(id: number) {
    return `This action returns a #${id} studyArea`;
  }

  update(id: number, updateStudyAreaDto: UpdateStudyAreaDto) {
    return `This action updates a #${id} studyArea`;
  }

  remove(id: number) {
    return `This action removes a #${id} studyArea`;
  }
}
