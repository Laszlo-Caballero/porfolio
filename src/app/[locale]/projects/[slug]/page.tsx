import { GithubIcon } from '@/assets/GithubIcon';
import ButtonLink from '@/components/ui/ButtonLink/ButtonLink';
import { Typography } from '@/components/ui/Typography/Typography';
import { Link, redirect } from '@/i18n/request';
import { GetProyectCache } from '@/Services/GetProyects';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import React from 'react';
import { TbAlertCircle } from 'react-icons/tb';
import { FaRegNewspaper } from 'react-icons/fa6';
import { FiTarget } from 'react-icons/fi';
import { FiCheckCircle } from 'react-icons/fi';
import { Metadata } from 'next';
import ArquitectureCard from '@/components/ui/Arquitecture/Arquitecture';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;

  const project = await GetProyectCache(slug);

  return {
    title: project.body ? `${project.body.title} | Projects` : 'Project Not Found',
    description: project.body
      ? project.body.description
      : 'The project you are looking for does not exist or has been removed.',
    category: 'projects',
    creator: 'Laszlo Caballero',
    keywords: project.body ? project.body.keywords : ['portfolio', 'projects', 'web developer'],
    openGraph: {
      type: 'article',
      authors: ['Laszlo Caballero'],
      title: project.body ? `${project.body.title} | Projects` : 'Project Not Found',
      description: project.body
        ? project.body.description
        : 'The project you are looking for does not exist or has been removed.',
      images: project.body ? [project.body.urlImage.url] : [],
      locale,
      url: `https://laszlocaballero.vercel.app/projects/${slug}`,
    },
    metadataBase: new URL('https://laszlocaballero.vercel.app'),
    twitter: {
      title: project.body ? `${project.body.title} | Projects` : 'Project Not Found',
      description: project.body
        ? project.body.description
        : 'The project you are looking for does not exist or has been removed.',
      card: 'summary_large_image',
      images: project.body ? [project.body.urlImage.url] : [],
      creator: '@laszlocaballero',
    },
  };
}

export default async function Details({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;

  const data = await GetProyectCache(slug);
  const t = await getTranslations('projects');

  if (data.status === 404) {
    return redirect({
      href: '/404',
      locale,
    });
  }

  const {
    title,
    description,
    urlImage,
    githubUrl,
    githubBackendUrl,
    images,
    details,
    tecnologies,
    resume,
    objectives,
    learnings,
    arquitecture,
  } = data.body!;

  return (
    <main className="p-md:px-16 mb-12 flex h-full w-full flex-col gap-y-3 px-4">
      <span className="font-medium text-[#7E8A97]">
        {t('title')} / {title}
      </span>

      <section className="p-md:flex-row flex flex-col gap-4">
        <Image
          src={urlImage.url}
          alt={urlImage.alt}
          width={120}
          height={120}
          className="border-primary-gray-2 p-md:size-[120px] w-full rounded-3xl border object-cover"
        />

        <div className="flex flex-col">
          <Typography variant="h1" className="text-3xl font-semibold">
            {title}
          </Typography>
          <Typography variant="p" className="mt-2 text-lg text-gray-400">
            {description}
          </Typography>
          <ButtonLink href={githubUrl} className="p-md:max-w-max mt-1">
            <GithubIcon />
            Github
          </ButtonLink>
          {githubBackendUrl && (
            <ButtonLink href={githubBackendUrl} className="p-md:max-w-max mt-1">
              <GithubIcon />
              Github Backend
            </ButtonLink>
          )}
        </div>
      </section>
      <section className="p-lg:flex-row flex flex-col-reverse gap-4">
        <article className="p-lg:w-[70%] mt-2 flex w-full flex-col gap-y-4">
          <div className="grid grid-cols-2 gap-4">
            {images.map((image) => (
              <Image
                key={image._id}
                src={image.url}
                alt={image.alt}
                width={624}
                height={280}
                className="w-full rounded-xl first:col-span-2 last:col-span-2"
              />
            ))}
          </div>

          <div className="bg-primary-black-5 border-primary-gray-2 rounded-2xl border p-4">
            <span className="flex items-center gap-1 font-semibold">
              <FaRegNewspaper />
              <p>{t('resume')}</p>
            </span>

            <p className="mt-1 font-medium text-gray-400">{resume}</p>
          </div>
          <div className="bg-primary-black-5 border-primary-gray-2 rounded-2xl border p-4">
            <span className="flex items-center gap-1 font-semibold">
              <FiTarget />
              <p>{t('objective')}</p>
            </span>

            <ul>
              {objectives.map((obj) => (
                <li key={obj} className="mt-1 flex items-center gap-x-1 font-medium text-gray-400">
                  <FiCheckCircle />
                  {obj}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-primary-black-5 border-primary-gray-2 rounded-2xl border p-4">
            <span className="flex items-center gap-1 font-semibold">
              <FiTarget />
              <p>{t('learned')}</p>
            </span>

            <ul>
              {learnings.map((obj) => (
                <li key={obj} className="mt-1 flex items-center gap-x-1 font-medium text-gray-400">
                  <FiCheckCircle />
                  {obj}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-primary-black-5 border-primary-gray-2 p-sm:flex-row p-sm:gap-y-0 flex flex-col items-center gap-x-12 gap-y-2 rounded-2xl border p-4">
            <p className="font-medium">{t('interest')}</p>
            <Link
              href="/contact"
              className="flex items-center justify-center rounded-full bg-[#7A9EFF] px-4 py-2 text-sm font-semibold text-white"
            >
              {t('contact')}
            </Link>
          </div>
          <ArquitectureCard data={arquitecture} />
        </article>
        <article className="p-lg:w-[30%] p-lg:sticky top-20 flex h-full w-full flex-col gap-y-4">
          <div className="bg-primary-black-5 border-primary-gray-2 rounded-2xl border p-4">
            <span className="flex items-center gap-1 font-semibold">
              <TbAlertCircle />
              <p>{t('details')}</p>
            </span>

            <div className="mt-[10px] flex flex-col gap-y-2">
              <Typography
                variant="p"
                className="flex justify-between rounded-xl bg-[#0E1724] p-3 text-sm text-gray-400"
              >
                {t('role')} <span className="font-medium text-white">{details.role}</span>
              </Typography>
              <Typography
                variant="p"
                className="flex justify-between rounded-xl bg-[#0E1724] p-3 text-sm text-gray-400"
              >
                {t('time')} <span className="font-medium text-white">{details.time}</span>
              </Typography>
              <Typography
                variant="p"
                className="flex justify-between rounded-xl bg-[#0E1724] p-3 text-sm text-gray-400"
              >
                {t('status')} <span className="font-medium text-white">{details.status}</span>
              </Typography>
              {details.team && (
                <Typography
                  variant="p"
                  className="flex justify-between rounded-xl bg-[#0E1724] p-3 text-sm text-gray-400"
                >
                  {t('team')} <span className="font-medium text-white">{details.team}</span>
                </Typography>
              )}
            </div>
          </div>
          <div className="bg-primary-black-5 border-primary-gray-2 rounded-2xl border p-4">
            <span className="flex items-center gap-1 font-semibold">
              <TbAlertCircle />
              <p>{t('stack')}</p>
            </span>

            <div className="mt-[10px] flex flex-wrap gap-2">
              {tecnologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-primary-black-4 rounded-full px-3 py-1 text-sm text-gray-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
