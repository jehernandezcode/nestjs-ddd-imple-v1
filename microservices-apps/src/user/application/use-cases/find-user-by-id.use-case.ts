import { Inject, Injectable } from '@nestjs/common';

import { IFindUserByIdUseCase } from '../interfaces/Ifind-user-by-id-use-case';
import {
  IUserService,
  IUserServiceToken,
} from 'src/user/domain/interface/IUserService';
import { User } from 'src/user/domain/user.model';

@Injectable()
export class FindUserByIdUseCase implements IFindUserByIdUseCase {
  constructor(
    @Inject(IUserServiceToken) private readonly userService: IUserService,
  ) {}

  async execute(id: string): Promise<User> {
    return this.userService.findById(id);
  }
}
