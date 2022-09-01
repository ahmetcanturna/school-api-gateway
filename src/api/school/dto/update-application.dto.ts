import {
  IsDateString,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';

class RelationDto {
  @IsOptional()
  @IsString()
    name?: string;

  @IsOptional()
  @IsString()
    phoneNumber?: string;

  @IsOptional()
  @IsNumber()
    dagree?: number;
}

export class UpdateApplicationDto {
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

  @IsOptional()
  @IsObject()
    relationInfo?: RelationDto;
}
