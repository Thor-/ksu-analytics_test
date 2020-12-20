import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class PaymentFormModel {
  @ApiProperty()
  @Type(() => String)
  @IsNotEmpty()
  form: string;
}