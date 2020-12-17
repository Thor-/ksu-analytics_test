import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("Financing$", { schema: "dbo" })
export class Financing {

  // @Column("float",{ name:"Обсяг фінансування стабільної діяльності ЗВО (грн#)",nullable:true,precision:53 })
  // :number | null;

  // @Column("float",{ name:"Фінансування ХДУ в залежності від показників",nullable:true,precision:53 })
  // :number | null;

  // @Column("float",{ name:"Вартість одиниці комплексного показнику діяльності Аі (грн)",nullable:true,precision:53 })
  // :number | null;

  // @Column("float",{ name:"Вартість одиниці розрахункового контингенту РКі (грн)",nullable:true,precision:53 })
  // :number | null;

  // @Column("float",{ name:"Обсяг_фінансування_ЗВО",nullable:true,precision:53 })
  // :number | null;

  // @Column("float",{ name:"Надходження ХДУ (спеціальний фонд)",nullable:true,precision:53 })
  // :number | null;

  @Column("date", { name: "Date", nullable: true })
  date: Date | null;

  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

}
