import { defineRouting } from 'next-intl/routing';
import { keyof } from 'zod';

export const routing = defineRouting({
  locales: ['en', 'es'],
  pathnames: {
    '/': {
      en: '/home',
      es: '/',
    },
    '/projects': {
      en: '/projects',
      es: '/proyectos',
    },
    '/projects/[slug]': {
      en: '/projects/[slug]',
      es: '/proyectos/[slug]',
    },
  },
  defaultLocale: 'es',
  localePrefix: 'as-needed',
});

type Mutable<T> = {
  -readonly [K in keyof T]: Mutable<T[K]>;
};

export type RoutingPathNames = Mutable<keyof typeof routing.pathnames>;
