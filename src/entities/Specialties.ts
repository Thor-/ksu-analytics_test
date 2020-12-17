import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AmountOfStudentsByArea } from "./AmountOfStudentsByArea";
import { SpecialtyIndices } from "./SpecialtyIndices";
import { SpecialtySources } from "./SpecialtySources";

@Index("PK__Specialt__3213E83FEFE522D3", ["id"], { unique: true })
@Entity("Specialties$", { schema: "dbo" })
export class Specialties {
  @Column("nvarchar", { name: "Specialty", nullable: true, length: 255 })
  specialty: string | null;

  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @OneToMany(
    () => AmountOfStudentsByArea,
    (amountOfStudentsByArea) => amountOfStudentsByArea.specialty
  )
  amountOfStudentsByAreas: AmountOfStudentsByArea[];

  @OneToMany(
    () => SpecialtyIndices,
    (specialtyIndices) => specialtyIndices.specialty
  )
  specialtyIndices: SpecialtyIndices[];

  @OneToMany(
    () => SpecialtySources,
    (specialtySources) => specialtySources.specialty
  )
  specialtySources: SpecialtySources[];
}
