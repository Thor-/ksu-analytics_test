import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Faculty } from './Faculty'
import { Date } from './Date'


@Index("PK__Faculty___3213E83F6A25CC32", ["id",], { unique: true })
@Entity("Faculty_financing$", { schema: "dbo" })
export class FacultyFinancing {

  // @Column("float",{ name:"Обсяг_фінансування_галузі_знань",nullable:true,precision:53 })
  // :number | null;

  // @Column("float",{ name:"Стабільне_фінансування_факультетів_грн#",nullable:true,precision:53 })
  // :number | null;

  // @Column("float",{ name:"Додаткове_фінансування_факультетів_грн#",nullable:true,precision:53 })
  // :number | null;

  // @Column("float",{ name:"Фінансування_факультетів_(всього_грн#)",nullable:true,precision:53 })
  // :number | null;

  // @Column("float",{ name:"Фінансування_факультетів_по_спеціальному_фонду",nullable:true,precision:53 })
  // :number | null;

  // @Column("float",{ name:"Фінансування_факультетів_загальний_спеціальний_фонди",nullable:true,precision:53 })
  // :number | null;

  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @ManyToOne(() => Faculty, faculty => faculty.facultyFinancings)
  @JoinColumn([{ name: "Faculty", referencedColumnName: "id" },
  ])

  faculty: Faculty;

  @ManyToOne(() => Date, date => date.facultyFinancings)
  @JoinColumn([{ name: "Date", referencedColumnName: "id" },
  ])

  date: Date;

}
