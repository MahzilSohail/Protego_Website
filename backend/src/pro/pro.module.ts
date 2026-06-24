import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProService } from './pro.service';
import { ProController } from './pro.controller';
import { Pro } from './pro.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pro])],
  controllers: [ProController],
  providers: [ProService],
})
export class ProModule {}
