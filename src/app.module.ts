import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { StudyAreaModule } from './study-area/study-area.module';
import { PartnerModule } from './partner/partner.module';
import { PublicationModule } from './publication/publication.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    // MongooseModule.forRoot(process.env.MONGO_URI),
    StudyAreaModule,
    PartnerModule,
    PublicationModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
