import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { DateEntity } from "./Date";
import { Faculty } from "./Faculty";

@Entity("Faculty_sources$", { schema: "dbo" })
export class FacultySources {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @ManyToOne(() => DateEntity, (date) => date.facultySources)
  @JoinColumn([{ name: "Date", referencedColumnName: "id" }])
  date: DateEntity;

  @ManyToOne(() => Faculty, (faculty) => faculty.facultySources)
  @JoinColumn([{ name: "Faculty", referencedColumnName: "id" }])
  faculty: Faculty;
}
