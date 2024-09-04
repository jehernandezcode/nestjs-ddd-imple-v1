import { Inject, Injectable } from '@nestjs/common';
import { User } from '../../../domain/user/user.model';
import {
  IUserService,
  IUserServiceToken,
} from '../../../domain/user/interface/IUserService';
import { IUpdateUserCase } from '../interfaces/IUpdateUserCase';
import { UpdateUserDtoRequest } from '../dto/user-dto.request';

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
