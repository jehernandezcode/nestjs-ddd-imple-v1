import { Inject, Injectable } from '@nestjs/common';

import {
  IRoleService,
  IRoleServiceToken,
} from '../../domain/interface/IRoleService';
import { IDeleteByIdRoleUseCase } from '../interfaces/Idelete-by-id-role-case';

@Injectable()
export class DeleteByIdRoleUseCase implements IDeleteByIdRoleUseCase {
  constructor(
    @Inject(IRoleServiceToken) private readonly roleService: IRoleService,
  ) {}

  async execute(id: string): Promise<void> {
    return this.roleService.delete(id);
  }
}
