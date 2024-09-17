import { AuthResult } from '../../domain/auth-response';
import { LoginRequest } from '../dto/login.dto';

export interface ILoginAuthUseCase {
  execute(loginRequest: LoginRequest): Promise<AuthResult>;
}

export const ILoginAuthUseCaseToken = Symbol('ILoginAuthUseCase');
