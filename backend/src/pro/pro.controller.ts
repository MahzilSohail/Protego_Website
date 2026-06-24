import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProService } from './pro.service';
import { Pro } from './pro.entity';

@Controller('pro')
export class ProController {
  constructor(private readonly proService: ProService) {}

  @Get()
  async getAllPro() {
    return this.proService.findAll();
  }
  @Get(':id')
  async getOne(@Param('id') id: number) {
    return this.proService.findOne(id);
  }

  @Post()
  async createPro(@Body() proData: any) {
    return this.proService.create(proData);
  }
}
