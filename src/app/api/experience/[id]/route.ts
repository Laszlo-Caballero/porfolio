import connectMongoDB from "@/lib/mongo";
import { Experience } from "@/schemas/experience/experience.schema";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  await connectMongoDB();
  const experience = await Experience.findOne({
    experienceId: id,
  });

  if (!experience) {
    return NextResponse.json(
      { message: "Experience not found", status: 404 },
      { status: 404 }
    );
  }

  return NextResponse.json(
    {
      message: "Experience found",
      body: experience,
      status: 200,
    },
    { status: 200 }
  );
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  await connectMongoDB();
  const experience = await Experience.findOne({
    experienceId: id,
  });

  if (!experience) {
    return NextResponse.json(
      { message: "Experience not found", status: 404 },
      { status: 404 }
    );
  }

  await Experience.deleteOne({ experienceId: id });

  return NextResponse.json(
    {
      message: "Experience deleted",
      status: 200,
    },
    { status: 200 }
  );
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const updateExperienceDto = await req.json();

  await connectMongoDB();
  const experience = await Experience.findOne({
    experienceId: id,
  });

  if (!experience) {
    return NextResponse.json(
      { message: "Experience not found", status: 404 },
      { status: 404 }
    );
  }

  await Experience.updateOne({ experienceId: id }, updateExperienceDto);

  return NextResponse.json(
    {
      message: "Experience updated",
      status: 200,
    },
    { status: 200 }
  );
}
