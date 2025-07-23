/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { IBaseRepository } from './interfaces/base.repository.interface';

@Injectable()
export class BaseRepository<T> implements IBaseRepository<T> {
  constructor(
    private readonly prisma: PrismaService,
    private readonly modelName: keyof PrismaService,
  ) {}

  protected get model() {
    return this.prisma[this.modelName] as any;
  }

  async findAll(): Promise<T[]> {
    return await this.model.findMany();
  }

  async create(data: T): Promise<T> {
    return await this.model.create({ data });
  }

  async update(id: number, data: Partial<T>): Promise<T> {
    return await this.model.update({ where: { id }, data });
  }

  async delete(id: number): Promise<void> {
    return await this.model.delete({ where: { id } });
  }
}
