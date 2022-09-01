/* eslint-disable class-methods-use-this */
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR, APP_FILTER } from '@nestjs/core';
import { ApiModule } from './api/api.module';
import { CommonModule } from './common/common.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { ResponseLoggerInterceptor } from './common/interceptors';
import { RequestLoggerMiddleware } from './common/middlewares';
import { configuration } from './config';
import { ENVIRONMENTS } from './constants';

@Module({
  imports: [
    ApiModule,
    ConfigModule.forRoot({
      load: [configuration],
      envFilePath: ENVIRONMENTS[process.env.NODE_ENV] || ENVIRONMENTS.dev,
    }),
    CommonModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseLoggerInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestLoggerMiddleware).forRoutes('*');
  }
}
