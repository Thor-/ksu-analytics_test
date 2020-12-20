import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class FormOfStudyingModel {
  @ApiProperty()
  @Type(() => String)
  @IsNotEmpty()
  formOfStudying: string;
}
