import { Module, DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

import { UserEntity } from '../../../user/infraestructure/database/typeorm/enties/user.entity';
import { RoleEntity } from '../../../role/infraestructure/database/entities/role.entity';

@Module({})
export class DatabaseModule {
  static forRoot(): DynamicModule {
    return {
      module: DatabaseModule,
      imports: [
        TypeOrmModule.forRootAsync({
          useFactory: (configService: ConfigService) => {
            const databases = configService.get('DATABASES');
            const postgresDB = JSON.parse(databases)[0];
            return {
              name: postgresDB.name,
              type: postgresDB.type,
              host: postgresDB.host,
              port: postgresDB.port,
              username: postgresDB.username,
              password: postgresDB.password,
              database: postgresDB.database,
              entities: [UserEntity, RoleEntity],
              synchronize: postgresDB.synchronize,
            };
          },
          inject: [ConfigService],
        }),
      ],
    };
  }
}
