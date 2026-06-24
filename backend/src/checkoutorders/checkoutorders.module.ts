import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CheckoutOrdersService } from './checkoutorders.service';
import { CheckoutOrdersController } from './checkoutorders.controller';
import { CheckoutOrder } from './checkoutorders.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CheckoutOrder])],
  providers: [CheckoutOrdersService],
  controllers: [CheckoutOrdersController],
})
export class CheckoutOrdersModule {}
