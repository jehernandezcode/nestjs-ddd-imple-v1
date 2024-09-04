import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

import config from './config';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { InfraestructureModule } from './infraestructure/infraestructure.module';
import { enviroments } from './environments';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().required(),
        HTTP_PORT: Joi.number().required(),
        HTTPS_PORT: Joi.number().required(),
        SSL_CERT_PATH: Joi.string(),
        SSL_KEY_PATH: Joi.string(),
      }),
    }),
    InfraestructureModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
