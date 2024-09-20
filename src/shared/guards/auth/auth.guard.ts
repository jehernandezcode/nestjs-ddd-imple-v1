import {
  Injectable,
  CanActivate,
  ExecutionContext,
  Inject,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { IAuthStrategy } from 'src/auth/domain/interface/IAuthStrategy';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    @Inject('AuthStrategy') private authStrategy: IAuthStrategy,
    private reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      return false;
    }

    const isValid = await this.authStrategy.validateToken(token);
    if (isValid) {
      const payload = await this.authStrategy.getSubFromToken(token);
      request['payload'] = payload;
    }
    return isValid;
  }

  private extractTokenFromHeader(request: any): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
