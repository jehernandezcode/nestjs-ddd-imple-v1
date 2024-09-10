import { Role } from '../../domain/role.model';

export interface IFindByIdRoleUseCase {
  execute(id: string): Promise<Role>;
}

export const IFindByIdRoleUseCaseToken = Symbol('IFindByIdRoleUseCase');
