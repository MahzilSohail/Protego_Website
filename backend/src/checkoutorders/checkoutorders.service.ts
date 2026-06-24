import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CheckoutOrder } from './checkoutorders.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CheckoutOrdersService {
  constructor(
    @InjectRepository(CheckoutOrder)
    private readonly checkoutOrdersRepo: Repository<CheckoutOrder>,
  ) {}

  create(orderData: Partial<CheckoutOrder>): Promise<CheckoutOrder> {
    const order = this.checkoutOrdersRepo.create(orderData);
    return this.checkoutOrdersRepo.save(order);
  }

  findAll(): Promise<CheckoutOrder[]> {
    return this.checkoutOrdersRepo.find();
  }
}
