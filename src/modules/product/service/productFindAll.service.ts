import { Injectable } from '@nestjs/common';
import { IBaseRepository } from 'src/modules/common/repositories/interfaces/base.repository.interface';
import { Product } from '@prisma/client';
import { RepositoryFactory } from 'src/modules/common/factory/Repository.factory';

@Injectable()
export class ProductFindAllService {
  private readonly productRepository: IBaseRepository<Product>;

  constructor(private readonly repositoryFactory: RepositoryFactory) {
    this.productRepository = this.repositoryFactory.create<Product>('product');
  }

  async execute(): Promise<Product[]> {
    return await this.productRepository.findAll();
  }
}
