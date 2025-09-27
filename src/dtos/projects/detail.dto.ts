import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class DetailProyectDto {
  @IsString()
  @IsNotEmpty()
  role: string;

  @IsString()
  @IsNotEmpty()
  time: string;
  @IsString()
  @IsOptional()
  team?: string;
}
