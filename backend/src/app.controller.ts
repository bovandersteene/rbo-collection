import { Controller, Get, Res, Response } from '@nestjs/common';
import * as path from 'path';
import { ROUTE_TEST } from './routes';

@Controller()
export class AppController {
  @Get()
  root(@Res() response): void {
    // the homepage will load our index.html which contains angular logic
    response.sendFile(path.resolve('../dist/index.html'));
  }

  @Get(ROUTE_TEST)
  testApi(): string {
    // Some api data, can be an object also
    return 'my great api';
  }
}
