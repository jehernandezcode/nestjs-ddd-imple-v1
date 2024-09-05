import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ICreateUserUseCaseToken } from 'src/user/application/interfaces/Icreate-user-use-case';
import { IDeleteUserCaseToken } from 'src/user/application/interfaces/Idelete-user-case';
import { IFindUserByIdUseCaseToken } from 'src/user/application/interfaces/Ifind-user-by-id-use-case';
import { IUpdateUserCaseToken } from 'src/user/application/interfaces/Iupdate-user-case';
import { CreateUserUseCase } from 'src/user/application/use-cases/create-user.use-case';
import { DeleteUserByIdUseCase } from 'src/user/application/use-cases/delete-user-by-id.use-case';
import { FindUserByIdUseCase } from 'src/user/application/use-cases/find-user-by-id.use-case';
import { UpdateUserByIdUseCase } from 'src/user/application/use-cases/update-user-by-id.use-case';
import { IUserServiceToken } from 'src/user/domain/interface/IUserService';
import { UserService } from 'src/user/domain/user.service';
import { UserController } from 'src/user/infraestructure/controllers/user.controller';
import { UserEntity } from './infraestructure/database/typeorm/enties/user.entity';
import { TypeORMUserRepository } from './infraestructure/database/typeorm/repositories/typeorm-user.repository';

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
