'use client';
import PhoneIcon from '@/assets/PhoneIcon';
import { Typography } from '../ui/Typography/Typography';
import Input from '../ui/Input/Input';
import Textarea from '../ui/Textarea/Textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { EmailSchema, EmailSchemaType } from '@/schemas/email/email.schema';
import { useMutation } from '@/hooks/useMutation';
import axios from 'axios';
import { toast } from 'sonner';

export default function FormContact() {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(EmailSchema),
  });

  const { mutate } = useMutation<EmailSchemaType>({
    mutationFn: async (data) => {
      const res = await axios.post('/api/email', data);
      return res.data;
    },
  });

  const handelSubmit = (data: EmailSchemaType) => {
    toast.promise(mutate(data), {
      success: 'Email enviado con éxito gracias por enviar :)',
      error: 'Error al enviar el email',
      loading: 'Enviando email...',
    });
  };

  return (
    <div className="mt-12 mb-40 flex w-full max-w-[1440px] flex-col">
      <Typography
        variant="span"
        className="flex items-center gap-x-7 px-9 pb-4 text-2xl font-medium text-white"
      >
        <PhoneIcon className="h-10 w-10" strokeWidth={2} />
        Contacto
      </Typography>

      <form className="mt-10 grid grid-cols-2 gap-10 px-9" onSubmit={handleSubmit(handelSubmit)}>
        <Input placeholder="Nombre" {...register('name')} />
        <Input placeholder="Telefono" {...register('phone')} />
        <Input placeholder="Email" containerClassName="col-span-2" {...register('email')} />

        <Textarea
          placeholder="Mensaje"
          className="col-span-2 min-h-[200px]"
          {...register('message')}
        />

        <div className="col-span-2 flex justify-center">
          <button className="min-w-[516px] rounded-2xl bg-gradient-to-r from-[#0F172A] to-[#334F90] py-5 text-xl">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
