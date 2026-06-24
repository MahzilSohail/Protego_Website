import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Model } from './model.entity';
 
@Injectable()
export class ModelService {
  constructor(
    @InjectRepository(Model)
    private modelRepository: Repository<Model>,
  ) {}

  async getAllModels() {
    return await this.modelRepository.find();
  }

  async createModel(data: any) {
    const model = this.modelRepository.create(data); 
    return await this.modelRepository.save(model);
  }
}
