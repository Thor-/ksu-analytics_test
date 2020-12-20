import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class LevelOfEducationModel {
  @ApiProperty()
  @Type(() => String)
  @IsNotEmpty()
  level: string;
}
