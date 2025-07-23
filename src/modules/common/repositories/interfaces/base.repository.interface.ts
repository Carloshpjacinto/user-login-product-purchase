export interface IBaseRepository<T> {
  create(data: T): Promise<T>;
  findAll(): Promise<T[]>;
  //findOne(id: number): Promise<T | null>;
  update(id: number, data: Partial<T>): Promise<T>;
  delete(id: number): Promise<void>;
}
