import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CustomerService } from '../customer/customer.service';
import { Customer } from './model/customer.entity';
import { CustomerDto } from './dto/customer.dto';
import * as pushid from 'pushid'

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService){}
  @Get()
  async listCustomers(): Promise<Customer[]>{
    return this.customerService.listCustomers()
  }

  @Get(':id')
  async getCustomer(@Param('id') id): Promise<Customer>{
    console.log(id)
    return this.customerService.getCustomer(id)
  }

  @Post()
  async createCustomers(@Body() customer: CustomerDto): Promise<Customer>{
    customer.id = pushid()
    return this.customerService.createCustomer(customer)
    
  }
}
