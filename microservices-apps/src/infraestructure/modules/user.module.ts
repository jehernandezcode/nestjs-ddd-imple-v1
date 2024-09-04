import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../database/typeorm/entities/user.entity';
import { TypeORMUserRepository } from '../database/typeorm/repositories/typeorm-user.repository';
import { UserService } from '../../domain/user/user.service';
import { CreateUserUseCase } from '../../application/user/use-cases/create-user.use-case';
import { UserController } from '../controllers/user.controller';
import { IUserServiceToken } from '../../domain/user/interface/IUserService';
import { ICreateUserUseCaseToken } from '../../application/user/interfaces/Icreate-user-use-case';
import { IFindUserByIdUseCaseToken } from '../../application/user/interfaces/Ifind-user-by-id-use-case';
import { FindUserByIdUseCase } from '../../application/user/use-cases/find-user-by-id.use-case';
import { IUpdateUserCaseToken } from '../../application/user/interfaces/Iupdate-user-case';
import { UpdateUserByIdUseCase } from '../../application/user/use-cases/update-user-by-id.use-case';
import { IDeleteUserCaseToken } from '../../application/user/interfaces/Idelete-user-case';
import { DeleteUserByIdUseCase } from '../../application/user/use-cases/delete-user-by-id.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [
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
