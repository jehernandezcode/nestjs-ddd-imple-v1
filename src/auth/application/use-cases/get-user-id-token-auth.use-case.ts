import { Inject, Injectable } from '@nestjs/common';
import {
  IAuthStrategy,
  IAuthStrategyToken,
} from '../../domain/interface/IAuthStrategy';
import { IGetUserIdTokenAuthUseCase } from '../interfaces/IGet-user-id-token-auth-use-case';

@Injectable()
export class GetUserIdTokenAuthUseCase implements IGetUserIdTokenAuthUseCase {
  constructor(
    @Inject(IAuthStrategyToken)
    private readonly authService: IAuthStrategy,
  ) {}

  async execute(token: string): Promise<string | null> {
    return this.authService.getSubFromToken(token);
  }
}
