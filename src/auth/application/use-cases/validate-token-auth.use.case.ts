import { Inject, Injectable } from '@nestjs/common';
import {
  IAuthStrategy,
  IAuthStrategyToken,
} from '../../domain/interface/IAuthStrategy';
import { IValidateTokenAuthUseCase } from '../interfaces/IValidate-token-auth-use-case';

@Injectable()
export class ValidateTokenAuthUseCase implements IValidateTokenAuthUseCase {
  constructor(
    @Inject(IAuthStrategyToken)
    private readonly authService: IAuthStrategy,
  ) {}

  async execute(token: string): Promise<boolean> {
    return this.authService.validateToken(token);
  }
}
