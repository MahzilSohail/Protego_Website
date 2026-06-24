import { Controller, Post, Body, Get } from '@nestjs/common';
import { CheckoutOrdersService } from './checkoutorders.service';
import { CheckoutOrder } from './checkoutorders.entity';

@Controller('checkoutorders')
export class CheckoutOrdersController {
  constructor(private readonly checkoutOrdersService: CheckoutOrdersService) {}

  @Post()
  create(@Body() orderData: Partial<CheckoutOrder>): Promise<CheckoutOrder> {
    return this.checkoutOrdersService.create(orderData);
  }

  @Get()
  findAll(): Promise<CheckoutOrder[]> {
    return this.checkoutOrdersService.findAll();
  }
}
