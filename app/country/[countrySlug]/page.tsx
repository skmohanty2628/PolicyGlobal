import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getNewsByCountry } from '@/lib/news';
import { COUNTRIES, slugToLabel } from '@/lib/constants';
import NewsCard from '@/components/NewsCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import AdSlot from '@/components/AdSlot';
import Link from 'next/link';

export async function generateStaticParams() {
  return COUNTRIES.map((c) => ({ countrySlug: c.slug }));
}

export async function generateMetadata({ params }: { params: { countrySlug: string } }): Promise<Metadata> {
  const label = COUNTRIES.find((c) => c.slug === params.countrySlug)?.label ?? slugToLabel(params.countrySlug);
  return {
    title: `${label} Insurance & Finance News`,
    description: `Latest verified insurance and finance news from ${label} — PolicyRix global coverage.`,
  };
}

export default function CountryPage({ params }: { params: { countrySlug: string } }) {
  const country = COUNTRIES.find((c) => c.slug === params.countrySlug);
  const label = country?.label ?? slugToLabel(params.countrySlug);
  const articles = getNewsByCountry(params.countrySlug);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs crumbs={[{ label: 'Countries' }, { label }]} />

      <div className="mt-6 mb-8 rounded-2xl p-8 text-white"
        style={{ background: 'linear-gradient(135deg, #0A1628 0%, #162444 100%)', border: '1px solid rgba(201,168,76,0.2)' }}>
        <p className="text-gold-400 font-mono text-xs uppercase tracking-widest mb-2">Country Coverage</p>
        <h1 className="font-serif font-bold text-3xl md:text-4xl mb-2">{label}</h1>
        <p className="text-slate-400 text-sm">{articles.length} verified stories from {label}</p>
      </div>

      <AdSlot variant="banner" className="h-16 mb-8" />

      {articles.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-slate-400 text-lg mb-4">No stories from {label} yet.</p>
          <Link href="/" className="text-gold-600 font-semibold hover:underline">← Back to Latest News</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((a) => <NewsCard key={a.id} article={a} />)}
        </div>
      )}

      <div className="mt-10 pt-8 border-t border-gray-200">
        <h2 className="font-serif font-bold text-navy-900 text-lg mb-4" style={{ color: '#0A1628' }}>
          Other Countries
        </h2>
        <div className="flex flex-wrap gap-2">
          {COUNTRIES.filter((c) => c.slug !== params.countrySlug).map((c) => (
            <Link key={c.slug} href={`/country/${c.slug}`}
              className="text-xs font-semibold px-3 py-1.5 rounded-full border hover:bg-navy-900 hover:text-white hover:border-navy-900 transition-all"
              style={{ borderColor: '#E2E8F0', color: '#475569' }}>
              {c.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}