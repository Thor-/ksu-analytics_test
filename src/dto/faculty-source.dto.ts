import { Expose, Transform } from 'class-transformer';
import { dateEntityTransformer } from './transformers/date-entity.transformer';

export class FacultySourceDto {
    @Expose()
    id: number;

    @Expose()
    @Transform(dateEntityTransformer)
    date: string | null;
}
