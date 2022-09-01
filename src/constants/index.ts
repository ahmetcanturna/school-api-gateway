import { ERRORS } from './errors';
import { ERROR_KEYS } from './error-keys';
import { ERROR_CODES } from './error-codes';
import { MODEL_PROVIDERS } from './model-providers';
import { DATABASE_CONNECTIONS } from './database-connections';
import { MICROSERVICES } from './microservices';
import { ENVIRONMENTS } from './environments';

const CONSTANTS = {
  APPLICATION_STATUS: {
    RECIEVED: 100,
    APPROVED: 200,
    REJECTED: 300,
  },
};

export {
  ERRORS,
  ERROR_KEYS,
  ERROR_CODES,
  MODEL_PROVIDERS,
  CONSTANTS,
  DATABASE_CONNECTIONS,
  MICROSERVICES,
  ENVIRONMENTS,
};
