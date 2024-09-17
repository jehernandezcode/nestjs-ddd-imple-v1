import { Body, Controller, Inject, Post } from '@nestjs/common';
import { LoginRequest } from 'src/auth/application/dto/login.dto';
import { RefreshTokenRequest } from 'src/auth/application/dto/refresh-token.dto';
import {
  ILoginAuthUseCase,
  ILoginAuthUseCaseToken,
} from 'src/auth/application/interfaces/Ilogin-auth-use-case';
import {
  IRefreshTokenAuthUseCase,
  IRefreshTokenAuthUseCaseToken,
} from 'src/auth/application/interfaces/IRefresh-token-auth-use-case';
import { AuthResult } from 'src/auth/domain/auth-response';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject(ILoginAuthUseCaseToken)
    private readonly loginAuthUseCase: ILoginAuthUseCase,
    @Inject(IRefreshTokenAuthUseCaseToken)
    private readonly refreshTokenAuthUseCase: IRefreshTokenAuthUseCase,
  ) {}

  @Post()
  async login(@Body() credentials: LoginRequest): Promise<AuthResult> {
    return await this.loginAuthUseCase.execute(credentials);
  }

  @Post('/refresh-token')
  async refreshToken(
    @Body() refreshDto: RefreshTokenRequest,
  ): Promise<AuthResult> {
    return await this.refreshTokenAuthUseCase.execute(refreshDto.refreshToken);
  }
}
