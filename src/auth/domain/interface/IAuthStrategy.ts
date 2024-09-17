import { AuthResult } from '../auth-response';

export interface IAuthStrategy {
  login(email: string, password: string): Promise<AuthResult>;
  validateToken(token: string): Promise<boolean>;
  getUserIdFromToken(token: string): Promise<string | null>;
  refreshTokens(refreshToken: string): Promise<AuthResult>;
}
export const IAuthStrategyToken = Symbol('IAuthStrategy');
