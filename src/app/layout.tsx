import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rodrigo-cv.vercel.app'),
  title: 'Rodrigo López · CV Web',
  description:
    'CV web interactivo de Rodrigo López. Proyecto diseñado con Next.js, Tailwind y Framer Motion para destacar experiencia y potencial profesional.',
  openGraph: {
    title: 'Rodrigo López · CV Web',
    description:
      'CV web interactivo diseñado para reclutadores y empresas: visual, rápido y enfocado en resultados.',
    url: 'https://rodrigo-cv.vercel.app',
    siteName: 'Rodrigo CV',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rodrigo López · CV Web',
    description:
      'CV web interactivo diseñado para reclutadores y empresas: visual, rápido y enfocado en resultados.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
