import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository, USER_REPOSITORY } from './user.repository';
import { User } from './user.model';
import { IUserService } from './interface/IUserService';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @Inject(USER_REPOSITORY)
    private userRepository: IUserRepository,
  ) {}

  async create(user: User): Promise<User> {
    return this.userRepository.create(user);
  }
  async findById(id: string): Promise<User | null> {
    return this.userRepository.findById(id);
  }

  async update(id: string, user: User): Promise<User> {
    return this.userRepository.update(id, user);
  }
  async delete(id: string): Promise<void> {
    this.userRepository.delete(id);
  }
}
