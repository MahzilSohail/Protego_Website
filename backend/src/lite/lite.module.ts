import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LiteService } from './lite.service';
import { LiteController } from './lite.controller';
import { Lite } from './lite.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lite])],
  controllers: [LiteController],
  providers: [LiteService],
})
export class LiteModule {}

