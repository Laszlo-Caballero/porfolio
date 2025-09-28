'use client';
import CardSkeleton from '@/components/ui/card-skeleton/CardSkeleton';
import Card from '@/components/ui/Card/Card';
import { ProyectResponsive, Responsive } from '@/Interfaces/types';
import { useQuery } from '@tanstack/react-query';
import { useTranslations } from 'next-intl';

export default function ProjectsPage() {
  const t = useTranslations('projects');
  const { data, isLoading } = useQuery<Responsive<ProyectResponsive[]>>({
    queryKey: ['proyects'],
    queryFn: async () => {
      const res = await fetch(`/api/projects`, { cache: 'no-store' });
      return res.json();
    },
  });

  return (
    <main className="mb-12 flex h-full w-full flex-1 flex-col">
      <div className="w-full">
        <h1 className="text-4xl font-semibold text-white">{t('title')}</h1>
        <p className="mt-2 text-lg text-gray-400">{t('description')}</p>
      </div>

      <section className="mt-4 grid grid-cols-4 gap-4">
        {isLoading &&
          Array.from({ length: 6 }).map((_, i) => <CardSkeleton key={i} className="row-span-2" />)}
        {!isLoading &&
          data?.body.map((proyect) => (
            <Card
              {...proyect}
              key={proyect._id}
              className="col-span-1 row-span-1"
              outStanding={false}
            />
          ))}
      </section>
    </main>
  );
}
