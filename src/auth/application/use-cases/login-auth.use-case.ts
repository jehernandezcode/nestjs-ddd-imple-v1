import { Inject, Injectable } from '@nestjs/common';
import { ILoginAuthUseCase } from '../interfaces/Ilogin-auth-use-case';
import {
  IAuthStrategy,
  IAuthStrategyToken,
} from '../../domain/interface/IAuthStrategy';
import { LoginRequest } from '../dto/login.dto';
import { AuthResult } from '../../domain/auth-response';

@Injectable()
export class LoginAuthUseCase implements ILoginAuthUseCase {
  constructor(
    @Inject(IAuthStrategyToken) private readonly authService: IAuthStrategy,
  ) {}

  async execute(loginRequest: LoginRequest): Promise<AuthResult> {
    return this.authService.login(loginRequest.email, loginRequest.password);
  }
}
