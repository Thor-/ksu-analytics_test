import { Expose, Transform } from 'class-transformer';
import * as moment from 'moment';

export class FacultyIndicatorDto {
  @Expose()
  id: number;
  
  @Expose()
  estimatedContingent: number | null;
  
  @Expose()
  givenContingent: number | null;

  @Expose()
  specialFundContingent: number | null;
  
  @Expose()
  @Transform(value => value?.date ? moment(value?.date).format('YYYY-MM-DD') : null)
  date: string | null;
}