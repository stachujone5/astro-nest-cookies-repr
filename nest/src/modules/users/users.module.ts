import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { PasswordsService } from "../passwords/passwords.service";

@Module({
  imports: [],
  providers: [PasswordsService],
  controllers: [UsersController],
})
export class UsersModule {}
