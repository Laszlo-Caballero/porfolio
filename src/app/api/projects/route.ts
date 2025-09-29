import 'reflect-metadata';
import { CreateProyectDto } from '@/dtos/projects/create-proyect.dto';
import connectMongoDB from '@/lib/mongo';
import { Validate } from '@/lib/validateDto';
import Project from '@/schemas/projects/project.schema';
import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuid } from 'uuid';

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

  const projects = await Project.find();

  return NextResponse.json(
    {
      message: 'All projects',
      body: projects,
      status: 200,
    },
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
  );
}

export async function POST(req: NextRequest) {
  const body: CreateProyectDto = await req.json();

  const errors = await Validate(CreateProyectDto, body);

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
  const id = uuid();
  const newProject = await Project.create({
    projectId: id,
    ...body,
  });

  const savedProject = await newProject.save();

  return NextResponse.json(
    {
      message: 'Proyect created',
      body: savedProject,
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
