import { Injectable } from '@nestjs/common';
import { Customer } from '../customer/model/customer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerDto } from './dto/customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}
  async listCustomers(): Promise<Customer[]> {
    return this.customerRepository.find();
  }
  async getCustomer(id: string){
    return this.customerRepository.findOne({where: {id}})
  }
  async createCustomer(payload: CustomerDto): Promise<Customer> { 
   const customer = await this.customerRepository.save(payload)
   await this.customerRepository.save(customer)
   return customer
  }
}
