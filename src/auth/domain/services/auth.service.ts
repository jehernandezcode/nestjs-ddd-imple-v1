import { Inject, Injectable } from '@nestjs/common';
import { AuthResult } from '../auth-response';
import { IAuthStrategy } from '../interface/IAuthStrategy';

@Injectable()
export class AuthService {
  constructor(@Inject('AuthStrategy') private authStrategy: IAuthStrategy) {}

  async login(email: string, password: string): Promise<AuthResult> {
    return this.authStrategy.login(email, password);
  }

  async validateToken(token: string): Promise<boolean> {
    return this.authStrategy.validateToken(token);
  }

  async getUserIdFromToken(token: string): Promise<string | null> {
    return this.authStrategy.getUserIdFromToken(token);
  }

  async refreshTokens(refreshToken: string): Promise<AuthResult> {
    return this.authStrategy.refreshTokens(refreshToken);
  }
}
