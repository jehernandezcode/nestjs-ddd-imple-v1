import { registerAs } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';

import { config as dotenvConfig } from 'dotenv';
import { enviroments } from '../../../environments';

dotenvConfig({ path: enviroments[process.env.NODE_ENV] });

const databases = process.env.DATABASES;
const postgresDB = JSON.parse(databases)[0];

const config = {
  name: postgresDB.name,
  type: postgresDB.type,
  host: postgresDB.host,
  port: postgresDB.port,
  username: postgresDB.username,
  password: postgresDB.password,
  database: postgresDB.database,
  entities: [
    __dirname +
      '/../../../../dist/**/infraestructure/**/**/**/*.entity{.ts,.js}',
  ],
  migrations: [__dirname + '/../migrations/*{.ts,.js}'],
  autoLoadEntities: true,
  synchronize: postgresDB.synchronize,
  migrationsTableName: 'migrations',
};

export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
