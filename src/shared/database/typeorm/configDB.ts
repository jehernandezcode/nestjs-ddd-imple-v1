import { registerAs } from '@nestjs/config';

export default registerAs('configDB', () => {
  return {
    DATABASES: [
      {
        name: process.env.name,
        type: process.env.type,
        host: process.env.host,
        port: process.env.port,
        username: process.env.username,
        password: process.env.password,
        database: process.env.database,
        synchronize: process.env.synchronize,
      },
    ],
  };
});
