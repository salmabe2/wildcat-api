import { Injectable } from '@nestjs/common';

import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class PublicationService {
  private readonly dataPath = path.join(
    __dirname,
    '..',
    'data',
    'publications.json',
  );

  findAll() {
    const raw = fs.readFileSync(this.dataPath, 'utf-8');
    return JSON.parse(raw);
  }

  findOne(id: number) {
    const publications = this.findAll();
    return publications.find(publication => publication.id === id);
  }
}
