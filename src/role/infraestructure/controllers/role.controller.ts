import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
} from '@nestjs/common';

import { CreateRoleDtoRequest } from '../../application/dto/role-dto.request';
import {
  ICreateRoleUseCase,
  ICreateRoleUseCaseToken,
} from '../../application/interfaces/Icreate-role-case';
import { Role } from '../../domain/role.model';
import {
  IFindByIdRoleUseCase,
  IFindByIdRoleUseCaseToken,
} from '../../application/interfaces/Ifind-by-id-role-case';
import {
  IDeleteByIdRoleUseCase,
  IDeleteByIdRoleUseCaseToken,
} from 'src/role/application/interfaces/Idelete-by-id-role-case';

@Controller('roles')
export class RoleController {
  constructor(
    @Inject(ICreateRoleUseCaseToken)
    private readonly createRoleUseCase: ICreateRoleUseCase,
    @Inject(IFindByIdRoleUseCaseToken)
    private readonly findRoleUseCase: IFindByIdRoleUseCase,
    @Inject(IDeleteByIdRoleUseCaseToken)
    private readonly deleteRoleUseCase: IDeleteByIdRoleUseCase,
  ) {}

  @Post()
  async create(@Body() role: CreateRoleDtoRequest): Promise<Role> {
    return await this.createRoleUseCase.execute(role);
  }

  @Get('/:id')
  async findById(@Param('id') id: string): Promise<Role> {
    return await this.findRoleUseCase.execute(id);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    return await this.deleteRoleUseCase.execute(id);
  }
}
