import { PrismaModule } from '../prisma/prisma.module';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { forwardRef, Module } from '@nestjs/common';
import { AuthLoginService } from './service/authLogin.service';
import { AuthController } from './auth.controller';
import { RepositoryFactory } from '../common/factory/Repository.factory';
import { GenerateJwtToken } from './tools/generateJwtToken.tool';

@Module({
  imports: [
    PrismaModule,
    forwardRef(() => UserModule),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthLoginService, RepositoryFactory, GenerateJwtToken],
})
export class AuthModule {}
