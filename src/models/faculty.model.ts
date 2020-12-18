import { Type } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class FacultyModel {
  @Type(() => String)
  @IsNotEmpty()
  faculty: string;
}