import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
@Module({
  imports: [TypeOrmModule.forRoot(), GraphQLModule.forRoot({
    typePaths: ['./**/*.graphql']
  }), 
  CustomerModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
