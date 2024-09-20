import { ERole } from 'src/shared/enums/EnumRole';
import { AuthResult } from '../auth-response';

export interface IAuthStrategy {
  login(email: string, password: string): Promise<AuthResult>;
  validateToken(token: string): Promise<boolean>;
  getSubFromToken(token: string): Promise<string | null>;
  refreshTokens(refreshToken: string): Promise<AuthResult>;
}

export interface IAuthStrategyWithRole extends IAuthStrategy {
  validateRole(roleId: string, allowedRoles: ERole[]): Promise<boolean>;
}

export const IAuthStrategyToken = Symbol('IAuthStrategy');
