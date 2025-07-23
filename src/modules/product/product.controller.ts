import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { ProductCreateService } from './service/productCreate.service';
import { ProductDeleteService } from './service/productDelete.service';
import { Product } from '@prisma/client';
import { ParamId } from 'src/shared/decorators/paramId.decorator';
import { ProductFindAllService } from './service/productFindAll.service';

@Controller('product')
export class ProductController {
  constructor(
    private readonly productCreateService: ProductCreateService,
    private readonly productDeleteService: ProductDeleteService,
    private readonly productFindAllService: ProductFindAllService,
  ) {}

  @Get()
  findAll() {
    return this.productFindAllService.execute();
  }

  @Post()
  create(@Body() data: Product) {
    return this.productCreateService.execute(data);
  }

  @Delete(':id')
  delete(@ParamId() id: number) {
    return this.productDeleteService.execute(id);
  }
}
