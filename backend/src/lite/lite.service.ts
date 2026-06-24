import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lite } from './lite.entity';

@Injectable()
export class LiteService {
  constructor(
    @InjectRepository(Lite)
    private liteRepository: Repository<Lite>,
  ) {}

  async findAll() {
    return await this.liteRepository.find();
  }

  async create(liteData: Lite) {
    const newLite = this.liteRepository.create(liteData);
    return await this.liteRepository.save(newLite);
  }
}
