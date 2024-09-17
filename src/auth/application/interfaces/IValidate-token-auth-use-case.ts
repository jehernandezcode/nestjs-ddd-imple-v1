export interface IValidateTokenAuthUseCase {
  execute(token: string): Promise<boolean>;
}

export const IValidateTokenAuthUseCaseToken = Symbol(
  'IValidateTokenAuthUseCase',
);
