import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';
import { TranslationService } from '../services/translation.service';
import { ErrorResponse } from '../types/error-response';
import { languages } from '../types/language';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  constructor(private readonly translationService: TranslationService) {}

  // eslint-disable-next-line class-methods-use-this
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();

    const exceptionContent = exception.getResponse() as ErrorResponse;

    if (exceptionContent.message) {
      return response
        .status(status)
        .json(exceptionContent);
    }

    const message = this.getTranslatedMessages(exceptionContent.error);

    return response
      .status(status)
      .json({
        ...exceptionContent,
        message,
      });
  }

  private getTranslatedMessages(errorKey: string) {
    return languages.map((language) => ({
      [language]: this.translationService.get(errorKey, language),
    })).reduce((prev, current) => ({
      ...prev,
      ...current,
    }), {});
  }
}
