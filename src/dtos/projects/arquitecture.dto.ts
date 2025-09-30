import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';

export class ArquitectureDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  badges: string[];

  @IsArray()
  @IsOptional()
  @Type(() => KeyValueDto)
  detail: KeyValueDto[];

  @IsOptional()
  @IsNumber()
  @IsPositive()
  colSpan?: number = 1;
}

export class KeyValueDto {
  @IsString()
  @IsNotEmpty()
  key: string;

  @IsString()
  @IsNotEmpty()
  value: string;
}
