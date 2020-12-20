import { Expose } from 'class-transformer';

export class LevelOfEducationDto {
  @Expose()
  id: number;

  @Expose()
  level: string;
}
