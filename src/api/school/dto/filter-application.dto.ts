import {
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class FilterApplicationDto {
  @IsOptional()
  @IsString()
    name?: string;

  @IsOptional()
  @IsString()
    surname?: string;

  @IsOptional()
  @IsDateString()
    birthdate?: string;

  @IsOptional()
  @IsNumber()
    gender?: number;

  @IsOptional()
  @IsNumber()
    status?: number;
}
