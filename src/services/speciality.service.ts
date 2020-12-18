import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { Specialties } from '../entities/Specialties';
import { SpecialityModel } from '../models/specialty.model';
import { GenericCrudService } from './generic-crud.service';

@Injectable()
export class SpecialityService extends GenericCrudService<Specialties, SpecialityModel> {
  constructor(connection: Connection) {
    super(connection, Specialties);
  }
}