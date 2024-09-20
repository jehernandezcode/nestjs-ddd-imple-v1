import {
  Injectable,
  CanActivate,
  ExecutionContext,
  Inject,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import {
  IAuthStrategy,
  IAuthStrategyWithRole,
} from '../../../auth/domain/interface/IAuthStrategy';
import { ROLES_KEY } from '../../decorators/role/role.decorator';
import { ERole } from '../../enums/EnumRole';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(
    @Inject('AuthStrategy') private authStrategy: IAuthStrategy,
    private reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // Obtener los roles requeridos del decorador
    const requiredRoles = this.reflector.getAllAndOverride<ERole[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    let isValid = true;
    //validate role
    if ((this.authStrategy as IAuthStrategyWithRole).validateRole) {
      const request = context.switchToHttp().getRequest();
      isValid = await (this.authStrategy as IAuthStrategyWithRole).validateRole(
        request['payload'].role,
        requiredRoles,
      );
    }

    return isValid;
  }
}
