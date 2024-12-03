import { Controller, Get, Param } from "@nestjs/common";

@Controller("users")
export class UsersController {
  constructor() {}

  @Get(":id")
  user(@Param("id") id: string) {
    return { id };
  }
}
