import { User } from 'src/user/domain/user.model';

export interface IFindUserByIdUseCase {
  execute(id: string): Promise<User>;
}

export const IFindUserByIdUseCaseToken = Symbol('IFindUserByIdUseCase');
