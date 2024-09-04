import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { IUserRepository } from '../../../../domain/user/user.repository';
import { User } from '../../../../domain/user/user.model';

@Injectable()
export class TypeORMUserRepository implements IUserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async create(user: User): Promise<User> {
    const userEntity = this.userRepository.create({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
    });

    const userSaved = await this.userRepository.save(userEntity);
    return { ...userSaved };
  }

  async findById(id: string): Promise<User | null> {
    const user = await this.userRepository.findOne({ where: { id } });
    return { ...user };
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.userRepository.findOne({
      where: { email },
    });
    return { ...user };
  }

  async update(id: string, user: User): Promise<User> {
    await this.userRepository.update(
      { id },
      {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
      },
    );
    const userAfected = await this.findById(id);
    return userAfected;
  }

  async delete(id: string): Promise<void> {
    await this.userRepository.delete({ id });
  }
}
