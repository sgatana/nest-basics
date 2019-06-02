import * as Joi from 'joi'
import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common'

@Injectable()
export class ValidateCustomer implements PipeTransform {
  constructor(private schema: Object) {}
  transform(value: any, metadata: ArgumentMetadata) {
    const { error } = Joi.validate(value, this.schema)
    if (error) throw new BadRequestException('invalid inputs')
    return value
  }
}
