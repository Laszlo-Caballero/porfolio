import FormContact from '@/components/shared/formContact';
import { getTranslations } from 'next-intl/server';

export default async function ContactPage() {
  const t = await getTranslations('contact');

  return (
    <main className="mt-12 flex h-full w-full flex-1 flex-col">
      <header className="bg-primary-black-5 border-primary-gray-2 flex w-full flex-col rounded-xl border p-[21px]">
        <h1 className="text-2xl font-semibold">{t('title')}</h1>
        <p className="text-primary-gray mt-1">{t('description')}</p>
      </header>
      <FormContact
        className={{
          container: 'my-0 px-0',
          title: 'hidden',
        }}
      />
    </main>
  );
}
