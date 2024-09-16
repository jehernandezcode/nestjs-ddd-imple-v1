import { Injectable } from '@nestjs/common';
import * as bcryptjs from 'bcryptjs';

@Injectable()
export class BcryptHashService {
  private static instance: BcryptHashService;

  private constructor() {}

  static getInstance(): BcryptHashService {
    if (!BcryptHashService.instance) {
      BcryptHashService.instance = new BcryptHashService();
    }
    return BcryptHashService.instance;
  }

  async hash(password: string): Promise<string> {
    const saltRounds = 10;
    return bcryptjs.hash(password, saltRounds);
  }

  async compare(password: string, hash: string): Promise<boolean> {
    return bcryptjs.compare(password, hash);
  }
}
