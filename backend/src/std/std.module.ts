import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Std } from './std.entity';
import { StdController } from './std.controller';
import { StdService } from './std.service';

@Module({
  imports: [TypeOrmModule.forFeature([Std])],
  controllers: [StdController],
  providers: [StdService],
})
export class StdModule {}
