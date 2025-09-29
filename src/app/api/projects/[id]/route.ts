import connectMongoDB from '@/lib/mongo';
import Project from '@/schemas/projects/project.schema';
import { NextResponse } from 'next/server';
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

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  await connectMongoDB();

  const project = await Project.findOne({
    projectId: id,
  }).exec();

  if (!project) {
    return new NextResponse(JSON.stringify({ message: 'Project not found' }), {
      status: 404,
    });
  }
  return new NextResponse(
    JSON.stringify({
      message: 'Project found',
      body: project,
      status: 200,
    }),
  );
}

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const updateProyectDto = await req.json();

  await connectMongoDB();

  console.log('Updating project with ID:', id);

  const project = await Project.findOne({
    projectId: id,
  }).exec();

  if (!project) {
    return NextResponse.json(
      { message: 'Project not found' },
      {
        status: 404,
      },
    );
  }

  const proyect = await Project.updateOne(
    {
      proyectId: id,
    },
    updateProyectDto,
  );

  return NextResponse.json({
    message: 'Project updated',
    body: proyect,
    status: 200,
  });
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  await connectMongoDB();

  const project = await Project.findOne({
    projectId: id,
  });

  if (!project) {
    return new NextResponse(JSON.stringify({ message: 'Project not found' }), {
      status: 404,
    });
  }

  await Project.deleteOne({ projectId: id }).exec();

  return new NextResponse(
    JSON.stringify({
      message: 'Project deleted',
      status: 200,
      body: null,
    }),
  );
}
