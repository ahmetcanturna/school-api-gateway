import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { StudentApplicationServiceCaller } from './student-application-service.caller';
import { StudentServiceCaller } from './student-service.caller';

@Module({
  imports: [HttpModule, ConfigModule],
  providers: [StudentApplicationServiceCaller, StudentServiceCaller],
  exports: [StudentApplicationServiceCaller, StudentServiceCaller],
})
export class ServiceCallerModule {}
