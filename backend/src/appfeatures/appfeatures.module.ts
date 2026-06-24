import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppFeature } from "./appfeatures.entity";
import { AppFeaturesService } from "./appfeatures.service";
import { AppFeaturesController } from "./appfeatures.controller";

@Module({
  imports: [TypeOrmModule.forFeature([AppFeature])],
  controllers: [AppFeaturesController],
  providers: [AppFeaturesService],
})
export class AppFeaturesModule {}