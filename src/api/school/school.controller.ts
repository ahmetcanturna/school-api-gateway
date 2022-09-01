import {
  Controller, Post, Body, Param, Get, Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SchoolService } from './school.service';
import { CreateApplicationDto } from './dto/create-application.dto';
import { FilterApplicationDto } from './dto/filter-application.dto';
import { FilterStudentDto } from './dto/filter-student.dto';

@ApiTags('school')
@Controller('school')
export class ApplicationController {
  constructor(private readonly applicationService: SchoolService) {}

  @Get('application/:id')
  @ApiOperation({
    summary: 'Gets application by id.',
  })
  async getApplicationById(@Param('id') id: string) {
    return this.applicationService.findApplicationById(id);
  }

  @Post('application')
  @ApiOperation({
    summary: 'Creates application.',
  })
  async createApplication(@Body() createApplicationDto: CreateApplicationDto) {
    return this.applicationService.createApplication(createApplicationDto);
  }

  @Put('application/approve/:id')
  @ApiOperation({
    summary: 'Approves application.',
  })
  async approveApplication(@Param('id') id: string) {
    return this.applicationService.approveApplication(id);
  }

  @Put('application/reject/:id')
  @ApiOperation({
    summary: 'Rejects application.',
  })
  async rejectApplication(@Param('id') id: string) {
    return this.applicationService.rejectApplication(id);
  }

  @Post('application/filter')
  @ApiOperation({
    summary: 'Filters application by given parameters',
  })
  async filterApplication(@Body() filterApplicationDto: FilterApplicationDto) {
    return this.applicationService.filterApplication(filterApplicationDto);
  }

  @Get('student/:id')
  @ApiOperation({
    summary: 'Gets student by id.',
  })
  async getStudentById(@Param('id') id: string) {
    return this.applicationService.findStudentById(id);
  }

  @Post('student/filter')
  @ApiOperation({
    summary: 'Filters student by given parameters',
  })
  async filterStudent(@Body() filterStudentDto: FilterStudentDto) {
    return this.applicationService.filterStudent(filterStudentDto);
  }
}
