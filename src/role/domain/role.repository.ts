import { Role } from './role.model';

export interface IRoleRepository {
  create(user: Role): Promise<Role>;
  findById(id: string): Promise<Role | null>;
  delete(id: string): Promise<void>;
}

export const ROLE_REPOSITORY = 'ROLE_REPOSITORY';
