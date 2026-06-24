import { Controller, Get, Post, Body } from '@nestjs/common';
import { SlidesService } from './slides.service';

@Controller('slides')
export class SlidesController {
  constructor(private service: SlidesService) {}

  @Get()
  getAll() {
    return this.service.getAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }
}
