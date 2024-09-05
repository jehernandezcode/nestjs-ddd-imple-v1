import { Inject, Injectable } from '@nestjs/common';

import { IUpdateUserCase } from '../interfaces/Iupdate-user-case';
import { UpdateUserDtoRequest } from '../dto/user-dto.request';
import {
  IUserService,
  IUserServiceToken,
} from 'src/user/domain/interface/IUserService';
import { User } from 'src/user/domain/user.model';

@Injectable()
export class UpdateUserByIdUseCase implements IUpdateUserCase {
  constructor(
    @Inject(IUserServiceToken) private readonly userService: IUserService,
  ) {}

  async execute(
    id: string,
    updateUserDto: UpdateUserDtoRequest,
  ): Promise<User> {
    const newData = new User(
      undefined,
      updateUserDto?.firstName,
      updateUserDto?.lastName,
      updateUserDto?.email,
      updateUserDto?.password,
    );
    return this.userService.update(id, newData);
  }
}
