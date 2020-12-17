import { Column, Entity, Index, OneToMany } from "typeorm";
import { AmountOfStudentsByArea } from "./AmountOfStudentsByArea";

@Index("PK__Level_of__3213E83F8E1E8DCB", ["id"], { unique: true })
@Entity("Level_of_education$", { schema: "dbo" })
export class LevelOfEducation {
  @Column("int", { primary: true, name: "id" })
  id: number;

  @Column("nvarchar", { name: "Level", nullable: true, length: 255 })
  level: string | null;

  @OneToMany(
    () => AmountOfStudentsByArea,
    (amountOfStudentsByArea) => amountOfStudentsByArea.levelOfEducation
  )
  amountOfStudentsByAreas: AmountOfStudentsByArea[];
}
