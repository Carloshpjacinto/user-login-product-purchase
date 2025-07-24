export interface IBaseRepository<T> {
  create(data: T): Promise<T>;
  findAll(): Promise<T[]>;
  findByEmail(email: string): Promise<T>;
  update(id: number, data: Partial<T>): Promise<T>;
  delete(id: number): Promise<void>;
}
