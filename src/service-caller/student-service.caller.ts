import { BadRequestException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class StudentServiceCaller {
  url: string;

  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {
    this.url = this.configService.get<any>('microservice.urls.student');
  }

  async getStudentById(id: string): Promise<any> {
    const student = await lastValueFrom(
      this.httpService.get(
        `${this.url}student/${id}`,
      ),
    ).then((response) => response.data)
      .catch((err) => { throw new BadRequestException({ ...err.response.data, microservice: 'student' }); });

    return student;
  }

  async updateStudent(
    id: string,
    name: string,
    surname: string,
    birthdate: string,
    gender: number,
    classroom: number,
    relationInfo: { name: string, phoneNumber: string, dagree: number },
  ): Promise<any> {
    return lastValueFrom(
      this.httpService.put(`${this.url}student/${id}`, {
        name,
        surname,
        birthdate,
        gender,
        classroom,
        relationInfo,
      }),
    ).then((response) => response.data)
      .catch((err) => { throw new BadRequestException({ ...err.response.data, microservice: 'student' }); });
  }

  async filterStudent(
    name: string,
    surname: string,
    birthdate: string,
    classroom: string,
    gender: number,
  ): Promise<any> {
    return lastValueFrom(
      this.httpService.post(`${this.url}student/filter`, {
        name,
        surname,
        birthdate,
        classroom,
        gender,
      }),
    ).then((response) => response.data)
      .catch((err) => { throw new BadRequestException({ ...err.response.data, microservice: 'studentStudent' }); });
  }

  async createStudent(
    name: string,
    surname: string,
    birthdate: string,
    gender: number,
    relationInfo: { name: string, phoneNumber: string, dagree: number },
  ): Promise<any> {
    return lastValueFrom(
      this.httpService.post(`${this.url}student`, {
        name,
        surname,
        birthdate,
        gender,
        relationInfo,
      }),
    ).then((response) => response.data)
      .catch((err) => { throw new BadRequestException({ ...err.response.data, microservice: 'studentStudent' }); });
  }
}
