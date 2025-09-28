'use client';
import { Typography } from '../ui/Typography/Typography';
import Input from '../ui/Input/Input';
import Textarea from '../ui/Textarea/Textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { EmailSchema, EmailSchemaType } from '@/schemas/email/email.schema';
import { useMutation } from '@/hooks/useMutation';
import axios from 'axios';
import { toast } from 'sonner';
import { FiPhone } from 'react-icons/fi';
import Image from 'next/image';
import { cn } from '@/utils/cn';

interface FormContactProps {
  className?: {
    container?: string;
    title?: string;
  };
}

export default function FormContact({ className }: FormContactProps) {
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
    <div className={cn('mt-12 mb-40 flex w-full flex-col px-9', className?.container)}>
      <Typography
        variant="span"
        className={cn('flex w-full items-center gap-x-2 text-2xl font-semibold', className?.title)}
      >
        <FiPhone />
        Contacto
      </Typography>
      <div className="mt-10 flex gap-x-5">
        <form
          className="bg-primary-black-3 border-primary-gray-2 grid grid-cols-2 gap-x-6 gap-y-6 rounded-xl border p-[17px]"
          onSubmit={handleSubmit(handelSubmit)}
        >
          <div className="col-span-2 flex flex-col gap-y-2">
            <Typography variant="p" className="text-xl font-semibold text-white">
              ¿Tienes un proyecto en mente? ¡Hablemos!
            </Typography>
            <Typography variant="p" className="text-primary-gray font-medium">
              Estoy disponible para trabajar en nuevos proyectos y colaboraciones. No dudes en
              contactarme para discutir tus ideas y cómo puedo ayudarte a llevarlas a cabo.
            </Typography>
          </div>

          <Input placeholder="Nombre" {...register('name')} />
          <Input placeholder="Telefono" {...register('phone')} />
          <Input placeholder="Email" containerClassName="col-span-2" {...register('email')} />

          <Textarea
            placeholder="Mensaje"
            className="col-span-2 min-h-[200px]"
            {...register('message')}
          />

          <div className="col-span-2 flex">
            <button className="min-w-full rounded-2xl bg-gradient-to-r from-[#0F172A] to-[#334F90] py-3 text-xl">
              Enviar
            </button>
          </div>
        </form>

        <Image
          src="https://res.cloudinary.com/dl0wif5vm/image/upload/v1759015859/bmtnmectwxxihxinmeil.webp"
          alt="Imagen de Contacto"
          width={500}
          height={500}
          className="rounded-xl"
        />
      </div>
    </div>
  );
}
