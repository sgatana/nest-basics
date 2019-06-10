import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { Customer } from '../customer/model/customer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerResolver } from '../customer/customer.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Customer])],
  providers: [CustomerService, CustomerResolver],
  controllers: [CustomerController],
})
export class CustomerModule {}
