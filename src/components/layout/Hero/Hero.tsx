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
        <Typography variant="h1" className="text-2xl font-semibold">
          {CONST_PAGE.name} - {t('profession')}
        </Typography>
        <Typography variant="p" className="text-primary-gray max-w-[1008px] text-xl font-medium">
          {t('description')}
        </Typography>
        <div className="flex h-full items-center gap-x-4">
          <ButtonLink href="a">
            <GithubIcon />
            Github
          </ButtonLink>
          <ButtonLink href="a">
            <LinkedlnIcon />
            Linkedln
          </ButtonLink>
          <ButtonLink href="a">
            <TelegramIcon />
            Telegram
          </ButtonLink>
          <ButtonLink href="a" className="bg-[#4F7CFF] text-white">
            <DownloadIcon />
            Descargar CV
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
