import { Expose, Transform } from "class-transformer";
import { dateEntityTransformer } from "./transformers/date-entity.transformer";

export class FacultyFinancingDto {
    @Expose()
    id: number;
    
    @Expose()
    fundingVolume: number | null;
    
    @Expose()
    stableFunding: number | null;
    
    @Expose()
    additionalFunding: number | null;
    
    @Expose()
    facultiesFinancing: number | null;
    
    @Expose()
    specialFundFinancing: number | null;
    
    @Expose()
    generalFundFinancing: number | null;
    
    @Expose()
    @Transform(dateEntityTransformer)
    date: string | null;
}
