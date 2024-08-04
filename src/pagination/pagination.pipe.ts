import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import { etc } from 'src/common/constants';

@Injectable()
export class PaginationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    //set default values of page and limit if not provided
    if (value.limit && value.limit > etc.maxLimit) {
      value.limit = etc.maxLimit;
    }
    value.page = value.page ? value.page : 0;
    value.limit = value.limit ? value.limit : 10;

    return value;
  }
}
