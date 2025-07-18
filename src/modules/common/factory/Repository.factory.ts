import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { IBaseRepository } from '../repositories/interfaces/base.repository.interface';
import { BaseRepository } from '../repositories/base.repository';

@Injectable()
export class RepositoryFactory {
  constructor(private readonly prisma: PrismaService) {}

  create<T>(modelName: keyof PrismaService): IBaseRepository<T> {
    return new BaseRepository<T>(this.prisma, modelName);
  }
}
