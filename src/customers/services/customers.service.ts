import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { ICustomer } from '../interfaces/customer.interface'
import { InjectRepository } from '@nestjs/typeorm'
import { Customer } from '../../entities/customer.entity'
import { Repository } from 'typeorm'

@Injectable()
export class CustomerService {
  private customers: ICustomer[] = []

  // constructor(
  //   @InjectRepository(Customer)
  //   private customerRepository: Repository<Customer>,
  // ) {}
  // our methods
  createCustomer(customer: ICustomer) {
    const { name } = customer
    console.log('customer')
    if (!name || name === undefined)
      throw new HttpException(
        { error: 'email is not provided', status: HttpStatus.UNAUTHORIZED },
        401,
      )
    this.customers.push(customer)
  }
  listCustomers(): ICustomer[] {
    return this.customers
  }
  /**async listCustomers(): Promise<Customer[]> {
    return this.customerRepository.find()
  } */
}
