import FormContact from '@/components/shared/formContact';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('headers.contact');
  return {
    title: t('title'),
    description: t('description'),
  };
}
export default async function ContactPage() {
  const t = await getTranslations('contact');

  return (
    <main className="p-md:px-16 mt-12 flex h-full w-full flex-1 flex-col px-4">
      <header className="bg-primary-black-5 border-primary-gray-2 flex w-full flex-col rounded-xl border p-[21px]">
        <h1 className="text-2xl font-semibold">{t('title')}</h1>
        <p className="text-primary-gray mt-1">{t('description')}</p>
      </header>
      <FormContact
        className={{
          container: 'p-md:px-0 my-0',
          title: 'hidden',
        }}
      />
    </main>
  );
}
