import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { PasswordsModule } from '../passwords/passwords.module';

@Module({
  imports: [
    PasswordsModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' }
    })
  ],
  providers: [],
  controllers: [],
  exports: []
})
export class AuthModule {}
