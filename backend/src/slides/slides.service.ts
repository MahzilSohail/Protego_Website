import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Slide } from './slides.entity';

@Injectable()
export class SlidesService {
  constructor(
    @InjectRepository(Slide)
    private repo: Repository<Slide>
  ) {}

  getAll() {
    return this.repo.find();
  }

  create(data: any) {
    return this.repo.save(data);
  }
}
