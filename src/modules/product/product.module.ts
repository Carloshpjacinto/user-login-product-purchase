import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { ProductCreateService } from './service/productCreate.service';
import { ProductController } from './product.controller';
import { RepositoryFactory } from '../common/factory/Repository.factory';
import { ProductDeleteService } from './service/productDelete.service';
import { ProductFindAllService } from './service/productFindAll.service';

@Module({
  imports: [PrismaModule],
  controllers: [ProductController],
  providers: [
    ProductCreateService,
    ProductDeleteService,
    ProductFindAllService,
    RepositoryFactory,
  ],
  exports: [],
})
export class ProductModule {}
