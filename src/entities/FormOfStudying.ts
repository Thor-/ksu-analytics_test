import { Column, Entity, Index, OneToMany } from "typeorm";
import { AmountOfStudentsByArea } from "./AmountOfStudentsByArea";

@Index("PK__Form_of___3213E83F51D790A5", ["id"], { unique: true })
@Entity("Form_of_studying$", { schema: "dbo" })
export class FormOfStudying {
  @Column("int", { primary: true, name: "id" })
  id: number;

  @Column("nvarchar", { name: "Form_of_studying", nullable: true, length: 255 })
  formOfStudying: string | null;

  @OneToMany(
    () => AmountOfStudentsByArea,
    (amountOfStudentsByArea) => amountOfStudentsByArea.formOfStudying
  )
  amountOfStudentsByAreas: AmountOfStudentsByArea[];
}
