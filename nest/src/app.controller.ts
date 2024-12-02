import { Controller, Get, Req } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  getHello(@Req() req): string {
    console.log(req.cookies);
    return req.cookies;
  }
}
