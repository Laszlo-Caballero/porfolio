import "reflect-metadata";
import { CreateExperienceDto } from "@/dtos/experience/create-experience.dto";
import connectMongoDB from "@/lib/mongo";
import { Validate } from "@/lib/validateDto";
import { Experience } from "@/schemas/experience/experience.schema";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";

export async function GET() {
  await connectMongoDB();

  const experience = await Experience.find();

  return NextResponse.json({
    message: "All experiences",
    body: experience,
    status: 200,
  });
}

export async function POST(req: NextRequest) {
  const body: CreateExperienceDto = await req.json();
  const errors = await Validate(CreateExperienceDto, body);

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
  const id = uuid();
  const newExperience = await Experience.create({
    experienceId: id,
    ...body,
  });

  const savedExperience = await newExperience.save();

  return new NextResponse(
    JSON.stringify({
      message: "Experience created",
      body: savedExperience,
      status: 201,
    }),
    { status: 201 }
  );
}
