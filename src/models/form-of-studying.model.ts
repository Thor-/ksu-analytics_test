import { Type } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class FormOfStudyingModel {
  @Type(() => String)
  @IsNotEmpty()
  formOfStudying: string;
}
