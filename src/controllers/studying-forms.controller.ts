import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseInterceptors } from '@nestjs/common';
import { FormOfStudyingDto } from '../dto/form-of-studying.dto';
import { DtoTransformInterceptor } from '../interceptors/dto-transform.interceptor';
import { FormOfStudyingModel } from '../models/form-of-studying.model';
import { FormOfStudyingService } from '../services/form-of-studying.service';

@Controller('studying-forms')
export class StudyingFormsController {
  constructor(private service: FormOfStudyingService) {

  }

  @Get()
  @UseInterceptors(new DtoTransformInterceptor(FormOfStudyingDto))
  findAll() {
    return this.service.getAll();
  }

  @Get(':id(\\d+)')
  @UseInterceptors(new DtoTransformInterceptor(FormOfStudyingDto))
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.service.get(id);
  }

  @Post()
  create(@Body() model: FormOfStudyingModel) {
    return this.service.create(model);
  }

  @Put(':id(\\d+)')
  update(@Param('id', ParseIntPipe) id: number, @Body() model: FormOfStudyingModel) {
    return this.service.update(id, model);
  }

  @Delete(':id(\\d+)')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.service.delete(id);
  }
}