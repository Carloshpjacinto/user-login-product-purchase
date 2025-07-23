import { Injectable } from '@nestjs/common';
import { IBaseRepository } from 'src/modules/common/repositories/interfaces/base.repository.interface';
import { User } from '@prisma/client';
import { RepositoryFactory } from 'src/modules/common/factory/Repository.factory';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UserUpdateService {
  private readonly userRepository: IBaseRepository<User>;

  constructor(private readonly repositoryFactory: RepositoryFactory) {
    this.userRepository = this.repositoryFactory.create<User>('user');
  }

  async execute(id: number, data: UpdateUserDto): Promise<string> {
    await this.userRepository.update(id, data);

    return 'Usuario atualizado com sucesso!';
  }
}
