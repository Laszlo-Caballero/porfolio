import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, IsUrl } from 'class-validator';

export class ImageDto {
  @IsString()
  @IsUrl()
  @IsNotEmpty()
  url: string;

  @IsString()
  @IsNotEmpty()
  alt: string;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  colSpan?: number = 1;
}
