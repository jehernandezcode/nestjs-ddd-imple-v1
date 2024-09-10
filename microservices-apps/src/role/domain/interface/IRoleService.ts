import { Role } from '../role.model';

export interface IRoleService {
  create(role: Role): Promise<Role>;
  findById(id: string): Promise<Role | null>;
  delete(id: string): Promise<void>;
}

export const IRoleServiceToken = Symbol('IRoleService');
