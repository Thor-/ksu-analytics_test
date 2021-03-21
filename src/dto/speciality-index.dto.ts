import { Expose, Transform } from "class-transformer";
import { dateEntityTransformer } from "./transformers/date-entity.transformer";

export class SpecialityIndexDto {
    @Expose()
    id: number;

    @Expose()
    indexOfSpecialty: number | null;

    @Expose()
    @Transform(dateEntityTransformer)
    date: string | null;
}
