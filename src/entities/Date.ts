import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AmountOfStudentsByArea } from "./AmountOfStudentsByArea";
import { FacultyFinancing } from "./FacultyFinancing";
import { FacultyIndicators } from "./FacultyIndicators";
import { FacultyIndices } from "./FacultyIndices";
import { FacultySources } from "./FacultySources";
import { SpecialtySources } from "./SpecialtySources";

@Index("PK__Date$__3213E83F4EAC6DB4", ["id"], { unique: true })
@Entity("Date$", { schema: "dbo" })
export class DateEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("datetime", { name: "Date", nullable: true })
  date: Date | null;

  @OneToMany(
    () => AmountOfStudentsByArea,
    (amountOfStudentsByArea) => amountOfStudentsByArea.date
  )
  amountOfStudentsByAreas: AmountOfStudentsByArea[];

  @OneToMany(
    () => FacultyFinancing,
    (facultyFinancing) => facultyFinancing.date
  )
  facultyFinancings: FacultyFinancing[];

  @OneToMany(
    () => FacultyIndicators,
    (facultyIndicators) => facultyIndicators.date
  )
  facultyIndicators: FacultyIndicators[];

  @OneToMany(() => FacultyIndices, (facultyIndices) => facultyIndices.date)
  facultyIndices: FacultyIndices[];

  @OneToMany(() => FacultySources, (facultySources) => facultySources.date)
  facultySources: FacultySources[];

  @OneToMany(
    () => SpecialtySources,
    (specialtySources) => specialtySources.date
  )
  specialtySources: SpecialtySources[];

  @OneToMany(
    () => SpecialtySources,
    (specialtySources) => specialtySources.date2
  )
  specialtySources2: SpecialtySources[];
}
