import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm';

import { CustomersController } from '../customers.controller'
import { CustomerService } from '../services/customers.service'
import { logger } from '../../middlewares/logger.middleware';
import { Customer } from '../../entities/customer.entity';
// import { LoggerMiddleware } from '../../middlewares/logger.middleware'

@Module({
  imports: [TypeOrmModule.forFeature([Customer])],
  controllers: [CustomersController],
  providers: [CustomerService],
})
export class CustomerModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger)
      .forRoutes(CustomersController)
  }
}
