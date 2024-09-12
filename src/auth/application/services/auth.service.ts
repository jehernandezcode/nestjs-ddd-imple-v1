import { Injectable, Inject } from '@nestjs/common';
import { IAuthStrategy } from 'src/auth/domain/interface/IAuthStrategy';

@Injectable()
export class AuthService {
  constructor(@Inject('AuthStrategy') private authStrategy: IAuthStrategy) {}

  async login(email: string, password: string) {
    return this.authStrategy.login({ email, password });
  }

  async validateToken(token: string): Promise<boolean> {
    return this.authStrategy.validateToken(token);
  }

  async getUserIdFromToken(token: string): Promise<string | null> {
    return this.authStrategy.getUserIdFromToken(token);
  }

  async refreshTokens(refreshToken: string) {
    return this.authStrategy.refreshTokens(refreshToken);
  }
}
