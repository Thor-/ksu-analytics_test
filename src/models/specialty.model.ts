import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class SpecialityModel {
  @ApiProperty()
  @Type(() => String)
  @IsNotEmpty()
  specialty: string;
}