import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { ApplicationModule } from './school/school.module';

@Module({
  imports: [HealthModule, ApplicationModule],
  controllers: [],
  providers: [],
})
export class ApiModule {}
