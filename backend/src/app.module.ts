import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { LangageModule } from './langage/langage.module';
import { AppLoggerMiddleware } from './app.middleware';
@Module({
  imports: [TypeOrmModule.forRoot(), LangageModule],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(AppLoggerMiddleware).forRoutes('*');
  }
}
