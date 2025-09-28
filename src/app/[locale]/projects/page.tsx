import React from 'react';
import ProjectsPage from './MainSection';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('headers.projects');

  return {
    title: t('title'),
    description: t('description'),
  };
}
export default function Projects() {
  return <ProjectsPage />;
}
