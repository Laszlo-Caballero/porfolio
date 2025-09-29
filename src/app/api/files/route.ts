import { CloudinaryResponse } from '@/Interfaces/types';
import cloudinary from '@/utils/cloudinary';
import * as streamifier from 'streamifier';
import { NextRequest, NextResponse } from 'next/server';
import sharp from 'sharp';
import File from '@/schemas/files/file.schema';
import connectMongoDB from '@/lib/mongo';

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

export async function POST(nextRequest: NextRequest) {
  try {
    const body = await nextRequest.formData();
    const file = body.get('file');

    if (!file || !(file instanceof Blob)) {
      return new Response('No file provided', { status: 400 });
    }

    const buffer_any = Buffer.from(await file.arrayBuffer());

    const buffer = await sharp(buffer_any).webp().toBuffer();

    const res = await new Promise<CloudinaryResponse>((res, rec) => {
      const uploadStream = cloudinary.uploader.upload_stream((error, result) => {
        if (error || !result) {
          return rec(error);
        }

        res(result);
      });

      streamifier.createReadStream(buffer).pipe(uploadStream);
    });

    await connectMongoDB();

    const newImage = await File.create({
      name: res.public_id,
      url: res.url,
      type: 'image',
    });
    const savedImage = await newImage.save();

    return NextResponse.json(
      {
        message: 'File uploaded successfully',
        body: savedImage,
        status: 200,
      },
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      },
    );
  } catch (error) {
    console.error('Error uploading image:', error);
    return NextResponse.json('Failed to upload image', {
      status: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
}

export async function GET() {
  await connectMongoDB();

  const files = await File.find();

  return NextResponse.json(
    {
      message: 'All files',
      body: files,
      status: 200,
    },
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
  );
}
