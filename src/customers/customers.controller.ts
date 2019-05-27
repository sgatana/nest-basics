import { Controller, Get, Post, Body } from '@nestjs/common'
import { CustomerService } from './services/customers.service'
import { CustomerDto } from './dto/createCustomer.dto'
import { Customer } from './interfaces/customer.interface'

@Controller('customers')
export class CustomersController {
  constructor(private customerService: CustomerService) {}

  // http methods also know request methods
  @Post()
  async createCustomer(@Body() customer: CustomerDto) {
    await this.customerService.createCustomer(customer)
    return {
      message: 'successfully created'
    }
  }

  @Get()
  async listCustomers(): Promise<Customer[]> {
    return this.customerService.listCustomers()
  }
}
