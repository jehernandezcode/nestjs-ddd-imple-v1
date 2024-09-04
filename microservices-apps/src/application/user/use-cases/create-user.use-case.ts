import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDtoRequest } from '../dto/user-dto.request';
import { User } from '../../../domain/user/user.model';
import {
  IUserService,
  IUserServiceToken,
} from '../../../domain/user/interface/IUserService';
import { ICreateUserUseCase } from '../interfaces/Icreate-user-use-case';

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
