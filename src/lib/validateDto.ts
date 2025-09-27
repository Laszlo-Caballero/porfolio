import { ClassConstructor, plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

export async function Validate<T, K>(dto: ClassConstructor<T>, obj: K) {
  const instance = plainToInstance(dto, obj);

  const errors = await validate(instance as object);

  if (errors.length > 0) {
    return errors.map((error) => ({
      property: error.property,
      constraints: error.constraints,
    }));
  }

  return [];
}
