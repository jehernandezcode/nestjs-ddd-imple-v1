import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ICreateUserUseCaseToken } from '../user/application/interfaces/Icreate-user-use-case';
import { UserService } from '../user/domain/services/user.service';
import { UserEntity } from './infraestructure/database/typeorm/enties/user.entity';
import { TypeORMUserRepository } from './infraestructure/database/typeorm/repositories/typeorm-user.repository';
import { BcryptHashService } from '../shared/bcrypt/bcryptHash.service';
import { IDeleteUserCaseToken } from './application/interfaces/Idelete-user-case';
import { RoleEntity } from '../role/infraestructure/database/entities/role.entity';
import { IUserServiceToken } from './domain/interface/IUserService';
import { CreateUserUseCase } from './application/use-cases/create-user.use-case';
import { IFindUserByIdUseCaseToken } from './application/interfaces/Ifind-user-by-id-use-case';
import { FindUserByIdUseCase } from './application/use-cases/find-user-by-id.use-case';
import { IUpdateUserCaseToken } from './application/interfaces/Iupdate-user-case';
import { UpdateUserByIdUseCase } from './application/use-cases/update-user-by-id.use-case';
import { DeleteUserByIdUseCase } from './application/use-cases/delete-user-by-id.use-case';
import { UserController } from './infraestructure/controllers/user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, RoleEntity])],
  providers: [
    {
      provide: BcryptHashService,
      useFactory: () => BcryptHashService.getInstance(),
    },
    {
      provide: 'USER_REPOSITORY',
      useClass: TypeORMUserRepository,
    },
    {
      provide: IUserServiceToken,
      useClass: UserService,
    },
    {
      provide: ICreateUserUseCaseToken,
      useClass: CreateUserUseCase,
    },
    {
      provide: IFindUserByIdUseCaseToken,
      useClass: FindUserByIdUseCase,
    },
    {
      provide: IUpdateUserCaseToken,
      useClass: UpdateUserByIdUseCase,
    },
    {
      provide: IDeleteUserCaseToken,
      useClass: DeleteUserByIdUseCase,
    },
  ],
  controllers: [UserController],
})
export class UserModule {}
