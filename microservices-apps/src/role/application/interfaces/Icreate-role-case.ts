import { Role } from '../../domain/role.model';
import { CreateRoleDtoRequest } from '../dto/role-dto.request';

export interface ICreateRoleUseCase {
  execute(createRoleDto: CreateRoleDtoRequest): Promise<Role>;
}

export const ICreateRoleUseCaseToken = Symbol('ICreateRoleUseCase');
