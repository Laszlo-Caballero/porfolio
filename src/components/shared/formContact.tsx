'use client';
import PhoneIcon from '@/assets/PhoneIcon';
import { Typography } from '../ui/Typography/Typography';
import Input from '../ui/Input/Input';
import Textarea from '../ui/Textarea/Textarea';

export default function FormContact() {
  return (
    <div className="mt-20 mb-40 flex w-full max-w-[1440px] flex-col">
      <Typography
        variant="span"
        className="flex items-center gap-x-7 px-9 text-2xl font-medium text-white"
      >
        <PhoneIcon className="h-10 w-10" strokeWidth={2} />
        Contacto
      </Typography>

      <form className="mt-10 grid grid-cols-2 gap-10 px-9">
        <Input placeholder="Nombre" />
        <Input placeholder="Telefono" />
        <Input placeholder="Email" containerClassName="col-span-2" />

        <Textarea placeholder="Mensaje" className="col-span-2 min-h-[200px]" />

        <div className="col-span-2 flex justify-center">
          <button className="min-w-[516px] rounded-2xl bg-gradient-to-r from-[#0F172A] to-[#334F90] py-5 text-xl">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
