import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Faculty } from './Faculty'
import { DateEntity } from './Date'


@Index("PK__Faculty___3213E83F9ED29266", ["id",], { unique: true })
@Entity("Faculty_indices$", { schema: "dbo" })
export class FacultyIndices {

  @Column("float", { name: "ActivityScaleIndicator", nullable: true, precision: 53 })
  activityScaleIndicator: number | null;

  @Column("float", { name: "IndexScientificActivity", nullable: true, precision: 53 })
  indexScientificActivity: number | null;

  @Column("float", { name: "InternationalRecognitionIndicator", nullable: true, precision: 53 })
  internationalRecognitionIndicator: number | null;

  @Column("float", { name: "GraduateEmploymentIndicator", nullable: true, precision: 53 })
  graduateEmploymentIndicator: number | null;

  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @ManyToOne(() => Faculty, faculty => faculty.facultyIndices)
  @JoinColumn([{ name: "Faculty", referencedColumnName: "id" },
  ])

  faculty: Faculty;

  @ManyToOne(() => DateEntity, date => date.facultyIndices)
  @JoinColumn([{ name: "Date", referencedColumnName: "id" },
  ])

  date: DateEntity;

}
