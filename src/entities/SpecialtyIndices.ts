import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { DateEntity } from "./Date";
import { Specialties } from "./Specialties";

@Index("PK__Specialt__3213E83F202FF349", ["id"], { unique: true })
@Entity("Specialty_indices$", { schema: "dbo" })
export class SpecialtyIndices {
  @Column("float", {
    name: "Index_of_specialty",
    nullable: true,
    precision: 53,
  })
  indexOfSpecialty: number | null;

  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @ManyToOne(() => DateEntity, (date) => date.specialityIndeces)
  @JoinColumn([{ name: "Date", referencedColumnName: "id" }])
  date: number | null;

  @ManyToOne(() => Specialties, (specialties) => specialties.specialtyIndices)
  @JoinColumn([{ name: "Specialty", referencedColumnName: "id" }])
  specialty: Specialties;
}
