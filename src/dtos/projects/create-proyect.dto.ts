import {
  ArrayMinSize,
  ArrayNotEmpty,
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { DetailProyectDto } from './detail.dto';
import { ImageDto } from './image.dto';
import { Type } from 'class-transformer';
import { ArquitectureDto } from './arquitecture.dto';

export class CreateProyectDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  detail: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  slug: string;

  @ValidateNested()
  @Type(() => ImageDto)
  urlImage: ImageDto;

  @ValidateNested({ each: true })
  @ArrayNotEmpty()
  @ArrayMinSize(3)
  @Type(() => ImageDto)
  images: ImageDto[];

  @IsString()
  @IsNotEmpty()
  githubUrl: string;

  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  tecnologies: string[];

  @ValidateNested()
  @IsNotEmpty()
  @Type(() => DetailProyectDto)
  details: DetailProyectDto;

  @IsString()
  @IsNotEmpty()
  resume: string;

  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  objectives: string[];

  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  learnings: string[];

  @IsBoolean()
  @IsOptional()
  outStanding?: boolean = false;

  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => ArquitectureDto)
  @ArrayMinSize(2)
  arquitecture: ArquitectureDto[];
}
