import { Inject, Injectable } from '@nestjs/common';
import { User } from '../../../domain/user/user.model';
import {
  IUserService,
  IUserServiceToken,
} from '../../../domain/user/interface/IUserService';
import { IFindUserByIdUseCase } from '../interfaces/Ifind-user-by-id-use-case';

@Injectable()
export class FindUserByIdUseCase implements IFindUserByIdUseCase {
  constructor(
    @Inject(IUserServiceToken) private readonly userService: IUserService,
  ) {}

  async execute(id: string): Promise<User> {
    return this.userService.findById(id);
  }
}
