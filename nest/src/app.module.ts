import { Module } from "@nestjs/common";
import { UsersModule } from "./modules/users/users.module";
import { APP_GUARD } from "@nestjs/core";
import { AuthGuard } from "./modules/auth/auth.guard";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [UsersModule, JwtModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
