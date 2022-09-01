/* eslint-disable class-methods-use-this */
import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  static isShutDownStarted: any;

  async healthCheck() {
    const status = HealthService.getIsShutDownStarted() ? 'NOK' : 'OK';

    return { time: Date.now(), status };
  }

  static getIsShutDownStarted() {
    return HealthService.isShutDownStarted;
  }

  static startShutDown() {
    HealthService.isShutDownStarted = true;

    return true;
  }
}
