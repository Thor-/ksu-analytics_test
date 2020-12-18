import { Expose } from 'class-transformer';

export class SpecialityDto {
  @Expose()
  id: number;

  @Expose()
  specialty?: string;
}