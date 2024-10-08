import { User } from 'src/user/domain/user.model';
import { CreateUserDtoRequest } from '../dto/user-dto.request';

export interface ICreateUserUseCase {
  execute(createUserDto: CreateUserDtoRequest): Promise<User>;
}

export const ICreateUserUseCaseToken = Symbol('ICreateUserUseCase');
