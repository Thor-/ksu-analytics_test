import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { Faculty } from '../entities/Faculty';
import { FacultyFinancing } from '../entities/FacultyFinancing';
import { FacultyIndicators } from '../entities/FacultyIndicators';
import { FacultyIndices } from '../entities/FacultyIndices';
import { FacultySources } from '../entities/FacultySources';
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

  getFinancing(facultyId: number) {
    return this.connection.getRepository(FacultyFinancing)
      .createQueryBuilder('fi')
      .leftJoinAndSelect('fi.date', 'd')
      .where('fi.Faculty = :facultyId', {facultyId})
      .getMany();
  }

  getIndices(facultyId: number) {
    return this.connection.getRepository(FacultyIndices)
      .createQueryBuilder('fi')
      .leftJoinAndSelect('fi.date', 'd')
      .where('fi.Faculty = :facultyId', {facultyId})
      .getMany();
  }

  getSources(facultyId: number) {
    return this.connection.getRepository(FacultySources)
      .createQueryBuilder('fi')
      .leftJoinAndSelect('fi.date', 'd')
      .where('fi.Faculty = :facultyId', {facultyId})
      .getMany();
  }
}