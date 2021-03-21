import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("Financing$", { schema: "dbo" })
export class Financing {

  @Column("float",{ name:"FundingGhe",nullable:true,precision:53 })
  fundingGhe: number | null;

  @Column("float",{ name:"FinancingKsu",nullable:true,precision:53 })
  financingKsu:number | null;

  @Column("float",{ name:"UnitCostAi",nullable:true,precision:53 })
  unitCostAi:number | null;

  @Column("float",{ name:"UnitCostRci",nullable:true,precision:53 })
  unitCostRci:number | null;

  @Column("float",{ name:"VolumeGhe",nullable:true,precision:53 })
  volumeGhe:number | null;

  @Column("float",{ name:"ReceiptsKsu",nullable:true,precision:53 })
  receiptsKsu:number | null;

  @Column("date", { name: "Date", nullable: true })
  date: Date | null;

  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

}
