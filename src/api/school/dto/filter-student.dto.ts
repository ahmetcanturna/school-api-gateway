import {
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class FilterStudentDto {
  @IsOptional()
  @IsString()
    name?: string;

  @IsOptional()
  @IsString()
    surname?: string;

  @IsOptional()
  @IsString()
    classroom?: string;

  @IsOptional()
  @IsDateString()
    birthdate?: string;

  @IsOptional()
  @IsNumber()
    gender?: number;
}
