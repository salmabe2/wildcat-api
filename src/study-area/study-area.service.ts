import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateStudyAreaDto } from './dto/create-study-area.dto';
import { UpdateStudyAreaDto } from './dto/update-study-area.dto';
import { StudyArea } from './entities/study-area.entity';

@Injectable()
export class StudyAreaService {
  constructor(
    @InjectModel(StudyArea.name)
    private studyAreaModel: Model<StudyArea>
  ) { }

  // create(createStudyAreaDto: CreateStudyAreaDto) {
  //   return 'This action adds a new studyArea';
  // }

  findAll(): Promise<StudyArea[]> {
    return this.studyAreaModel.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} studyArea`;
  // }

  // update(id: number, updateStudyAreaDto: UpdateStudyAreaDto) {
  //   return `This action updates a #${id} studyArea`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} studyArea`;
  // }
}
