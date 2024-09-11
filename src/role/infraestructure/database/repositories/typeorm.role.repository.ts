import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IRoleRepository } from 'src/role/domain/role.repository';
import { RoleEntity } from '../entities/role.entity';
import { Role } from 'src/role/domain/role.model';

@Injectable()
export class TypeORMRoleRepository implements IRoleRepository {
  constructor(
    @InjectRepository(RoleEntity)
    private roleRepository: Repository<RoleEntity>,
  ) {}

  async create(role: Role): Promise<Role> {
    const roleEntity = this.roleRepository.create({
      name: role.name,
      role: role.role,
    });

    const roleSaved = await this.roleRepository.save(roleEntity);
    return { ...roleSaved };
  }

  async findById(id: string): Promise<Role | null> {
    const role = await this.roleRepository.findOne({ where: { id } });
    return { ...role };
  }

  async delete(id: string): Promise<void> {
    await this.roleRepository.delete({ id });
  }
}
