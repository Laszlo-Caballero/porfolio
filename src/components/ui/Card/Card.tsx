import { ProyectResponsive } from '@/Interfaces/types';
import Image from 'next/image';
import { Typography } from '../Typography/Typography';
import { cn } from '@/utils/cn';
import { Link } from '@/i18n/request';

interface CardProps extends ProyectResponsive {
  className?: string;
}

export default function Card({
  tecnologies,
  title,
  slug,
  urlImage,
  outStanding,
  className,
  detail,
}: CardProps) {
  return (
    <Link
      className={cn(
        'bg-primary-black-5 border-primary-gray-2 col-span-2 flex h-full w-full flex-col rounded-2xl border pb-4',
        outStanding && 'p-xl:col-span-4 col-span-2 row-span-2 row-start-1',
        className,
      )}
      href={{
        pathname: '/projects/[slug]',
        params: { slug },
      }}
    >
      <Image
        src={urlImage.url}
        alt="photo proyect"
        className={cn(
          'p-lg:max-h-[150px] p-xl:max-h-[200px] max-h-[300px] w-full rounded-t-2xl object-cover',
          outStanding && 'p-lg:max-h-[300px] p-xl:max-h-[500px]',
        )}
        width={500}
        height={500}
      />
      <div
        className={cn('mt-2 flex w-full flex-col gap-1 px-[18px]', outStanding && 'mt-4 gap-y-2')}
      >
        <Typography
          variant="p"
          className={cn(
            'p-xl:text-base p-lg:text-sm font-semibold text-white',
            outStanding && 'p-lg:text-base p-xl:text-2xl',
          )}
        >
          {title}
        </Typography>
        <Typography variant="p" className="p-xl:text-xs p-lg:text-sm font-medium text-white">
          {detail}
        </Typography>
        <div className="mt-2 flex h-full flex-wrap gap-x-2 gap-y-4">
          {tecnologies?.map((tecnology, i) => (
            <span
              className="bg-primary-black-3 p-xl:text-base p-lg:text-xs flex min-w-[59px] items-center justify-center gap-x-2 rounded-full px-2.5 py-1 font-semibold"
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
