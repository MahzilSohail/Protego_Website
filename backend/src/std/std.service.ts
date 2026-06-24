import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Std } from './std.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StdService {
  constructor(
    @InjectRepository(Std)
    private stdRepository: Repository<Std>,
  ) {}

  // Get all students
  getAll() {
    return this.stdRepository.find();
  }

  // Create new student
  create(data: any) {
    const newStudent = this.stdRepository.create(data);
    return this.stdRepository.save(newStudent);
  }
}
