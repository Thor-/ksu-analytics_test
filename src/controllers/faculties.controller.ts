import { ClassSerializerInterceptor, Controller, Get, UseInterceptors } from '@nestjs/common';
import { FacultyService } from '../services/facult.service';

@Controller('faculties')
export class FacultiesController {
  constructor(private facultyService: FacultyService) {

  }

  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  findAll() {
    return this.facultyService.getAll();
  }
}
