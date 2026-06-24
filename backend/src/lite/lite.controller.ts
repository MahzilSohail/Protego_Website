import { Controller, Get, Post, Body } from '@nestjs/common';
import { LiteService } from './lite.service';
import { Lite } from './lite.entity';

@Controller('lite')
export class LiteController {
  constructor(private readonly liteService: LiteService) {}

  @Get()
  async getAllLite() {
    const liteList = await this.liteService.findAll();
    return liteList;
  }

  @Post()
  async createLite(@Body() liteData: Lite) {
    const newLite = await this.liteService.create(liteData);
    return { message: 'Lite model added', data: newLite };
  }
}
