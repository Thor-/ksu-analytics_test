import { Expose } from 'class-transformer';

export class FormOfStudyingDto {
  @Expose()
  id: number;

  @Expose()
  formOfStudying: string;
}
