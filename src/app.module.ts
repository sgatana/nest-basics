import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersController } from './customers/customers.controller';
import { CustomerService } from './customers/services/customers.service';

@Module({
  imports: [],
  controllers: [AppController, CustomersController],
  providers: [AppService, CustomerService],
})
export class AppModule {}
