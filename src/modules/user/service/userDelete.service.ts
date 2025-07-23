import { Injectable } from '@nestjs/common';
import { IBaseRepository } from 'src/modules/common/repositories/interfaces/base.repository.interface';
import { User } from '@prisma/client';
import { RepositoryFactory } from 'src/modules/common/factory/Repository.factory';

@Injectable()
export class UserDeleteService {
  private readonly userRepository: IBaseRepository<User>;

  constructor(private readonly repositoryFactory: RepositoryFactory) {
    this.userRepository = this.repositoryFactory.create<User>('user');
  }

  async execute(id: number): Promise<string> {
    await this.userRepository.delete(id);

    return 'Usuario deletado!';
  }
}
