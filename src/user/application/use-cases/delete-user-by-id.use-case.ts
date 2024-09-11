import { Inject, Injectable } from '@nestjs/common';

import { IDeleteUserCase } from '../interfaces/Idelete-user-case';
import {
  IUserService,
  IUserServiceToken,
} from 'src/user/domain/interface/IUserService';

@Injectable()
export class DeleteUserByIdUseCase implements IDeleteUserCase {
  constructor(
    @Inject(IUserServiceToken) private readonly userService: IUserService,
  ) {}

  async execute(id: string): Promise<void> {
    return this.userService.delete(id);
  }
}
