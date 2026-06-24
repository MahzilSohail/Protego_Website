import { Controller, Get, Post, Body } from '@nestjs/common';
import { StdService } from './std.service';
import { Std } from './std.entity';

@Controller('std')
export class StdController {
  constructor(private stdService: StdService) {}

  @Get()
  getAll() {
    return this.stdService.getAll();
  }

  @Post()
  create(@Body() data: any) {
    return this.stdService.create(data);
  }
}