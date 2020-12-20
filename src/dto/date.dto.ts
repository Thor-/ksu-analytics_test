import { Expose, Transform } from 'class-transformer';
import * as moment from 'moment';

export class DateDto {
  @Expose()
  id: number;

  @Expose()
  @Transform(value => moment(value).format('YYYY-MM-DD'))
  date: string;
}
