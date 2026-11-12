// app/layout.tsx
import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import { getLatestNews, getAllDates, getActiveCategories, getActiveCountries } from '@/lib/news';
import { countryFlag } from '@/lib/constants';

// Public publisher ID (also published in /ads.txt). Env var overrides it.
const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT || 'ca-pub-7617760862667547';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.policyrix.com'),
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
  authors: [{ name: 'PolicyRix Team' }],
  creator: 'PolicyRix',
  publisher: 'PolicyRix',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.policyrix.com',
    siteName: 'PolicyRix',
    title: 'PolicyRix — Global Insurance & Finance News',
    description:
      'Verified global insurance and finance news — daily briefings, plain-English explainers and calculators for insurance and finance readers.',
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
  alternates: { types: { 'application/rss+xml': '/feed.xml' } },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const latest = getLatestNews(10);
  const tickerItems = latest.map((a) => `${countryFlag(a.country)} ${a.title.length > 95 ? a.title.slice(0, a.title.lastIndexOf(' ', 95)) + '…' : a.title}`);
  const latestDate = getAllDates()[0] ?? '';
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
            // Consent Mode v2: granted by default everywhere, denied by default only in the
            // EEA, UK and Switzerland where opt-in is legally required. (Denied-for-everyone
            // hid almost all real visits from GA4 after the Oct 12 consent change.)
            gtag('consent', 'default', {
              analytics_storage: 'granted', ad_storage: 'granted',
              ad_user_data: 'granted', ad_personalization: 'granted'
            });
            gtag('consent', 'default', {
              analytics_storage: 'denied', ad_storage: 'denied',
              ad_user_data: 'denied', ad_personalization: 'denied', wait_for_update: 500,
              region: ['AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IE','IT','LV','LT','LU','MT','NL','PL','PT','RO','SK','SI','ES','SE','IS','LI','NO','GB','CH']
            });
            try {
              if (localStorage.getItem('pr-consent') === 'denied') {
                gtag('consent', 'update', {
                  analytics_storage: 'denied', ad_storage: 'denied',
                  ad_user_data: 'denied', ad_personalization: 'denied'
                });
              } else if (localStorage.getItem('pr-consent') === 'granted') {
                gtag('consent', 'update', {
                  analytics_storage: 'granted', ad_storage: 'granted',
                  ad_user_data: 'granted', ad_personalization: 'granted'
                });
              }
            } catch (e) {}
            gtag('js', new Date());
            gtag('config', 'G-LK521ZYKJE');
          `}
        </Script>

        {/* AdSense: plain <script> in the server-rendered <head> so Google's crawler
            can verify the site (next/script injects it client-side, which it can miss). */}
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
          crossOrigin="anonymous"
        />
      </head>
      <body className="flex flex-col min-h-screen bg-gray-100">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: 'PolicyRix',
                url: 'https://www.policyrix.com',
              },
              {
                '@context': 'https://schema.org',
                '@type': 'NewsMediaOrganization',
                name: 'PolicyRix',
                url: 'https://www.policyrix.com',
                logo: 'https://www.policyrix.com/og-default.png',
                masthead: 'https://www.policyrix.com/masthead',
                ethicsPolicy: 'https://www.policyrix.com/editorial-policy',
                email: 'editorial@policyrix.com',
              },
            ]),
          }}
        />
        <Header tickerItems={tickerItems} latestDate={latestDate} categories={getActiveCategories()} countries={getActiveCountries()} />
        <main className="flex-1 animate-fade-in">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}