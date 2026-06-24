import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pro } from './pro.entity';

@Injectable()
export class ProService {
  constructor(
    @InjectRepository(Pro)
    private proRepository: Repository<Pro>,
  ) {}

  async findAll() {
    return this.proRepository.find();
  }
  async findOne(id) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    return this.proRepository.findOne({ where: { id } });
  }

  async create(proData: any) {
    const pro = this.proRepository.create(proData);
    return this.proRepository.save(pro);
  }
}
