import { Type } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class LevelOfEducationModel {
  @Type(() => String)
  @IsNotEmpty()
  level: string;
}
