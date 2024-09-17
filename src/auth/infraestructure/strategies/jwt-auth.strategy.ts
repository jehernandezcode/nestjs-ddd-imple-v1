import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

import { AuthResult } from '../../../auth/domain/auth-response';
import { IAuthStrategy } from '../../../auth/domain/interface/IAuthStrategy';
import {
  IUserRepository,
  USER_REPOSITORY,
} from '../../../user/domain/interface/user.repository';
import { BcryptHashService } from '../../../shared/bcrypt/bcryptHash.service';

@Injectable()
export class JwtAuthStrategy implements IAuthStrategy {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
    @Inject(USER_REPOSITORY)
    private userRepository: IUserRepository,
    private bcryptHashService: BcryptHashService,
  ) {}

  async login(email: string, password: string): Promise<AuthResult> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error('user not found');
    }
    const isValid = await this.bcryptHashService.compare(
      password,
      user.password,
    );

    if (!isValid) {
      throw new Error('credentials incorrected');
    }
    return this.generateTokens(user.id, user.roleId);
  }

  async validateToken(token: string): Promise<boolean> {
    try {
      await this.jwtService.verifyAsync(token);
      return true;
    } catch {
      return false;
    }
  }

  async getUserIdFromToken(token: string): Promise<string | null> {
    try {
      const payload = await this.jwtService.verifyAsync(token);
      return payload.sub;
    } catch {
      return null;
    }
  }

  async refreshTokens(refreshToken: string): Promise<AuthResult> {
    try {
      const payload = await this.jwtService.verifyAsync(refreshToken);
      return this.generateTokens(payload.sub, '');
    } catch {
      throw new Error('Invalid refresh token');
    }
  }

  private generateTokens(userId: string, roleId: string): AuthResult {
    const accessToken = this.jwtService.sign(
      { sub: userId, role: roleId },
      { expiresIn: this.configService.get('EXPIRES_TOKEN_IN') },
    );
    const refreshToken = this.jwtService.sign(
      { sub: userId, role: roleId },
      { expiresIn: this.configService.get('EXPIRES_REFRESH_TOKEN_IN') },
    );
    return new AuthResult(accessToken, refreshToken, 900);
  }
}
