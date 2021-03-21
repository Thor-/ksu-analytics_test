import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Faculty } from "./Faculty";
import { SpecialtySources } from "./SpecialtySources";

@Index("PK__Departme__3214EC0711E35531", ["id"], { unique: true })
@Entity("Departments$", { schema: "dbo" })
export class Department {
    @PrimaryGeneratedColumn({ type: "int", name: "id" })
    id: number;

    @ManyToOne(() => Faculty, faculty => faculty.departments)
    @JoinColumn([{ name: "Faculty", referencedColumnName: "id" }])
    faculty: Faculty;

    @Column("nvarchar", { name: "Department", nullable: false, length: 100 })
    department: string;

    @OneToMany(
        () => Department,
        (department) => department.specialtySources
    )
    specialtySources: SpecialtySources[];
}