import { ProyectResponsive, Tecnology } from '@/Interfaces/types';
import Image from 'next/image';
import { Typography } from '../Typography/Typography';
import Link from 'next/link';

export default function Card({
  tecnologies,
  title,
  slug,
  urlImage,
  description,
}: ProyectResponsive) {
  return (
    <Link
      className="bg-primary-black-2 flex h-full w-full flex-col rounded-2xl pb-4"
      href={slug}
      target="_blank"
    >
      <Image
        src={urlImage.url}
        alt="photo proyect"
        className="h-[125px] w-full rounded-t-2xl object-cover object-top"
        width={500}
        height={500}
      />
      <div className="flex w-full flex-col px-[18px]">
        <Typography variant="p" className="mt-2 text-lg font-medium text-white">
          {title}
        </Typography>
        <Typography variant="p" className="mt-2 text-sm font-medium text-white">
          {description}
        </Typography>
        <div className="mt-4 flex h-full flex-wrap gap-x-2 gap-y-4">
          {tecnologies?.map((tecnology, i) => (
            <span
              className="flex items-center justify-center gap-x-2 rounded-full bg-sky-950 px-4 py-2"
              key={i}
            >
              {tecnology}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
