import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { HttpException } from '@nestjs/common';
import { ValidationError } from 'class-validator';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception.getStatus();

    // console.log('HttpExceptionFilter', exception.getResponse());

    if (status === HttpStatus.BAD_REQUEST) {
      const validationErrors: any = exception.getResponse()['message'];
      //   console.log('validationErrors', validationErrors);

      if (Array.isArray(validationErrors)) {
        // If validationErrors is an array, it's likely a DTO validation error
        response.status(HttpStatus.BAD_REQUEST).json({
          success: false,
          statusCode: status,
          message: 'Validation failed',
          errors: validationErrors.map((error: ValidationError) => {
            return error;
          }),
        });
      } else {
        // Handle other types of BadRequestExceptions
        response.status(HttpStatus.BAD_REQUEST).json({
          success: false,
          statusCode: status,
          message: exception.message || 'Bad request',
        });
      }
    } else {
      // Pass other types of exceptions through
      response.status(status).json({
        success: false,
        statusCode: status,
        message: exception.message || 'Internal server error',
      });
    }
  }
}
