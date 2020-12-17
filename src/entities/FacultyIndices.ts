import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Faculty } from './Faculty'
import { Date } from './Date'


@Index("PK__Faculty___3213E83F9ED29266", ["id",], { unique: true })
@Entity("Faculty_indices$", { schema: "dbo" })
export class FacultyIndices {

  // @Column("float",{ name:"Показник_масштабу_діяльності_(Мі)",nullable:true,precision:53 })
  // :number | null;

  // @Column("float",{ name:"Показник_наукової_діяльності_(Ні)",nullable:true,precision:53 })
  // :number | null;

  // @Column("float",{ name:"Показник_міжнародного_визнання_(МВі)",nullable:true,precision:53 })
  // :number | null;

  // @Column("float",{ name:"Показник_працевлаштування_випускників_(ПВі)",nullable:true,precision:53 })
  // :number | null;

  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @ManyToOne(() => Faculty, faculty => faculty.facultyIndices)
  @JoinColumn([{ name: "Faculty", referencedColumnName: "id" },
  ])

  faculty: Faculty;

  @ManyToOne(() => Date, date => date.facultyIndices)
  @JoinColumn([{ name: "Date", referencedColumnName: "id" },
  ])

  date: Date;

}
