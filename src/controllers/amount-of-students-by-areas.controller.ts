import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseInterceptors } from '@nestjs/common';
import { AmountOfStudentsByAreaModelDto } from '../dto/amount-of-students-by-area.dto';
import { DtoTransformInterceptor } from '../interceptors/dto-transform.interceptor';
import { AmountOfStudentsByAreaModel } from '../models/amount-of-students-by-area.model';
import { AmountOfStudentsByAreaService } from '../services/amount-of-students-by-area.service';

@Controller('amount-of-students-by-areas')
export class AmountOfStudentsByAreasController {
  constructor(private service: AmountOfStudentsByAreaService) {

  }

  @Get()
  @UseInterceptors(new DtoTransformInterceptor(AmountOfStudentsByAreaModelDto))
  findAll() {
    return this.service.getAll();
  }

  @Get(':id(\\d+)')
  @UseInterceptors(new DtoTransformInterceptor(AmountOfStudentsByAreaModelDto))
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.service.get(id);
  }

  @Post()
  create(@Body() model: AmountOfStudentsByAreaModel) {
    return this.service.create(model);
  }

  @Put(':id(\\d+)')
  update(@Param('id', ParseIntPipe) id: number, @Body() model: AmountOfStudentsByAreaModel) {
    return this.service.update(id, model);
  }

  @Delete(':id(\\d+)')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.service.delete(id);
  }
}
