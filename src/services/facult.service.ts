import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { Faculty } from '../entities/Faculty';
import { FacultyIndicators } from '../entities/FacultyIndicators';
import { FacultyModel } from '../models/faculty.model';
import { GenericCrudService } from './generic-crud.service';

@Injectable()
export class FacultyService extends GenericCrudService<Faculty, FacultyModel> {
  constructor(connection: Connection) {
    super(connection, Faculty);
  }

  getIndicators(facultyId: number) {
    return this.connection.getRepository(FacultyIndicators)
      .createQueryBuilder('fi')
      .leftJoinAndSelect('fi.date', 'd')
      .where('fi.Faculty = :facultyId', {facultyId})
      .getMany();
  }
}