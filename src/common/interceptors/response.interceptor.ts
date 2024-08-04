import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  data: T;
}

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    const status = context.switchToHttp().getResponse().statusCode;
    // console.log('ResponseInterceptor', status);

    return next
      .handle()
      .pipe(map((data) => ({ success: true, statusCode: status, data })));
  }
}
