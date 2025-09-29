import { InsertManyTecnologieDto } from '@/dtos/tecnologie/InsertMany.dto';
import connectMongoDB from '@/lib/mongo';
import { Validate } from '@/lib/validateDto';
import Tecnologie from '@/schemas/tecnologie/tecnologie.schema';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body: InsertManyTecnologieDto = await req.json();

  const errors = await Validate(InsertManyTecnologieDto, body);

  if (errors.length > 0) {
    return NextResponse.json(
      {
        message: 'Validation failed',
        errors: errors,
        status: 400,
      },
      {
        status: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      },
    );
  }

  await connectMongoDB();

  const saves = await Promise.all(
    body.tecnologies.map(async (tecnology) => {
      const newTecnologie = await Tecnologie.create(tecnology);

      const saveTecnologie = await newTecnologie.save();
      return saveTecnologie;
    }),
  );

  return NextResponse.json(
    {
      message: 'Tecnologies created successfully',
      data: saves,
      status: 201,
    },
    {
      status: 201,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
  );
}
