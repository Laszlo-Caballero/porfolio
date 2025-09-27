import { ProyectResponsive } from '@/Interfaces/types';
import Image from 'next/image';
import { Typography } from '../Typography/Typography';
import Link from 'next/link';
import { cn } from '@/utils/cn';

interface CardProps extends ProyectResponsive {
  className?: string;
}

export default function Card({
  tecnologies,
  title,
  slug,
  urlImage,
  description,
  outStanding,
  className,
}: CardProps) {
  return (
    <Link
      className={cn(
        'bg-primary-black-2 flex h-full w-full flex-col rounded-2xl pb-4 last:col-span-2',
        outStanding && 'col-span-3 row-span-2 row-start-1',
        className,
      )}
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
