import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SchoolService } from './school.service';
import { ApplicationController } from './school.controller';
import { ServiceCallerModule } from '../../service-caller/service-caller.module';
import { CommonModule } from '../../common/common.module';

@Module({
  controllers: [ApplicationController],
  providers: [SchoolService],
  imports: [
    ServiceCallerModule,
    ConfigModule,
    CommonModule,
  ],
  exports: [SchoolService],
})
export class ApplicationModule {}
