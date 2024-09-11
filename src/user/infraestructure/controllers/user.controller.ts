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
} from 'src/user/application/dto/user-dto.request';
import {
  ICreateUserUseCase,
  ICreateUserUseCaseToken,
} from 'src/user/application/interfaces/Icreate-user-use-case';
import {
  IDeleteUserCase,
  IDeleteUserCaseToken,
} from 'src/user/application/interfaces/Idelete-user-case';
import {
  IFindUserByIdUseCase,
  IFindUserByIdUseCaseToken,
} from 'src/user/application/interfaces/Ifind-user-by-id-use-case';
import {
  IUpdateUserCase,
  IUpdateUserCaseToken,
} from 'src/user/application/interfaces/Iupdate-user-case';
import { User } from 'src/user/domain/user.model';

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
