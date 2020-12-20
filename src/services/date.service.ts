import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { DateEntity } from '../entities/Date';
import { DateModel } from '../models/date.model';
import { GenericCrudService } from './generic-crud.service';

@Injectable()
export class DateService extends GenericCrudService<DateEntity, DateModel> {
  constructor(connection: Connection) {
    super(connection, DateEntity);
  }
}
