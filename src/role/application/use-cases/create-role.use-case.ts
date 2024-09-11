import { Inject, Injectable } from '@nestjs/common';

import { ICreateRoleUseCase } from '../interfaces/Icreate-role-case';
import { Role } from '../../domain/role.model';
import { CreateRoleDtoRequest } from '../dto/role-dto.request';
import { ERole } from '../../../shared/enums/EnumRole';
import {
  IRoleService,
  IRoleServiceToken,
} from '../../domain/interface/IRoleService';

@Injectable()
export class CreateRoleUseCase implements ICreateRoleUseCase {
  constructor(
    @Inject(IRoleServiceToken) private readonly roleService: IRoleService,
  ) {}

  async execute(createRoleDto: CreateRoleDtoRequest): Promise<Role> {
    const newRole = new Role(
      undefined,
      createRoleDto.name,
      ERole[createRoleDto.name],
    );
    return this.roleService.create(newRole);
  }
}
