import EmailTemplate from '@/components/shared/EmailTemplate';
import { CreateEmailDto } from '@/dtos/email/email.dto';
import { Validate } from '@/lib/validateDto';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

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
    return new NextResponse(
      JSON.stringify({
        message: 'Email sending failed',
        error: error,
      }),
      { status: 500 },
    );
  }

  return new NextResponse(
    JSON.stringify({
      message: 'Email sent successfully',
      data: data,
    }),
    { status: 200 },
  );
}
