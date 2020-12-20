import { Expose, Transform } from 'class-transformer';
import * as moment from 'moment';

export class AmountOfStudentsByAreaModelDto {
  @Expose()
  id: number;
  @Expose()
  amount: number | null;  
  @Expose()
  @Transform(value => value?.date ? moment(value?.date).format('YYYY-MM-DD') : null)
  date: string;
  @Expose()
  @Transform(value => value?.specialty || null)
  specialty: string;
  @Expose()
  @Transform(value => value?.form || null)
  paymentForm: string;
  @Expose()
  @Transform(value => value?.formOfStudying || null)
  formOfStudying: string;
  @Expose()
  @Transform(value => value?.level || null)
  levelOfEducation: string;
}
