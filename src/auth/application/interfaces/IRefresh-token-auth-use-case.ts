import { AuthResult } from 'src/auth/domain/auth-response';

export interface IRefreshTokenAuthUseCase {
  execute(refreshToken: string): Promise<AuthResult>;
}

export const IRefreshTokenAuthUseCaseToken = Symbol('IRefreshTokenAuthUseCase');
