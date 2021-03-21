import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Faculty } from './Faculty'
import { DateEntity } from './Date'


@Index("PK__Faculty___3213E83F6A25CC32", ["id",], { unique: true })
@Entity("Faculty_financing$", { schema: "dbo" })
export class FacultyFinancing {

  @Column("float", { name: "FundingVolume", nullable: true, precision: 53 })
  fundingVolume: number | null;

  @Column("float", { name: "StableFunding", nullable: true, precision: 53 })
  stableFunding: number | null;

  @Column("float", { name: "AdditionalFunding", nullable: true, precision: 53 })
  additionalFunding: number | null;

  @Column("float", { name: "FacultiesFinancing", nullable: true, precision: 53 })
  facultiesFinancing: number | null;

  @Column("float", { name: "SpecialFundFinancing", nullable: true, precision: 53 })
  specialFundFinancing: number | null;

  @Column("float", { name: "GeneralFundFinancing", nullable: true, precision: 53 })
  generalFundFinancing: number | null;

  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @ManyToOne(() => Faculty, faculty => faculty.facultyFinancings)
  @JoinColumn([{ name: "Faculty", referencedColumnName: "id" },
  ])

  faculty: Faculty;

  @ManyToOne(() => DateEntity, date => date.facultyFinancings)
  @JoinColumn([{ name: "Date", referencedColumnName: "id" },
  ])

  date: DateEntity;

}
