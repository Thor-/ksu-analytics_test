import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseInterceptors } from '@nestjs/common';
import { FacultyIndexDto } from '../dto/faculty-index.dto';
import { FacultyIndicatorDto } from '../dto/faculty-indicator.dto';
import { FacultySourceDto } from '../dto/faculty-source.dto';
import { FacultyDto } from '../dto/faculty.dto';
import { DtoTransformInterceptor } from '../interceptors/dto-transform.interceptor';
import { FacultyModel } from '../models/faculty.model';
import { FacultyService } from '../services/facult.service';

@Controller('faculties')
export class FacultiesController {
  constructor(private facultyService: FacultyService) {

  }

  @Get()
  @UseInterceptors(new DtoTransformInterceptor(FacultyDto))
  findAll() {
    return this.facultyService.getAll();
  }

  @Get(':id(\\d+)')
  @UseInterceptors(new DtoTransformInterceptor(FacultyDto))
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.facultyService.get(id);
  }

  @Post()
  create(@Body() model: FacultyModel) {
    return this.facultyService.create(model);
  }

  @Put(':id(\\d+)')
  update(@Param('id', ParseIntPipe) id: number, @Body() model: FacultyModel) {
    return this.facultyService.update(id, model);
  }

  @Delete(':id(\\d+)')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.facultyService.delete(id);
  }

  @Get(':id(\\d+)/indicators')
  @UseInterceptors(new DtoTransformInterceptor(FacultyIndicatorDto))
  async getIndicators(@Param('id', ParseIntPipe) id: number) {
    const data = await this.facultyService.getIndicators(id);
    return data;
  }

  @Get(':id(\\d+)/financing')
  @UseInterceptors(new DtoTransformInterceptor(FacultyIndicatorDto))
  async getFinancing(@Param('id', ParseIntPipe) id: number) {
    const data = await this.facultyService.getFinancing(id);
    return data;
  }

  @Get(':id(\\d+)/indices')
  @UseInterceptors(new DtoTransformInterceptor(FacultyIndexDto))
  async getIndices(@Param('id', ParseIntPipe) id: number) {
    const data = await this.facultyService.getIndices(id);
    return data;
  }

  @Get(':id(\\d+)/sources')
  @UseInterceptors(new DtoTransformInterceptor(FacultySourceDto))
  async getSources(@Param('id', ParseIntPipe) id: number) {
    const data = await this.facultyService.getSources(id);
    return data;
  }
}
