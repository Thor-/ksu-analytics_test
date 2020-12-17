import {Column,Entity,Index,JoinColumn,ManyToOne,PrimaryGeneratedColumn} from "typeorm";
import {Date} from './Date'
import {Faculty} from './Faculty'


@Index("PK__Faculty___3213E83F275A72E3",["id",],{ unique:true })
@Entity("Faculty_indicators$" ,{schema:"dbo" } )
export  class FacultyIndicators {

// @Column("float",{ name:"Розрахунковий контингент",nullable:true,precision:53 })
// :number | null;

// @Column("float",{ name:"Приведений контингент",nullable:true,precision:53 })
// :number | null;

// @Column("float",{ name:"Приведений розрахунковий контингент по спеціальному фонду",nullable:true,precision:53 })
// :number | null;

@PrimaryGeneratedColumn({ type:"int", name:"id" })
id:number;

@ManyToOne(()=>Date,date=>date.facultyIndicators)
@JoinColumn([{ name: "Date", referencedColumnName: "id" },
])

date:Date;

@ManyToOne(()=>Faculty,faculty=>faculty.facultyIndicators)
@JoinColumn([{ name: "Faculty", referencedColumnName: "id" },
])

faculty:Faculty;

}
