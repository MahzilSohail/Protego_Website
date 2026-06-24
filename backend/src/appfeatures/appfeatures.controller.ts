import { Controller, Get, Post, Body } from "@nestjs/common";
import { AppFeaturesService } from "./appfeatures.service";

@Controller("appfeatures")
export class AppFeaturesController {
  constructor(private service: AppFeaturesService) {}

  @Get()
  getAll() {
    return this.service.getAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }
}
