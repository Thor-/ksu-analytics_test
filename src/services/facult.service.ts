import { Injectable } from '@nestjs/common';
import { UnitOfWork } from '../database/unit-of-work';
import { Faculty } from '../entities/Faculty';

@Injectable()
export class FacultyService {
  constructor(private unitOfWork: UnitOfWork) {

  }

  getAll(): Promise<Array<Faculty>> {
    const repository = this.unitOfWork.getRepository(Faculty);
    return repository.find();
  }
}