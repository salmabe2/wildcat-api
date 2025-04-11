import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { UpdatePublicationDto } from './dto/update-publication.dto';

@Controller('publication')
export class PublicationController {
  constructor(private readonly publicationService: PublicationService) {}

  @Get()
  findAll() {
    return this.publicationService.findAll();
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.publicationService.findOne(+id);
  }
}
