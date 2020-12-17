import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Date } from "./Date";
import { Faculty } from "./Faculty";

@Entity("Faculty_sources$", { schema: "dbo" })
export class FacultySources {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @ManyToOne(() => Date, (date) => date.facultySources)
  @JoinColumn([{ name: "Date", referencedColumnName: "id" }])
  date: Date;

  @ManyToOne(() => Faculty, (faculty) => faculty.facultySources)
  @JoinColumn([{ name: "Faculty", referencedColumnName: "id" }])
  faculty: Faculty;
}
