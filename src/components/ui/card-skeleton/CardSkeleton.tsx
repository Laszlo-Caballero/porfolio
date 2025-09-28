import { cn } from '@/utils/cn';

interface CardSkeletonProps {
  outStanding?: boolean;
  className?: string;
}

export default function CardSkeleton({ outStanding, className }: CardSkeletonProps) {
  return (
    <div
      className={cn(
        'bg-primary-black-5 border-primary-gray-2 flex h-[360px] w-full animate-pulse flex-col rounded-2xl border pb-4',
        className,
      )}
    >
      {/* Imagen */}
      <div className={cn('bg-primary-black-3 h-[200px] w-full rounded-t-2xl')} />

      <div
        className={cn('mt-2 flex w-full flex-col gap-1 px-[18px]', outStanding && 'mt-4 gap-y-2')}
      >
        {/* Título */}
        <div className={cn('bg-primary-black-3 h-5 w-2/3 rounded', outStanding && 'h-7 w-1/2')} />
        {/* Descripción */}
        <div className="bg-primary-black-3 h-4 w-full rounded" />
        <div className="bg-primary-black-3 h-4 w-5/6 rounded" />

        {/* Tecnologías */}
        <div className="mt-2 flex h-full flex-wrap gap-x-2 gap-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <span key={i} className="bg-primary-black-3 h-6 min-w-[59px] rounded-full" />
          ))}
        </div>
      </div>
    </div>
  );
}
