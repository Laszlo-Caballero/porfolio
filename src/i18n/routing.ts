import { defineRouting } from 'next-intl/routing';
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
    '/404': {
      en: '/404',
      es: '/404',
    },
  },
  defaultLocale: 'es',
  localePrefix: 'as-needed',
});

type Mutable<T> = {
  -readonly [K in keyof T]: Mutable<T[K]>;
};

export type RoutingPathNames = Mutable<keyof typeof routing.pathnames>;
