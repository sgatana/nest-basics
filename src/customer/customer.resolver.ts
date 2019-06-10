import {Resolver, Query} from '@nestjs/graphql'
@Resolver('Customer')
export class CustomerResolver {
  @Query()
  customers(){
    return [{
      id: 'snfkdfiv',
      name: 'Stephen',
      profession: 'Software'
    }]
  }
}