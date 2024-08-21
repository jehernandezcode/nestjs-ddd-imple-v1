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
import { User } from 'src/domain/user/user.model';
import { IUserServiceToken } from '../const';
import { IUserService } from '../interface/IUserService';
import { CreateUserDtoRequest } from '../dto/user-dto.request';

@Controller('users')
export class UserController {
  constructor(
    @Inject(IUserServiceToken) private readonly userService: IUserService,
  ) {}

  @Post()
  async create(@Body() user: CreateUserDtoRequest): Promise<User> {
    return await this.userService.create(user);
  }

  @Get('/:id')
  async findById(@Param() id: string): Promise<User> {
    return await this.userService.findById(id);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Put('/:id')
  async update(
    @Param() id: string,
    @Body() user: CreateUserDtoRequest,
  ): Promise<User> {
    return await this.userService.update(id, user);
  }

  @Delete('/:id')
  async delete(@Param() id: string): Promise<void> {
    return await this.userService.delete(id);
  }
}
