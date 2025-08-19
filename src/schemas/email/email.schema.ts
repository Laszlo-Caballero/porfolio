import { z } from 'zod';

export const EmailSchema = z.object({
  name: z
    .string({
      error: 'Name is required',
    })
    .min(1, 'Name is required'),
  phone: z.string().min(1, 'Phone is required'),
  email: z.email({
    error: 'Email is required',
  }),
  message: z
    .string({
      error: 'Message is required',
    })
    .min(1, 'Message is required'),
});

export type EmailSchemaType = z.infer<typeof EmailSchema>;
