import { DownloadIcon } from '@/assets/DownloadIcon';
import { GithubIcon } from '@/assets/GithubIcon';
import { LinkedlnIcon } from '@/assets/LinkedlnIcon';
import { TelegramIcon } from '@/assets/TelegramIcon';
import ButtonLink from '@/components/ui/ButtonLink/ButtonLink';
import { Typography } from '@/components/ui/Typography/Typography';
import { CONST_PAGE } from '@/const/const';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import React from 'react';

export default async function Hero() {
  const t = await getTranslations('hero');

  return (
    <div className="flex w-full gap-x-5 px-9 pt-8">
      <Image
        src="/photo.png"
        alt="Picture of the author"
        className="mt-5 h-20 w-20"
        width={80}
        height={80}
      />
      <div className="flex flex-col gap-y-2 py-5">
        <Typography variant="h1" className="p-xl:text-2xl p-lg:text-lg font-semibold">
          {CONST_PAGE.name} - {t('profession')}
        </Typography>
        <Typography
          variant="p"
          className="text-primary-gray p-xl:text-xl p-lg:text-base max-w-[1008px] font-medium"
        >
          {t('description')}
        </Typography>
        <div className="flex h-full flex-wrap items-center gap-4">
          <ButtonLink href="https://github.com/Laszlo-Caballero">
            <GithubIcon className="p-xl:size-6 p-lg:size-4" />
            Github
          </ButtonLink>
          <ButtonLink href="https://www.linkedin.com/in/laszlo-caballero-sipiran/">
            <LinkedlnIcon className="p-xl:size-6 p-lg:size-4" />
            Linkedln
          </ButtonLink>
          <ButtonLink href="https://t.me/laszlocaballero">
            <TelegramIcon className="p-xl:size-6 p-lg:size-4" />
            Telegram
          </ButtonLink>
          <ButtonLink href="/cv_laszlo.pdf" className="bg-[#4F7CFF] text-white">
            <DownloadIcon className="p-xl:size-6 p-lg:size-4" />
            Descargar CV
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
