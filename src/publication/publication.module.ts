import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PublicationService } from './publication.service';
import { PublicationController } from './publication.controller';
import { Publication, PublicationSchema } from './entities/publication.entity';

@Module({
  controllers: [PublicationController],
  providers: [PublicationService],
  imports: [
    MongooseModule.forFeature([{ name: Publication.name, schema: PublicationSchema }])
  ]
})
export class PublicationModule { }
