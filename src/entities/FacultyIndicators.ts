import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { DateEntity } from './Date'
import { Faculty } from './Faculty'


@Index("PK__Faculty___3213E83F275A72E3", ["id",], { unique: true })
@Entity("Faculty_indicators$", { schema: "dbo" })
export class FacultyIndicators {

  @Column("float", { name: "EstimatedContingent", nullable: true, precision: 53 })
  estimatedContingent: number | null;

  @Column("float", { name: "GivenContingent", nullable: true, precision: 53 })
  givenContingent: number | null;

  @Column("float", { name: "SpecialFundContingent", nullable: true, precision: 53 })
  specialFundContingent: number | null;

  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @ManyToOne(() => DateEntity, date => date.facultyIndicators)
  @JoinColumn([{ name: "Date", referencedColumnName: "id" },
  ])

  date: DateEntity;

  @ManyToOne(() => Faculty, faculty => faculty.facultyIndicators)
  @JoinColumn([{ name: "Faculty", referencedColumnName: "id" },
  ])

  faculty: Faculty;

}
