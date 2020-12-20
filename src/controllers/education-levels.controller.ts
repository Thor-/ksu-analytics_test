import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseInterceptors } from '@nestjs/common';
import { LevelOfEducationDto } from '../dto/level-of-education.dto';
import { DtoTransformInterceptor } from '../interceptors/dto-transform.interceptor';
import { LevelOfEducationModel } from '../models/level-of-education.model';
import { LevelOfEducationService } from '../services/level-of-education.service';

@Controller('education-levels')
export class EducationLevelsController {
  constructor(private speciality: LevelOfEducationService) {

  }

  @Get()
  @UseInterceptors(new DtoTransformInterceptor(LevelOfEducationDto))
  findAll() {
    return this.speciality.getAll();
  }

  @Get(':id(\\d+)')
  @UseInterceptors(new DtoTransformInterceptor(LevelOfEducationDto))
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.speciality.get(id);
  }

  @Post()
  create(@Body() model: LevelOfEducationModel) {
    return this.speciality.create(model);
  }

  @Put(':id(\\d+)')
  update(@Param('id', ParseIntPipe) id: number, @Body() model: LevelOfEducationModel) {
    return this.speciality.update(id, model);
  }

  @Delete(':id(\\d+)')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.speciality.delete(id);
  }
}
