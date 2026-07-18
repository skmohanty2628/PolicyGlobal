// app/layout.tsx
import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://policyrix.com'),
  title: {
    default: 'PolicyRix — Global Insurance & Finance News',
    template: '%s | PolicyRix',
  },
  description:
    'PolicyRix delivers verified, trusted global insurance and finance news — covering auto insurance, healthcare, life insurance, banking, fintech, mortgage, and economic regulation across the US, India, UK, Australia, and more.',
  keywords: [
    'insurance news',
    'finance news',
    'global insurance',
    'healthcare insurance',
    'auto insurance',
    'life insurance',
    'banking regulation',
    'fintech news',
    'mortgage rates',
    'economic policy',
    'insurance regulation',
  ],
  authors: [{ name: 'PolicyRix Editorial Desk' }],
  creator: 'PolicyRix',
  publisher: 'PolicyRix',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://policyrix.com',
    siteName: 'PolicyRix',
    title: 'PolicyRix — Global Insurance & Finance News',
    description:
      'Verified global insurance and finance news — Bloomberg-quality coverage for the insurance-savvy reader.',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'PolicyRix — Global Insurance & Finance News',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PolicyRix — Global Insurance & Finance News',
    description:
      'Verified global insurance and finance news — daily briefings on insurance, banking, fintech, and markets.',
    images: ['/og-default.png'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* ✅ GA4 Tracking Code */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LK521ZYKJE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LK521ZYKJE');
          `}
        </Script>

        {/* ✅ AdSense verification/ad script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7617760862667547"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <main className="flex-1 animate-fade-in">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}