import { Module } from '@nestjs/common';
import { IUserServiceToken } from './const';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';

@Module({
  controllers: [UserController],
  providers: [
    {
      provide: IUserServiceToken,
      useClass: UserService,
    },
  ],
})
export class UserModule {}
