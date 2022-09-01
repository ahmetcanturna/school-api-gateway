import { Injectable } from '@nestjs/common';
import { CreateApplicationDto } from './dto/create-application.dto';
import { StudentApplicationServiceCaller } from '../../service-caller/student-application-service.caller';
import { StudentServiceCaller } from '../../service-caller/student-service.caller';
import { FilterApplicationDto } from './dto/filter-application.dto';
import { FilterStudentDto } from './dto/filter-student.dto';

@Injectable()
export class SchoolService {
  constructor(
    private studentApplicationServiceCaller: StudentApplicationServiceCaller,
    private studentServiceCaller: StudentServiceCaller,
  ) {}

  async createApplication(createApplicationDto: CreateApplicationDto) {
    const {
      name,
      surname,
      birthdate,
      gender,
      relationInfo,
    } = createApplicationDto;

    const application = await this.studentApplicationServiceCaller.createApplication(
      name,
      surname,
      birthdate,
      gender,
      relationInfo,
    );

    return application;
  }

  async findApplicationById(id: string) {
    const application = await this.studentApplicationServiceCaller.getApplicationById(id);

    return application;
  }

  async approveApplication(id: string) {
    const updatedApplication = await this.studentApplicationServiceCaller.updateApplication(
      id,
      200,
    );

    const student = await this.studentServiceCaller.createStudent(
      updatedApplication.name,
      updatedApplication.surname,
      updatedApplication.birthdate,
      updatedApplication.gender,
      updatedApplication.relationInfo,
    );

    return student;
  }

  async rejectApplication(id: string) {
    const updatedApplication = await this.studentApplicationServiceCaller.updateApplication(
      id,
      300,
    );

    return updatedApplication;
  }

  async filterApplication(filterApplicationDto: FilterApplicationDto) {
    const {
      name,
      surname,
      birthdate,
      gender,
      status,
    } = filterApplicationDto;

    const applications = await this.studentApplicationServiceCaller.filterApplication(
      name,
      surname,
      birthdate,
      gender,
      status,
    );

    return applications;
  }

  async findStudentById(id: string) {
    const student = await this.studentServiceCaller.getStudentById(id);

    return student;
  }

  async filterStudent(filterStudentDto: FilterStudentDto) {
    const {
      name,
      surname,
      birthdate,
      classroom,
      gender,
    } = filterStudentDto;

    const students = await this.studentServiceCaller.filterStudent(
      name,
      surname,
      birthdate,
      classroom,
      gender,
    );

    return students;
  }
}
