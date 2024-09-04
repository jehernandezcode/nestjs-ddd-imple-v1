import { User } from '../user.model';

export interface IUserService {
  create(user: User): Promise<User>;
  findById(id: string): Promise<User | null>;
  update(id: string, user: User): Promise<User>;
  delete(id: string): Promise<void>;
}

export const IUserServiceToken = Symbol('IUserService');
