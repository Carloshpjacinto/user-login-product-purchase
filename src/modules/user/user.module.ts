import { Module } from '@nestjs/common';
import { UserCreateService } from './service/userCreate.service';
import { UserController } from './user.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { UserUpdateService } from './service/userUpdate.service';
import { UserDeleteService } from './service/userDelete.service';
import { RepositoryFactory } from '../common/factory/Repository.factory';
import { UserFindByEmailService } from './service/userFindByEmail.service';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [
    UserFindByEmailService,
    UserCreateService,
    UserUpdateService,
    UserDeleteService,
    RepositoryFactory,
  ],
  exports: [UserFindByEmailService, UserCreateService],
})
export class UserModule {}
