import EmailTemplate from '@/components/shared/EmailTemplate';
import { CreateEmailDto } from '@/dtos/email/email.dto';
import connectMongoDB from '@/lib/mongo';
import { Validate } from '@/lib/validateDto';
import { Email } from '@/schemas/email/email.mongoose';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

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

export async function POST(req: NextRequest) {
  const body: CreateEmailDto = await req.json();
  const errors = await Validate(CreateEmailDto, body);

  if (errors.length > 0) {
    return new NextResponse(
      JSON.stringify({
        message: 'Validation failed',
        errors: errors,
        status: 400,
      }),
      { status: 400 },
    );
  }

  const { data, error } = await resend.emails.send({
    from: 'noreply@resend.dev',
    to: process.env.PERSONAL_EMAIL || '',
    subject: `Nueva Oferta de trabajo de ${body.name} - ${body.phone || 'Sin teléfono'}`,
    react: EmailTemplate({
      name: body.name,
      email: body.email,
      phone: body.phone,
      message: body.message,
    }),
  });

  if (error) {
    return NextResponse.json(
      {
        message: 'Email sending failed',
        error: error,
      },
      {
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      },
    );
  }

  await connectMongoDB();
  const newEmail = await Email.create({
    ...body,
  });

  const savedEmail = await newEmail.save();

  return NextResponse.json(
    {
      message: 'Email sent successfully',
      data: {
        emailResponse: data,
        savedEmail: savedEmail,
      },
    },
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
  );
}
