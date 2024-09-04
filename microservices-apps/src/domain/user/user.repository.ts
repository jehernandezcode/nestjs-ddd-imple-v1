import { User } from './user.model';

export interface IUserRepository {
  create(user: User): Promise<User>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  update(id: string, user: User): Promise<User>;
  delete(id: string): Promise<void>;
}

export const USER_REPOSITORY = 'USER_REPOSITORY';
