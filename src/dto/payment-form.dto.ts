import { Expose } from 'class-transformer';

export class PaymentFormDto {
  @Expose()
  id: number;

  @Expose()
  form: string;
}