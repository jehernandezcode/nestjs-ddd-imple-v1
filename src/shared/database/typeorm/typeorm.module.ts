import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from './type-orm.config';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule.forRoot()],
})
export class TypeormModule {}
