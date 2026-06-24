import { Controller, Get, Post, Body } from '@nestjs/common';
import { ModelService } from './model.service';

@Controller('model')
export class ModelController {
  constructor(private readonly modelService: ModelService) {}

  @Get()
  async getAllModels() {
    return await this.modelService.getAllModels();
  }

  @Post()
  async createModel(@Body() data: any) {
    console.log(data);
    return await this.modelService.createModel(data);
  }
}
