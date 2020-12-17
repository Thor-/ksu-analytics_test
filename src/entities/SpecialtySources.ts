import {
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Specialties } from "./Specialties";
import { Date } from "./Date";
import { Faculty } from "./Faculty";

@Index("PK__Specialt__3213E83FEE28D03D", ["id"], { unique: true })
@Entity("Specialty_sources$", { schema: "dbo" })
export class SpecialtySources {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @ManyToOne(() => Specialties, (specialties) => specialties.specialtySources)
  @JoinColumn([{ name: "Specialty", referencedColumnName: "id" }])
  specialty: Specialties;

  @ManyToOne(() => Date, (date) => date.specialtySources)
  @JoinColumn([{ name: "Date", referencedColumnName: "id" }])
  date: Date;

  @ManyToOne(() => Date, (date) => date.specialtySources2)
  @JoinColumn([{ name: "Date", referencedColumnName: "id" }])
  date2: Date;

  @ManyToOne(() => Faculty, (faculty) => faculty.specialtySources)
  @JoinColumn([{ name: "Faculty", referencedColumnName: "id" }])
  faculty: Faculty;
}
