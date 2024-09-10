import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RoleEntity } from './infraestructure/database/entities/role.entity';
import { TypeORMRoleRepository } from './infraestructure/database/repositories/typeorm.role.repository';
import { IRoleServiceToken } from './domain/interface/IRoleService';
import { RoleService } from './domain/role.service';
import { ICreateRoleUseCaseToken } from './application/interfaces/Icreate-role-case';
import { CreateRoleUseCase } from './application/use-cases/create-role.use-case';
import { RoleController } from './infraestructure/controllers/role.controller';
import { IFindByIdRoleUseCaseToken } from './application/interfaces/Ifind-by-id-role-case';
import { FindByIdRoleUseCase } from './application/use-cases/find-by-id-role.use-case';
import { IDeleteByIdRoleUseCaseToken } from './application/interfaces/Idelete-by-id-role-case';
import { DeleteByIdRoleUseCase } from './application/use-cases/delete-by-id-role.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([RoleEntity])],
  providers: [
    {
      provide: 'ROLE_REPOSITORY',
      useClass: TypeORMRoleRepository,
    },
    {
      provide: IRoleServiceToken,
      useClass: RoleService,
    },
    {
      provide: ICreateRoleUseCaseToken,
      useClass: CreateRoleUseCase,
    },
    {
      provide: IFindByIdRoleUseCaseToken,
      useClass: FindByIdRoleUseCase,
    },
    {
      provide: IDeleteByIdRoleUseCaseToken,
      useClass: DeleteByIdRoleUseCase,
    },
  ],
  controllers: [RoleController],
})
export class RoleModule {}
