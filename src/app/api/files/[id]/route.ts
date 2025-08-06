import connectMongoDB from "@/lib/mongo";
import File from "@/schemas/files/file.schema";
import cloudinary from "@/utils/cloudinary";
import { DeleteApiResponse } from "cloudinary";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await connectMongoDB();

    const file = await File.findOne({
      name: id,
    });

    if (!file) {
      return NextResponse.json("File not found", { status: 404 });
    }

    await File.deleteOne({
      name: id,
    });

    const res = await new Promise<DeleteApiResponse>((res, reject) => {
      cloudinary.uploader.destroy(id, (error, result) => {
        if (error || !result) {
          return reject(error);
        }
        res(result);
      });
    });

    return NextResponse.json({
      message: "File deleted successfully",
      body: res,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json("Internal Server Error", { status: 500 });
  }
}
