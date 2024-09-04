import { Inject, Injectable } from '@nestjs/common';
import {
  IUserService,
  IUserServiceToken,
} from '../../../domain/user/interface/IUserService';
import { IDeleteUserCase } from '../interfaces/Idelete-user-case';

@Injectable()
export class DeleteUserByIdUseCase implements IDeleteUserCase {
  constructor(
    @Inject(IUserServiceToken) private readonly userService: IUserService,
  ) {}

  async execute(id: string): Promise<void> {
    return this.userService.delete(id);
  }
}
