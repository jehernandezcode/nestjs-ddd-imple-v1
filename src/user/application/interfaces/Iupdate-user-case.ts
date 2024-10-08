import { User } from 'src/user/domain/user.model';
import { UpdateUserDtoRequest } from '../dto/user-dto.request';

export interface IUpdateUserCase {
  execute(id: string, user: UpdateUserDtoRequest): Promise<User>;
}

export const IUpdateUserCaseToken = Symbol('IUpdateUserCase');
