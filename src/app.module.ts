import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CustomerModule } from './customers/modules/customer.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Connection } from 'typeorm'
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    CustomerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
