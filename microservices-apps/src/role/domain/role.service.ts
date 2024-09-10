import { Inject, Injectable } from '@nestjs/common';
import { IRoleRepository, ROLE_REPOSITORY } from './role.repository';
import { Role } from './role.model';
import { IRoleService } from './interface/IRoleService';

@Injectable()
export class RoleService implements IRoleService {
  constructor(
    @Inject(ROLE_REPOSITORY)
    private roleRepository: IRoleRepository,
  ) {}

  async create(user: Role): Promise<Role> {
    return this.roleRepository.create(user);
  }
  async findById(id: string): Promise<Role | null> {
    return this.roleRepository.findById(id);
  }
  async delete(id: string): Promise<void> {
    this.roleRepository.delete(id);
  }
}
