import { Injectable } from '@nestjs/common';
import { Customer } from '../interfaces/customer.interface';

@Injectable()
export class CustomerService {
  private customers: Customer[] = [];

  // our methods 
  createCustomer(customer: Customer){
    this.customers.push(customer)
  }
  listCustomers(): Customer[]{
    return this.customers
  }
}
