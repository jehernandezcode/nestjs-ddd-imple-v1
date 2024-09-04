import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../database/typeorm/entities/user.entity';
import { TypeORMUserRepository } from '../database/typeorm/repositories/typeorm-user.repository';
import { UserService } from '../../domain/user/user.service';
import { CreateUserUseCase } from 'src/application/user/use-cases/create-user.use-case';
import { UserController } from '../controllers/user.controller';
import { IUserServiceToken } from 'src/domain/user/interface/IUserService';
import { ICreateUserUseCaseToken } from 'src/application/user/interfaces/ICreateUserUseCase';
import { IFindUserByIdUseCaseToken } from 'src/application/user/interfaces/IFindUserByIdUseCase';
import { FindUserByIdUseCase } from 'src/application/user/use-cases/find-user-by-id.use-case';
import { IUpdateUserCaseToken } from 'src/application/user/interfaces/IUpdateUserCase';
import { UpdateUserByIdUseCase } from 'src/application/user/use-cases/update-user-by-id.use-case';
import { IDeleteUserCaseToken } from 'src/application/user/interfaces/IDeleteUserCase';
import { DeleteUserByIdUseCase } from 'src/application/user/use-cases/delete-user-by-id.use-case';

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
