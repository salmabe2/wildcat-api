import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AreaModule } from './area/area.module';
import { PublicationModule } from './publication/publication.module';

@Module({
  imports: [
    ConfigModule.forRoot(),

    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   url: process.env.DATABASE_URL,
    //   autoLoadEntities: true,
    //   synchronize: false,  // Use migrations for schema changes
    // }),

    AreaModule,
    PublicationModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
