export interface IDeleteUserCase {
  execute(id: string): Promise<void>;
}

export const IDeleteUserCaseToken = Symbol('IDeleteUserCase');
