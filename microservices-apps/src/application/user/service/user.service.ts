import { Injectable } from '@nestjs/common';
import { User } from 'src/domain/user/user.model';
import { IUserService } from '../interface/IUserService';
import {
  CreateUserDtoRequest,
  UpdateUserDtoRequest,
} from '../dto/user-dto.request';

@Injectable()
export class UserService implements IUserService {
  constructor() {}
  async create(user: CreateUserDtoRequest): Promise<User> {
    console.log(user);
    return new User();
  }
  async findById(id: string): Promise<User | null> {
    console.log(id);
    return new User();
  }
  async findAll(): Promise<User[]> {
    return [new User()];
  }
  async update(id: string, user: UpdateUserDtoRequest): Promise<User> {
    console.log(id, user);
    return new User();
  }
  async delete(id: string): Promise<void> {
    console.log(id);
  }
}
