import { Link } from '@/i18n/request';
import { getTranslations } from 'next-intl/server';
import React from 'react';
import { IoWarningOutline } from 'react-icons/io5';

export default async function NotFoundPage() {
  const t = await getTranslations('notFound');

  return (
    <main className="flex h-full flex-1 flex-col items-center justify-center">
      <section className="bg-primary-black-5 flex min-h-[300px] min-w-[920px] flex-col items-center justify-center p-6">
        <span className="flex items-center gap-x-1">
          <IoWarningOutline className="text-primary-red" />
          Error 404
        </span>
        <h1 className="mt-4 text-3xl font-medium">{t('title')}</h1>
        <p className="text-primary-gray text-center">{t('description')}</p>

        <div className="mt-6">
          <Link href="/" className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:underline">
            {t('home')}
          </Link>
        </div>
      </section>
    </main>
  );
}
