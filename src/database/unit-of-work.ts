import { Injectable } from '@nestjs/common';
import { Connection, EntityTarget, Repository } from 'typeorm';

@Injectable()
export class UnitOfWork {
  constructor(private connection: Connection) {    
  }

  getRepository<T>(entityTarget: EntityTarget<T>): Repository<T> {
    return this.connection.getRepository(entityTarget);
  }
}