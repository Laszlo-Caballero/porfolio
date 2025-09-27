'use client';
import { CONST_PAGE } from '@/const/const';
import { usePathname, useRouter } from '@/i18n/request';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

export default function Nav() {
  const t = useTranslations('header');
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header className="bg-primary-black sticky top-0 z-10 mt-9 flex w-full items-center justify-center px-16">
      <main className="flex w-full max-w-[1440px] items-center justify-between">
        <div className="flex gap-x-1">
          <Image
            alt="logo"
            src={CONST_PAGE.image_header}
            width={36}
            height={36}
            className="rounded-full"
          />
          <span className="ml-3 text-2xl font-medium">{CONST_PAGE.name_header}</span>
        </div>
        <ul className="flex gap-x-6 py-6 text-xl font-medium">
          <li>{t('home')}</li>
          <li>{t('experience')}</li>
          <li>{t('projects')}</li>
          <li>{t('contact')}</li>
        </ul>

        <div className="flex gap-x-3">
          <button
            className="bg-primary-black-3 text-primary-gray rounded-4xl px-3 py-2.5 font-semibold"
            onClick={() => {
              router.push(pathname.replace('/en', '') as any, { locale: 'es' });
            }}
          >
            ES
          </button>
          <button
            className="bg-primary-black-3 text-primary-gray rounded-4xl px-3 py-2.5 font-semibold"
            onClick={() => {
              router.push(pathname as any, { locale: 'en' });
            }}
          >
            EN
          </button>
        </div>
      </main>
    </header>
  );
}
