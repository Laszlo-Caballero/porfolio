import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/ui/Nav/Nav';
import '@fontsource/montserrat';
import { Toaster } from 'sonner';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { LayoutQuery } from '@/components/shared/LayoutQuery';
import { getTranslations } from 'next-intl/server';
import { Analytics } from '@vercel/analytics/next';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('headers.home');
  return {
    title: {
      default: t('title'),
      template: `%s | ${t('title')}`,
    },
    description: t('description'),
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <NextIntlClientProvider>
        <LayoutQuery>
          <body
            className={`bg-primary-black flex min-h-screen w-full flex-col items-center justify-center text-white antialiased`}
          >
            <Nav />
            <main className="flex h-full w-full max-w-[1440px] flex-1 flex-col">{children}</main>
            <Toaster position="top-left" />
          </body>
          <Analytics />
        </LayoutQuery>
      </NextIntlClientProvider>
    </html>
  );
}
