import { Expose, Transform } from "class-transformer";
import { dateEntityTransformer } from "./transformers/date-entity.transformer";

export class FacultyIndexDto {
    @Expose()
    id: number;

    @Expose()
    activityScaleIndicator: number | null;

    @Expose()
    indexScientificActivity: number | null;

    @Expose()
    internationalRecognitionIndicator: number | null;

    @Expose()
    graduateEmploymentIndicator: number | null;

    @Expose()
    @Transform(dateEntityTransformer)
    date: string | null;
}
