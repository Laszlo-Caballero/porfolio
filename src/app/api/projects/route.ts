import { CreateProyectDto } from "@/dtos/projects/create-proyect.dto";
import connectMongoDB from "@/lib/mongo";
import { Validate } from "@/lib/validateDto";
import Project from "@/schemas/projects/project.schema";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";

export async function GET() {
  await connectMongoDB();

  const projects = await Project.find();

  return new NextResponse(
    JSON.stringify({
      message: "All proyects",
      body: projects,
      status: 200,
    })
  );
}

export async function POST(req: NextRequest) {
  const body: CreateProyectDto = await req.json();

  const errors = await Validate(CreateProyectDto, body);

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
  const newProject = await Project.create({
    projectId: id,
    ...body,
  });

  const savedProject = await newProject.save();

  return new NextResponse(
    JSON.stringify({
      message: "Proyect created",
      body: savedProject,
      status: 201,
    }),
    { status: 201 }
  );
}
