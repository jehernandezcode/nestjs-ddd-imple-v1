import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../../../shared/guards/auth/auth.guard';
import {
  CreateUserDtoRequest,
  UpdateUserDtoRequest,
} from '../../application/dto/user-dto.request';
import {
  ICreateUserUseCase,
  ICreateUserUseCaseToken,
} from '../../application/interfaces/Icreate-user-use-case';
import {
  IDeleteUserCase,
  IDeleteUserCaseToken,
} from '../../application/interfaces/Idelete-user-case';
import {
  IFindUserByIdUseCase,
  IFindUserByIdUseCaseToken,
} from '../../application/interfaces/Ifind-user-by-id-use-case';
import {
  IUpdateUserCase,
  IUpdateUserCaseToken,
} from '../../application/interfaces/Iupdate-user-case';
import { User } from '../../domain/user.model';
import { Roles } from '../../../shared/decorators/role/role.decorator';
import { ERole } from '../../../shared/enums/EnumRole';
import { RoleGuard } from '../../../shared/guards/auth/role.guard';

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

  @UseGuards(AuthGuard, RoleGuard)
  @Roles(ERole.admin, ERole.client)
  @Get('/:id')
  async findById(@Param('id') id: string): Promise<User> {
    return await this.findUserUseCase.execute(id);
  }

  @UseGuards(AuthGuard, RoleGuard)
  @Roles(ERole.admin, ERole.client)
  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() user: UpdateUserDtoRequest,
  ): Promise<User> {
    return await this.updateUserUseCase.execute(id, user);
  }

  @Delete('/:id')
  @UseGuards(AuthGuard, RoleGuard)
  @Roles(ERole.admin, ERole.client)
  async delete(@Param('id') id: string): Promise<void> {
    return await this.deleteUserUseCase.execute(id);
  }
}
