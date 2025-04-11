import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';

import { PartnerService } from './partner.service';
import { PartnerController } from './partner.controller';
import { Partner, PartnerSchema } from './entities/partner.entity';

@Module({
  controllers: [PartnerController],
  providers: [PartnerService],
    imports: [
      // MongooseModule.forFeature([{ name: Partner.name, schema: PartnerSchema }])
    ]
})
export class PartnerModule {}
