import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Feature } from "./features.entity";
import { Repository } from "typeorm";

@Injectable()
export class FeaturesService {
  constructor(@InjectRepository(Feature) private repo: Repository<Feature>) {}

  getAll() {
    return this.repo.find();
  }

  create(data: any) {
    return this.repo.save(data);
  }
}
