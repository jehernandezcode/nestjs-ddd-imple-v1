import { Inject, Injectable } from '@nestjs/common';

import {
  IAuthStrategy,
  IAuthStrategyToken,
} from '../../domain/interface/IAuthStrategy';
import { IRefreshTokenAuthUseCase } from '../interfaces/IRefresh-token-auth-use-case';
import { AuthResult } from '../../domain/auth-response';

@Injectable()
export class RefreshTokenAuthUseCase implements IRefreshTokenAuthUseCase {
  constructor(
    @Inject(IAuthStrategyToken)
    private readonly authService: IAuthStrategy,
  ) {}

  async execute(refreshToken: string): Promise<AuthResult> {
    return this.authService.refreshTokens(refreshToken);
  }
}
