import {
  IsDateString,
  IsNumber,
  IsObject,
  IsString,
} from 'class-validator';

class RelationDto {
  @IsString()
    name: string;

  @IsString()
    phoneNumber: string;

  @IsNumber()
    dagree: number;
}

export class CreateApplicationDto {
  @IsString()
    name: string;

  @IsString()
    surname: string;

  @IsDateString()
    birthdate: string;

  @IsNumber()
    gender: number;

  @IsObject()
    relationInfo: RelationDto;
}
