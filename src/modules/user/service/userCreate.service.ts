import { Injectable } from '@nestjs/common';
import { IBaseRepository } from 'src/modules/common/repositories/interfaces/base.repository.interface';
import { User } from '@prisma/client';
import { RepositoryFactory } from 'src/modules/common/factory/Repository.factory';
import { dataUser } from '../types/dataUser';

@Injectable()
export class UserCreateService {
  private readonly userRepository: IBaseRepository<User>;

  constructor(private readonly repositoryFactory: RepositoryFactory) {
    this.userRepository = this.repositoryFactory.create<User>('user');
  }

  async execute(data: User): Promise<User | dataUser> {
    const responseRequest: dataUser = {
      name: data.name,
      email: data.email,
      cpf: data.cpf,
    };

    await this.userRepository.create(data);

    return responseRequest;
  }
}
