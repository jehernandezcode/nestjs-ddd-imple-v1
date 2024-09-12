import { AuthResult } from '../auth-response';

export interface IAuthStrategy {
  login(credentials: { email: string; password: string }): Promise<AuthResult>;
  validateToken(token: string): Promise<boolean>;
  getUserIdFromToken(token: string): Promise<string | null>;
  refreshTokens(refreshToken: string): Promise<AuthResult>;
}
