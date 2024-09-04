import { User } from '../../../domain/user/user.model';

export interface IFindUserByIdUseCase {
  execute(id: string): Promise<User>;
}

export const IFindUserByIdUseCaseToken = Symbol('IFindUserByIdUseCase');
