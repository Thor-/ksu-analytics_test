import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { AmountOfStudentsByArea } from '../entities/AmountOfStudentsByArea';
import { AmountOfStudentsByAreaModel } from '../models/amount-of-students-by-area.model';
import { GenericCrudService } from './generic-crud.service';

@Injectable()
export class AmountOfStudentsByAreaService extends GenericCrudService<AmountOfStudentsByArea, AmountOfStudentsByAreaModel> {
  constructor(connection: Connection) {
    super(connection, AmountOfStudentsByArea);
  }

  getAll(): Promise<Array<AmountOfStudentsByArea>> {
    return this.connection.getRepository(AmountOfStudentsByArea)
      .createQueryBuilder('st')
      .innerJoinAndSelect('st.date', 'd')
      .innerJoinAndSelect('st.specialty', 's')
      .innerJoinAndSelect('st.paymentForm', 'p')
      .innerJoinAndSelect('st.formOfStudying', 'f')
      .innerJoinAndSelect('st.levelOfEducation', 'l')
      .getMany();
  }

  get(id: number): Promise<AmountOfStudentsByArea> {
    return this.connection.getRepository(AmountOfStudentsByArea)
      .createQueryBuilder('st')
      .innerJoinAndSelect('st.date', 'd')
      .innerJoinAndSelect('st.specialty', 's')
      .innerJoinAndSelect('st.paymentForm', 'p')
      .innerJoinAndSelect('st.formOfStudying', 'f')
      .innerJoinAndSelect('st.levelOfEducation', 'l')
      .where('st.id = :id', {id})
      .getOne();
  }
}
