import { Column, Entity, Index, OneToMany } from "typeorm";
import { FacultyFinancing } from "./FacultyFinancing";
import { FacultyIndicators } from "./FacultyIndicators";
import { FacultyIndices } from "./FacultyIndices";
import { FacultySources } from "./FacultySources";
import { SpecialtySources } from "./SpecialtySources";

@Index("PK__Faculty___3213E83F6DC1FB02", ["id"], { unique: true })
@Entity("Faculty$", { schema: "dbo" })
export class Faculty {
  @Column("int", { primary: true, name: "id", generated: 'increment' })
  id: number;

  @Column("nvarchar", { name: "Faculty", nullable: true, length: 255 })
  faculty: string | null;

  @OneToMany(
    () => FacultyFinancing,
    (facultyFinancing) => facultyFinancing.faculty
  )
  facultyFinancings: FacultyFinancing[];

  @OneToMany(
    () => FacultyIndicators,
    (facultyIndicators) => facultyIndicators.faculty
  )
  facultyIndicators: FacultyIndicators[];

  @OneToMany(() => FacultyIndices, (facultyIndices) => facultyIndices.faculty)
  facultyIndices: FacultyIndices[];

  @OneToMany(() => FacultySources, (facultySources) => facultySources.faculty)
  facultySources: FacultySources[];

  @OneToMany(
    () => SpecialtySources,
    (specialtySources) => specialtySources.faculty
  )
  specialtySources: SpecialtySources[];
}
