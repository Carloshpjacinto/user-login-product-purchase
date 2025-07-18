import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './service/user.service';
import { User } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() data: User) {
    return this.userService.create(data);
  }
}
