import { Module } from '@nestjs/common'
import { CustomersController } from '../customers.controller'
import { CustomerService } from '../services/customers.service'

@Module({
  controllers: [CustomersController],
  providers: [CustomerService],
})
export class CustomerModule {}
