export interface IDeleteByIdRoleUseCase {
  execute(id: string): Promise<void>;
}

export const IDeleteByIdRoleUseCaseToken = Symbol('IDeleteByIdRoleUseCase');
