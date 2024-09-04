import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  CreateUserDtoRequest,
  UpdateUserDtoRequest,
} from 'src/application/user/dto/user-dto.request';
import {
  ICreateUserUseCase,
  ICreateUserUseCaseToken,
} from 'src/application/user/interfaces/ICreateUserUseCase';
import {
  IDeleteUserCase,
  IDeleteUserCaseToken,
} from 'src/application/user/interfaces/IDeleteUserCase';
import {
  IFindUserByIdUseCase,
  IFindUserByIdUseCaseToken,
} from 'src/application/user/interfaces/IFindUserByIdUseCase';
import {
  IUpdateUserCase,
  IUpdateUserCaseToken,
} from 'src/application/user/interfaces/IUpdateUserCase';
import { User } from 'src/domain/user/user.model';

@Controller('users')
export class UserController {
  constructor(
    @Inject(ICreateUserUseCaseToken)
    private readonly createUserUseCase: ICreateUserUseCase,
    @Inject(IFindUserByIdUseCaseToken)
    private readonly findUserUseCase: IFindUserByIdUseCase,
    @Inject(IUpdateUserCaseToken)
    private readonly updateUserUseCase: IUpdateUserCase,
    @Inject(IDeleteUserCaseToken)
    private readonly deleteUserUseCase: IDeleteUserCase,
  ) {}

  @Post()
  async create(@Body() user: CreateUserDtoRequest): Promise<User> {
    return await this.createUserUseCase.execute(user);
  }

  @Get('/:id')
  async findById(@Param('id') id: string): Promise<User> {
    return await this.findUserUseCase.execute(id);
  }

  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() user: UpdateUserDtoRequest,
  ): Promise<User> {
    return await this.updateUserUseCase.execute(id, user);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    return await this.deleteUserUseCase.execute(id);
  }
}
