import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class FacultyDto {
  @ApiProperty()
  @Expose()
  id: number;

  @ApiProperty()
  @Expose()
  faculty?: string;
}