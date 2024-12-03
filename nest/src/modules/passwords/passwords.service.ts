import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PasswordsService {
  private readonly bcryptSaltRounds = 10;

  compare(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }

  hash(password: string): Promise<string> {
    return bcrypt.hash(password, this.bcryptSaltRounds);
  }
}
