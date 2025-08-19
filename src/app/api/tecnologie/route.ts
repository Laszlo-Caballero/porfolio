import { TecnologieDto } from "@/dtos/tecnologie/tecnologie.dto";
import connectMongoDB from "@/lib/mongo";
import { Validate } from "@/lib/validateDto";
import Tecnologie from "@/schemas/tecnologie/tecnologie.schema";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();

  const tecnologies = await Tecnologie.find();

  return new NextResponse(
    JSON.stringify({
      message: "Tecnologies retrieved successfully",
      data: tecnologies,
      status: 200,
    }),
    { status: 200 }
  );
}

export async function POST(req: NextRequest) {
  const body: TecnologieDto = await req.json();

  const errors = await Validate(TecnologieDto, body);

  if (errors.length > 0) {
    return new NextResponse(
      JSON.stringify({
        message: "Validation failed",
        errors: errors,
        status: 400,
      }),
      { status: 400 }
    );
  }

  await connectMongoDB();

  const newTecnologie = await Tecnologie.create(body);

  const saveTecnologie = await newTecnologie.save();

  return new NextResponse(
    JSON.stringify({
      message: "Tecnologie created successfully",
      data: saveTecnologie,
      status: 201,
    }),
    { status: 201 }
  );
}
