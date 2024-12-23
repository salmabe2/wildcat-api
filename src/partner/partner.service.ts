import { Injectable } from '@nestjs/common';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Partner } from './entities/partner.entity';
import { Model } from 'mongoose';

@Injectable()
export class PartnerService {
  constructor(
    @InjectModel(Partner.name)
    private partnerModel: Model<Partner>
  ){}
  // create(createPartnerDto: CreatePartnerDto) {
  //   return 'This action adds a new partner';
  // }

  findAll() {
    return this.partnerModel.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} partner`;
  // }

  // update(id: number, updatePartnerDto: UpdatePartnerDto) {
  //   return `This action updates a #${id} partner`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} partner`;
  // }
}
