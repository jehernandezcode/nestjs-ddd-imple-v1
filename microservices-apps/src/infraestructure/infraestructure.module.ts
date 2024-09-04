import { Module } from '@nestjs/common';
import { TypeormModule } from './database/typeorm/typeorm.module';
import { UserModule } from './modules/user.module';

@Module({ imports: [TypeormModule, UserModule] })
export class InfraestructureModule {}
