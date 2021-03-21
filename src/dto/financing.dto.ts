import { Expose, Transform } from "class-transformer";
import { dateEntityTransformer } from "./transformers/date-entity.transformer";

export class FinancingDto {
    @Expose()
    fundingGhe: number | null;

    @Expose()
    financingKsu: number | null;
  
    @Expose()
    unitCostAi: number | null;
  
    @Expose()
    unitCostRci: number | null;
  
    @Expose()
    volumeGhe: number | null;
  
    @Expose()
    receiptsKsu: number | null;
  
    @Expose()
    @Transform(dateEntityTransformer)
    date: string | null;
  
    @Expose()
    id: number;
}
