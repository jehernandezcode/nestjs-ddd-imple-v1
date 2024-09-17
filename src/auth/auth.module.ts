import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthController } from './infraestructure/controllers/auth.controller';
import { ILoginAuthUseCaseToken } from './application/interfaces/Ilogin-auth-use-case';
import { LoginAuthUseCase } from './application/use-cases/login-auth.use-case';
import { AuthService } from './domain/services/auth.service';
import { IAuthStrategyToken } from './domain/interface/IAuthStrategy';
import { JwtAuthStrategy } from './infraestructure/strategies/jwt-auth.strategy';
import { TypeORMUserRepository } from '../user/infraestructure/database/typeorm/repositories/typeorm-user.repository';
import {
  IUserRepository,
  USER_REPOSITORY,
} from '../user/domain/interface/user.repository';
import { UserEntity } from '../user/infraestructure/database/typeorm/enties/user.entity';
import { BcryptHashService } from '../shared/bcrypt/bcryptHash.service';
import { IRefreshTokenAuthUseCaseToken } from './application/interfaces/IRefresh-token-auth-use-case';
import { RefreshTokenAuthUseCase } from './application/use-cases/refresh-token-auth.use.case';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: {
          algorithm: configService.get('ALGORITHM'),
        },
      }),
      inject: [ConfigService],
    }),
    ConfigModule,
    TypeOrmModule.forFeature([UserEntity]),
  ],
  providers: [
    {
      provide: IAuthStrategyToken,
      useClass: AuthService,
    },
    {
      provide: ILoginAuthUseCaseToken,
      useClass: LoginAuthUseCase,
    },
    {
      provide: IRefreshTokenAuthUseCaseToken,
      useClass: RefreshTokenAuthUseCase,
    },
    {
      provide: USER_REPOSITORY,
      useClass: TypeORMUserRepository,
    },
    {
      provide: BcryptHashService,
      useFactory: () => BcryptHashService.getInstance(),
    },
    {
      provide: 'AuthStrategy',
      useFactory: (
        configService: ConfigService,
        jwtService: JwtService,
        userRepository: IUserRepository,
        bcryptHashService: BcryptHashService,
      ) => {
        const authStrategy = configService.get('AUTH_STRATEGY');
        if (authStrategy === 'jwt') {
          return new JwtAuthStrategy(
            jwtService,
            configService,
            userRepository,
            bcryptHashService,
          );
        } else {
          throw new Error('Invalid auth strategy');
        }
      },
      inject: [ConfigService, JwtService, USER_REPOSITORY, BcryptHashService],
    },
  ],
  controllers: [AuthController],
})
export class AuthModule {}
