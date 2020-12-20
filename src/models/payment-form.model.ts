import { Type } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class PaymentFormModel {
  @Type(() => String)
  @IsNotEmpty()
  form: string;
}