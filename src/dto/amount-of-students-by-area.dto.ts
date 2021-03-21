import { Expose, Transform } from 'class-transformer';
import { dateEntityTransformer } from './transformers/date-entity.transformer';

export class AmountOfStudentsByAreaModelDto {
  @Expose()
  id: number;
  @Expose()
  amount: number | null;  
  @Expose()
  @Transform(dateEntityTransformer)
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
