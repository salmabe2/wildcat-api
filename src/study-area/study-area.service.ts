import { Injectable } from '@nestjs/common';

import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class StudyAreaService {
  private readonly dataPath = path.join(
    __dirname,
    '..',
    'data',
    'study-areas.json',
  );

  findAll() {
    const raw = fs.readFileSync(this.dataPath, 'utf-8');
    return JSON.parse(raw);
  }

  findOne(id: number) {
    const areas = this.findAll();
    return areas.find(area => area.id === id);
  }
}
