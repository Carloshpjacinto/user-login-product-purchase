import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserController } from './user.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { RepositoryFactory } from '../common/factory/Repository.factory';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserService, RepositoryFactory],
  exports: [UserService],
})
export class UserModule {}
