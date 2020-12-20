import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class FacultyModel {
  @ApiProperty()
  @Type(() => String)
  @IsNotEmpty()
  faculty: string;
}