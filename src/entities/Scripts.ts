import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK__Scripts__3213E83F2FED39AA", ["id"], { unique: true })
@Entity("Scripts", { schema: "dbo" })
export class Scripts {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "Name", nullable: true, length: 255 })
  name: string | null;

  @Column("varchar", { name: "Description", nullable: true, length: 255 })
  description: string | null;

  @Column("varchar", { name: "Type", nullable: true, length: 255 })
  type: string | null;

  @Column("text", { name: "Result", nullable: true })
  result: string | null;

  @Column("datetime", { name: "Date", nullable: true })
  date: Date | null;
}
