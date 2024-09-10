import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../../../user/infraestructure/database/typeorm/enties/user.entity';
import { RoleEntity } from 'src/role/infraestructure/database/entities/role.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        return {
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'secret',
          password: 'secret',
          database: 'test',
          entities: [UserEntity, RoleEntity],
          synchronize: true,
          logging: true,
        };
      },
    }),
  ],
})
export class TypeormModule {}
