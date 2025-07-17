import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { ProductModule } from './modules/product/product.module';

@Module({
  imports: [UserModule, AuthModule, ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
