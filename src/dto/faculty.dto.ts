import { Expose } from 'class-transformer';

export class FacultyDto {  
  @Expose()
  id: number;

  @Expose()
  faculty?: string;
}