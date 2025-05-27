import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Publication } from './entities/publication.entity';
import { PublicationController } from './publication.controller';
import { PublicationService } from './publication.service';

@Module({
  controllers: [PublicationController],
  providers: [PublicationService],
  imports: [
    // TypeOrmModule.forFeature([Publication])
  ],
})
export class PublicationModule {}
