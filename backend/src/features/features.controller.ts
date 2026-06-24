import { Controller, Get, Post, Body } from "@nestjs/common";
import { FeaturesService } from "./features.service";

@Controller("features")
export class FeaturesController {
  constructor(private service: FeaturesService) {}

  @Get()
  getAll() {
    return this.service.getAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }
}
