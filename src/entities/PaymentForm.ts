import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AmountOfStudentsByArea } from "./AmountOfStudentsByArea";

@Index("PK__Payment___3213E83FA920EAD1", ["id"], { unique: true })
@Entity("Payment_form$", { schema: "dbo" })
export class PaymentForm {
  @Column("nvarchar", { name: "Form", nullable: true, length: 255 })
  form: string | null;

  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @OneToMany(
    () => AmountOfStudentsByArea,
    (amountOfStudentsByArea) => amountOfStudentsByArea.paymentForm
  )
  amountOfStudentsByAreas: AmountOfStudentsByArea[];
}
