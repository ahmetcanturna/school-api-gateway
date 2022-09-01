import { ErrorResponse } from '../common/types/error-response';
import { ERROR_CODES } from './error-codes';
import { ErrorKey, ERROR_KEYS } from './error-keys';

export const ERRORS: { [key in ErrorKey]: ErrorResponse } = {
  UNKNOWN_ERROR: {
    error: ERROR_KEYS.UNKNOWN_ERROR,
    code: ERROR_CODES.UNKNOWN_ERROR,
  },
  VALIDATION_ERROR: {
    error: ERROR_KEYS.VALIDATION_ERROR,
    code: ERROR_CODES.VALIDATION_ERROR,
  },
  MICROSERVICE_ERROR: {
    error: ERROR_KEYS.MICROSERVICE_ERROR,
    code: ERROR_CODES.MICROSERVICE_ERROR,
  },
  INVALID_APPLICATION: {
    error: ERROR_KEYS.INVALID_APPLICATION,
    code: ERROR_CODES.INVALID_APPLICATION,
  },
};
