import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseInterceptors } from '@nestjs/common';
import { SpecialityIndexDto } from '../dto/speciality-index.dto';
import { SpecialityDto } from '../dto/speciality.dto';
import { DtoTransformInterceptor } from '../interceptors/dto-transform.interceptor';
import { SpecialityModel } from '../models/specialty.model';
import { SpecialityService } from '../services/speciality.service';

@Controller('specialities')
export class SpecialitiesController {
  constructor(private specialityService: SpecialityService) {

  }

  @Get()
  @UseInterceptors(new DtoTransformInterceptor(SpecialityDto))
  findAll() {
    return this.specialityService.getAll();
  }

  @Get(':id(\\d+)')
  @UseInterceptors(new DtoTransformInterceptor(SpecialityDto))
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.specialityService.get(id);
  }

  @Post()
  create(@Body() model: SpecialityModel) {
    return this.specialityService.create(model);
  }

  @Put(':id(\\d+)')
  update(@Param('id', ParseIntPipe) id: number, @Body() model: SpecialityModel) {
    return this.specialityService.update(id, model);
  }

  @Delete(':id(\\d+)')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.specialityService.delete(id);
  }

  @Get(':id(\\d+)/indexes')
  @UseInterceptors(new DtoTransformInterceptor(SpecialityIndexDto))
  async getIndexes(@Param('id', ParseIntPipe) id: number) {
    const data = await this.specialityService.getIndexes(id);
    return data;
  }
}
