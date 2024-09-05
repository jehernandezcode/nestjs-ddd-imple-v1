import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../../../user/infraestructure/database/typeorm/enties/user.entity';

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
          entities: [UserEntity],
          synchronize: true,
          logging: true,
        };
      },
    }),
  ],
})
export class TypeormModule {}
