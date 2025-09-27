import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class ImageDto {
  @IsString()
  @IsUrl()
  @IsNotEmpty()
  url: string;

  @IsString()
  @IsNotEmpty()
  alt: string;
}
