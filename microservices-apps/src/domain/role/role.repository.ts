import { Role } from './role.model';

export interface RoleRepository {
  create(role: Role): Promise<Role>;
  findById(id: string): Promise<Role | null>;
  findAll(): Promise<Role[]>;
  update(role: Role): Promise<Role>;
  delete(id: string): Promise<void>;
}
