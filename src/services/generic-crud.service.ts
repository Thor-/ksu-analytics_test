import { Connection, EntityTarget } from 'typeorm';

export abstract class GenericCrudService<TEntity, TModel> {
  constructor(
    protected connection: Connection,
    private entityTarget: EntityTarget<TEntity>) {
  }

  getAll(): Promise<Array<TEntity>> {
    const repository = this.connection.getRepository(this.entityTarget);
    return repository.find();
  }

  get(id: number): Promise<TEntity> {
    return this.connection.getRepository(this.entityTarget).findOne(id);
  }

  async create(model: TModel): Promise<void> {
    const repository = this.connection.getRepository(this.entityTarget);
    await repository.insert(model);
  }

  async update(id: number, model: TModel): Promise<void> {
    const repository = this.connection.getRepository(this.entityTarget);
    await repository.update(id, model);
  }

  async delete(id: number): Promise<void> {
    const repository = this.connection.getRepository(this.entityTarget);
    await repository.delete(id);
  }
}