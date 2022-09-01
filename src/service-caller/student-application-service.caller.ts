import { BadRequestException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class StudentApplicationServiceCaller {
  url: string;

  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {
    this.url = this.configService.get<any>('microservice.urls.studentApplication');
  }

  async getApplicationById(id: string): Promise<any> {
    const application = await lastValueFrom(
      this.httpService.get(
        `${this.url}application/${id}`,
      ),
    ).then((response) => response.data)
      .catch((err) => { throw new BadRequestException({ ...err.response.data, microservice: 'studentApplication' }); });

    return application;
  }

  async updateApplication(id: string, status: number): Promise<any> {
    return lastValueFrom(
      this.httpService.put(`${this.url}application/${id}`, {
        status,
      }),
    ).then((response) => response.data)
      .catch((err) => { throw new BadRequestException({ ...err.response.data, microservice: 'studentApplication' }); });
  }

  async filterApplication(
    name: string,
    surname: string,
    birthdate: string,
    gender: number,
    status: number,
  ): Promise<any> {
    return lastValueFrom(
      this.httpService.post(`${this.url}application/filter`, {
        name,
        surname,
        birthdate,
        gender,
        status,
      }),
    ).then((response) => response.data)
      .catch((err) => { throw new BadRequestException({ ...err.response.data, microservice: 'studentApplication' }); });
  }

  async createApplication(
    name: string,
    surname: string,
    birthdate: string,
    gender: number,
    relationInfo: { name: string, phoneNumber: string, dagree: number },
  ): Promise<any> {
    return lastValueFrom(
      this.httpService.post(`${this.url}application`, {
        name,
        surname,
        birthdate,
        gender,
        relationInfo,
      }),
    ).then((response) => response.data)
      .catch((err) => { throw new BadRequestException({ ...err.response.data, microservice: 'studentApplication' }); });
  }
}
