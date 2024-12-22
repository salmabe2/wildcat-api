import { PartialType } from '@nestjs/mapped-types';
import { CreateStudyAreaDto } from './create-study-area.dto';

export class UpdateStudyAreaDto extends PartialType(CreateStudyAreaDto) {}
