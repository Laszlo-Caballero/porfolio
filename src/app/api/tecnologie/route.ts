import { TecnologieDto } from '@/dtos/tecnologie/tecnologie.dto';
import connectMongoDB from '@/lib/mongo';
import { Validate } from '@/lib/validateDto';
import Tecnologie from '@/schemas/tecnologie/tecnologie.schema';
import { NextRequest, NextResponse } from 'next/server';

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Credentials': 'true',
    },
  });
}

export async function GET() {
  await connectMongoDB();

  const tecnologies = await Tecnologie.find();

  return NextResponse.json(
    {
      message: 'Tecnologies retrieved successfully',
      data: tecnologies,
      status: 200,
    },
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
  );
}

export async function POST(req: NextRequest) {
  const body: TecnologieDto = await req.json();

  const errors = await Validate(TecnologieDto, body);

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

  const newTecnologie = await Tecnologie.create(body);

  const saveTecnologie = await newTecnologie.save();

  return NextResponse.json(
    {
      message: 'Tecnologie created successfully',
      data: saveTecnologie,
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
