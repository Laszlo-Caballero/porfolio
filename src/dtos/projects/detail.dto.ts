import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class DetailProyectDto {
  @IsString()
  @IsNotEmpty()
  role: string;

  @IsString()
  @IsNotEmpty()
  time: string;

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsString()
  @IsOptional()
  team?: string;
}
