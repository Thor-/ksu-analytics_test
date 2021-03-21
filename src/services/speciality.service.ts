import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { Specialties } from '../entities/Specialties';
import { SpecialtyIndices } from '../entities/SpecialtyIndices';
import { SpecialityModel } from '../models/specialty.model';
import { GenericCrudService } from './generic-crud.service';

@Injectable()
export class SpecialityService extends GenericCrudService<Specialties, SpecialityModel> {
  constructor(connection: Connection) {
    super(connection, Specialties);
  }

  getIndexes(specialtyId: number): Promise<Array<SpecialtyIndices>> {
    return this.connection.getRepository(SpecialtyIndices)
      .createQueryBuilder('fi')
      .leftJoinAndSelect('fi.date', 'd')
      .where('fi.specialty = :specialtyId', {specialtyId})
      .getMany();
  }
}