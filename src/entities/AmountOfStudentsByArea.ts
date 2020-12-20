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
import { PaymentForm } from "./PaymentForm";
import { FormOfStudying } from "./FormOfStudying";
import { LevelOfEducation } from "./LevelOfEducation";

@Index("PK__Amount_o__3213E83F7D92F72C", ["id"], { unique: true })
@Entity("Amount_of_students_by_area$", { schema: "dbo" })
export class AmountOfStudentsByArea {
  @Column("int", { name: "Amount", nullable: true })
  amount: number | null;

  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @ManyToOne(() => DateEntity, (date) => date.amountOfStudentsByAreas)
  @JoinColumn([{ name: "Date", referencedColumnName: "id" }])
  date: DateEntity;

  @ManyToOne(
    () => Specialties,
    (specialties) => specialties.amountOfStudentsByAreas
  )
  @JoinColumn([{ name: "Specialty", referencedColumnName: "id" }])
  specialty: Specialties;

  @ManyToOne(
    () => PaymentForm,
    (paymentForm) => paymentForm.amountOfStudentsByAreas
  )
  @JoinColumn([{ name: "Payment_form", referencedColumnName: "id" }])
  paymentForm: PaymentForm;

  @ManyToOne(
    () => FormOfStudying,
    (formOfStudying) => formOfStudying.amountOfStudentsByAreas
  )
  @JoinColumn([{ name: "Form_of_studying", referencedColumnName: "id" }])
  formOfStudying: FormOfStudying;

  @ManyToOne(
    () => LevelOfEducation,
    (levelOfEducation) => levelOfEducation.amountOfStudentsByAreas
  )
  @JoinColumn([{ name: "Level_of_education", referencedColumnName: "id" }])
  levelOfEducation: LevelOfEducation;
}
