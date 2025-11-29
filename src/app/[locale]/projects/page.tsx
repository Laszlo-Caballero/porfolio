import Card from '@/components/ui/Card/Card';
import { GetProyects } from '@/Services/GetProyects';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('headers.projects');

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function ProjectsPage() {
  const t = await getTranslations('projects');
  const data = await GetProyects();

  return (
    <main className="p-md:px-16 mb-12 flex h-full w-full flex-1 flex-col px-4">
      <div className="w-full">
        <h1 className="text-4xl font-semibold text-white">{t('title')}</h1>
        <p className="mt-2 text-lg text-gray-400">{t('description')}</p>
      </div>

      <section className="p-lg:grid-cols-2 p-xl:grid-cols-4 mt-4 grid gap-4">
        {data.body.map((proyect) => (
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
