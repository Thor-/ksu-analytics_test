import { Transform, Type } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import * as moment from 'moment';

export class DateModel {
  @Type(() => Date)
  @IsNotEmpty()
  @Transform(value => moment(value.date, 'YYYY-MM-DD', true).toDate())
  date: Date;
}
