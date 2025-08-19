import "reflect-metadata";
import { IsNotEmpty, IsString, IsUrl } from "class-validator";

export class TecnologieDto {
  @IsUrl()
  @IsNotEmpty()
  urlImage: string;

  @IsNotEmpty()
  @IsString()
  altImage: string;
}
