import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdSlot from '@/components/AdSlot';

export const metadata: Metadata = {
  metadataBase: new URL('https://policyglobal.vercel.app'),
  title: {
    default: 'PolicyGlobal — Global Insurance & Finance News',
    template: '%s | PolicyGlobal',
  },
  description:
    'PolicyGlobal delivers verified, trusted global insurance and finance news — covering auto insurance, healthcare, life insurance, banking, fintech, mortgage, and economic regulation across the US, India, UK, Australia, and more.',
  keywords: [
    'insurance news', 'finance news', 'global insurance', 'healthcare insurance',
    'auto insurance', 'life insurance', 'banking regulation', 'fintech news',
    'mortgage rates', 'economic policy', 'insurance regulation',
  ],
  authors: [{ name: 'PolicyGlobal Editorial Desk' }],
  creator: 'PolicyGlobal',
  publisher: 'PolicyGlobal',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://policyglobal.vercel.app',
    siteName: 'PolicyGlobal',
    title: 'PolicyGlobal — Global Insurance & Finance News',
    description:
      'Verified global insurance and finance news — Bloomberg-quality coverage for the insurance-savvy reader.',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'PolicyGlobal — Global Insurance & Finance News',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PolicyGlobal — Global Insurance & Finance News',
    description:
      'Verified global insurance and finance news — daily briefings on insurance, banking, fintech, and markets.',
    images: ['/og-default.png'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="flex flex-col min-h-screen bg-gray-100">
        {/* Top Banner Ad */}
        <div className="w-full">
          <AdSlot variant="banner" className="h-14 mx-auto max-w-7xl my-1 px-4" />
        </div>

        <Header />

        <main className="flex-1 animate-fade-in">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
