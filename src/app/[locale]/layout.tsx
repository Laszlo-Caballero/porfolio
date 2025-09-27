import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/ui/Nav/Nav';
import '@fontsource/montserrat';
import { Toaster } from 'sonner';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Laszlo Caballero',
  description: 'Portfolio of Laszlo Caballero',
};

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
        <body
          className={`bg-primary-black flex min-h-screen w-full flex-col items-center justify-center text-white antialiased`}
        >
          <Nav />
          <main className="flex max-w-[1440px] flex-col">{children}</main>
          <Toaster position="top-left" />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
