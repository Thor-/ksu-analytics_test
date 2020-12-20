import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { FormOfStudying } from '../entities/FormOfStudying';
import { FormOfStudyingModel } from '../models/form-of-studying.model';
import { GenericCrudService } from './generic-crud.service';

@Injectable()
export class FormOfStudyingService extends GenericCrudService<FormOfStudying, FormOfStudyingModel> {
  constructor(connection: Connection) {
    super(connection, FormOfStudying);
  }
}
