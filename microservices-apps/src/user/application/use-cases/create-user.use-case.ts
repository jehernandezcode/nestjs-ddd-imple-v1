import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDtoRequest } from '../dto/user-dto.request';

import { ICreateUserUseCase } from '../interfaces/Icreate-user-use-case';
import {
  IUserService,
  IUserServiceToken,
} from 'src/user/domain/interface/IUserService';
import { User } from 'src/user/domain/user.model';

@Injectable()
export class CreateUserUseCase implements ICreateUserUseCase {
  constructor(
    @Inject(IUserServiceToken) private readonly userService: IUserService,
  ) {}

  async execute(createUserDto: CreateUserDtoRequest): Promise<User> {
    const newUser = new User(
      undefined,
      createUserDto.firstName,
      createUserDto.lastName,
      createUserDto.email,
      createUserDto.password,
    );
    return this.userService.create(newUser);
  }
}
