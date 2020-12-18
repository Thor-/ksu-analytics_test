import { Type } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class SpecialityModel {
  @Type(() => String)
  @IsNotEmpty()
  specialty: string;
}