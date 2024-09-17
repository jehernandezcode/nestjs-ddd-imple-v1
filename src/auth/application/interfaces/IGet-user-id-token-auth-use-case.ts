export interface IGetUserIdTokenAuthUseCase {
  execute(token: string): Promise<string | null>;
}

export const IGetUserIdTokenAuthUseCaseToken = Symbol(
  'IGetUserIdTokenAuthUseCase',
);
