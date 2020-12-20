import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseInterceptors } from '@nestjs/common';
import { DateDto } from '../dto/date.dto';
import { DtoTransformInterceptor } from '../interceptors/dto-transform.interceptor';
import { DateModel } from '../models/date.model';
import { DateService } from '../services/date.service';

@Controller('dates')
export class DatesController {
  constructor(private service: DateService) {

  }

  @Get()
  @UseInterceptors(new DtoTransformInterceptor(DateDto))
  findAll() {
    return this.service.getAll();
  }

  @Get(':id(\\d+)')
  @UseInterceptors(new DtoTransformInterceptor(DateDto))
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.service.get(id);
  }

  @Post()
  create(@Body() model: DateModel) {
    return this.service.create(model);
  }

  @Put(':id(\\d+)')
  update(@Param('id', ParseIntPipe) id: number, @Body() model: DateModel) {
    return this.service.update(id, model);
  }

  @Delete(':id(\\d+)')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.service.delete(id);
  }
}
