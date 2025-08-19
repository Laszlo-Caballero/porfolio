import { ArrayMinSize, ValidateNested } from "class-validator";
import { TecnologieDto } from "./tecnologie.dto";
import { Type } from "class-transformer";

export class InsertManyTecnologieDto {
  @ValidateNested({ each: true })
  @Type(() => TecnologieDto)
  @ArrayMinSize(1)
  tecnologies: TecnologieDto[];
}
