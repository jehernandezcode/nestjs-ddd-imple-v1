import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';

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
  exports: [TypeOrmModule],
})
export class TypeormModule {}
