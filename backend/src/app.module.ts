import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModelModule } from './model/model.module';
import { ProModule } from './pro/pro.module';
import { LiteModule } from './lite/lite.module';
import { StdModule } from './std/std.module';
import { AppFeaturesModule } from './appfeatures/appfeatures.module';
import { FeaturesModule } from './features/features.module';
import { SlidesModule } from './slides/slides.module';
import { OrdersModule } from './orders/orders.module';
import { UsersModule } from './users/users.module';
import { CheckoutOrdersModule } from './checkoutorders/checkoutorders.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: 'Fatima212@',
      database: 'Protego',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ModelModule,
    ProModule,
    LiteModule,
    StdModule,
    AppFeaturesModule,
    FeaturesModule,
    SlidesModule,
    OrdersModule,
    UsersModule,
    CheckoutOrdersModule,
  ],
})
export class AppModule {}
