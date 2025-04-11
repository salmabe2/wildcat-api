import { Injectable } from '@nestjs/common';

import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class PartnerService {
  private readonly dataPath = path.join(
    __dirname,
    '..',
    'data',
    'partners.json',
  );

  findAll() {
    const raw = fs.readFileSync(this.dataPath, 'utf-8');
    return JSON.parse(raw);
  }

  findOne(id: number) {
    const partners = this.findAll();
    return partners.find(partner => partner.id === id);
  }
}
