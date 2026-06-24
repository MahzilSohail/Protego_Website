import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AppFeature } from "./appfeatures.entity";

@Injectable()
export class AppFeaturesService {
  constructor(
    @InjectRepository(AppFeature)
    private repo: Repository<AppFeature>,
  ) {}

  getAll() {
    return this.repo.find();
  }

  create(data: any) {
    return this.repo.save(data);
  }
}
