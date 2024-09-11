import { Inject, Injectable } from '@nestjs/common';

import { Role } from '../../domain/role.model';
import {
  IRoleService,
  IRoleServiceToken,
} from '../../domain/interface/IRoleService';
import { IFindByIdRoleUseCase } from '../interfaces/Ifind-by-id-role-case';

@Injectable()
export class FindByIdRoleUseCase implements IFindByIdRoleUseCase {
  constructor(
    @Inject(IRoleServiceToken) private readonly roleService: IRoleService,
  ) {}

  async execute(id: string): Promise<Role> {
    return this.roleService.findById(id);
  }
}
