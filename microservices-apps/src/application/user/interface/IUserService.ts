import { User } from 'src/domain/user/user.model';
import {
  CreateUserDtoRequest,
  UpdateUserDtoRequest,
} from '../dto/user-dto.request';

export interface IUserService {
  create(user: CreateUserDtoRequest): Promise<User>;
  findById(id: string): Promise<User | null>;
  findAll(): Promise<User[]>;
  update(id: string, user: UpdateUserDtoRequest): Promise<User>;
  delete(id: string): Promise<void>;
}
