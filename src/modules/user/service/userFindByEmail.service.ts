import { Injectable } from '@nestjs/common';
import { IBaseRepository } from 'src/modules/common/repositories/interfaces/base.repository.interface';
import { User } from '@prisma/client';
import { RepositoryFactory } from 'src/modules/common/factory/Repository.factory';

@Injectable()
export class UserFindByEmailService {
  private readonly userRepository: IBaseRepository<User>;

  constructor(private readonly repositoryFactory: RepositoryFactory) {
    this.userRepository = this.repositoryFactory.create<User>('user');
  }

  async execute(email: string): Promise<User> {
    const user = await this.userRepository.findByEmail(email);
    return user;
  }
}
