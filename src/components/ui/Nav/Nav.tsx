'use client';
import { CONST_PAGE } from '@/const/const';
import { Link, usePathname, useRouter } from '@/i18n/request';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

export default function Nav() {
  const t = useTranslations('header');
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header className="bg-primary-black p-md:px-16 p-md:mt-9 sticky top-0 z-10 mt-2 flex w-full items-center justify-center px-4">
      <main className="p-screen flex w-full items-center justify-between">
        <div className="flex items-center gap-x-1">
          <Image
            alt="logo"
            src={CONST_PAGE.image_header}
            width={36}
            height={36}
            className="rounded-full"
          />
          <span className="p-md:text-2xl ml-3 font-medium">{CONST_PAGE.name_header}</span>
        </div>
        <ul className="p-md:text-xl flex gap-x-6 py-6 text-xs font-medium">
          <li className="cursor-pointer">
            <Link href="/">{t('home')}</Link>
          </li>
          {/* <li className="cursor-pointer">{t('experience')}</li> */}
          <li className="cursor-pointer">
            <Link href="/projects">{t('projects')}</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/contact">{t('contact')}</Link>
          </li>
        </ul>

        <div className="flex gap-x-3">
          <button
            className="bg-primary-black-3 text-primary-gray p-md:text-base rounded-4xl px-3 py-2.5 text-xs font-semibold"
            onClick={() => {
              router.push(pathname.replace('/en', '') as any, { locale: 'es' });
            }}
          >
            ES
          </button>
          <button
            className="bg-primary-black-3 text-primary-gray p-md:text-base rounded-4xl px-3 py-2.5 text-xs font-semibold"
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
