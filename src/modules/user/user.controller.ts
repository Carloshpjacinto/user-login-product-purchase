import { Controller, Post, Body, Patch, Delete } from '@nestjs/common';
import { UserCreateService } from './service/userCreate.service';
import { UserUpdateService } from './service/userUpdate.service';
import { User } from '@prisma/client';
import { ParamId } from 'src/shared/decorators/paramId.decorator';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDeleteService } from './service/userDelete.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userCreateService: UserCreateService,
    private readonly userUpdateService: UserUpdateService,
    private readonly userDeleteService: UserDeleteService,
  ) {}

  @Post()
  create(@Body() data: User) {
    return this.userCreateService.execute(data);
  }

  @Patch(':id')
  update(@ParamId() id: number, @Body() data: UpdateUserDto) {
    return this.userUpdateService.execute(id, data);
  }

  @Delete(':id')
  delete(@ParamId() id: number) {
    return this.userDeleteService.execute(id);
  }
}
