import { Controller, Post, Body } from '@nestjs/common';
import { UserCreateService } from '../user/service/userCreate.service';
import { User } from '@prisma/client';
import { AuthLoginService } from './service/authLogin.service';
import { AuthLoginDto } from './dto/auth-login.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userCreateService: UserCreateService,
    private readonly authLoginService: AuthLoginService,
  ) {}

  @Post()
  create(@Body() data: User) {
    return this.userCreateService.execute(data);
  }

  @Post('login')
  login(@Body() data: AuthLoginDto) {
    return this.authLoginService.execute(data);
  }
}
