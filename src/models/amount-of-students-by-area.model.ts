import { Type } from 'class-transformer';
import { IsInt } from 'class-validator';

export class AmountOfStudentsByAreaModel {
  
  @Type(() => Number)
  @IsInt()  
  amount: number;  
  
  @Type(() => Number)
  @IsInt()
  date: number;
  
  @Type(() => Number)
  @IsInt()
  specialty: number;
  
  @Type(() => Number)
  @IsInt()
  paymentForm: number;
  
  @Type(() => Number)
  @IsInt()
  formOfStudying: number;
  
  @Type(() => Number)
  @IsInt()
  levelOfEducation: number;
}
