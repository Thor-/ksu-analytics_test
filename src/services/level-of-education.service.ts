import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { LevelOfEducation } from '../entities/LevelOfEducation';
import { LevelOfEducationModel } from '../models/level-of-education.model';
import { GenericCrudService } from './generic-crud.service';

@Injectable()
export class LevelOfEducationService extends GenericCrudService<LevelOfEducation, LevelOfEducationModel> {
  constructor(connection: Connection) {
    super(connection, LevelOfEducation);
  }
}
