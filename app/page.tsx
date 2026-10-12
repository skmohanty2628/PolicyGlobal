import { getLatestNews, getAllDates } from '@/lib/news';
import { CATEGORIES, COUNTRIES, countryFlag, formatDate } from '@/lib/constants';
import { GUIDES } from '@/lib/guides';
import { TOOLS } from '@/lib/tools';
import HomeFeed, { FeedItem } from '@/components/HomeFeed';
import FeaturedNewsCard from '@/components/FeaturedNewsCard';
import NewsCard from '@/components/NewsCard';
import AdSlot from '@/components/AdSlot';
import NewsletterBox from '@/components/NewsletterBox';
import DailyArchive from '@/components/DailyArchive';
import SearchBar from '@/components/SearchBar';
import Link from 'next/link';

export const revalidate = 3600; // ISR: revalidate every hour

export default function HomePage() {
  const articles = getLatestNews(48);
  const dates = getAllDates();
  const latestDate = dates[0] ?? '2026-06-10';

  const hero = articles[0];
  const featured = articles.slice(1, 4);
  const feed: FeedItem[] = articles.slice(4).map((a) => ({
    date: a.date, slug: a.slug, title: a.title, summary: a.summary, category: a.category,
    country: a.country, flag: countryFlag(a.country), source: a.source_name,
    image: a.image_url, alt: a.image_alt, minutes: a.reading_time,
  }));
  const topCats = Object.entries(
    articles.reduce<Record<string, number>>((m, a) => ((m[a.category] = (m[a.category] ?? 0) + 1), m), {})
  ).sort((a, b) => b[1] - a[1]).slice(0, 6);
  const catSlug = (label: string) => CATEGORIES.find((c) => c.label === label)?.slug ?? '';

  return (
    <>
      {/* ── Hero Section ── */}
      <section
        className="py-8 md:py-12"
        style={{ background: 'linear-gradient(180deg, #0A1628 0%, #162444 60%, #F0F2F5 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-4">
          {/* Title */}
          <div className="text-center mb-8">
            <p className="text-gold-400 text-xs font-mono uppercase tracking-widest mb-2">
              Global Insurance &amp; Finance Intelligence
            </p>
            <h1 className="font-serif font-bold text-white text-3xl md:text-5xl leading-tight mb-3">
              The PolicyRix Daily Brief
            </h1>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              Verified news on insurance, banking, finance, and markets — from trusted global sources.
            </p>
            <div className="flex justify-center mt-5">
              <SearchBar />
            </div>
          </div>

          {/* Hero Card */}
          {hero && <FeaturedNewsCard article={hero} />}
        </div>
      </section>

      {/* ── Main Content ── */}
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* In-feed Ad */}
        <AdSlot variant="inline" className="h-16 mb-8" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ── Left: Main Feed ── */}
          <div className="lg:col-span-2 space-y-8">

            {/* Featured Row */}
            <section>
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-serif font-bold text-navy-900 text-xl gold-underline" style={{ color: '#0A1628' }}>
                  Featured Stories
                </h2>
                <Link href={`/daily/${latestDate}`}
                  className="text-xs font-mono text-gold-600 hover:underline">
                  View all for {latestDate} →
                </Link>
              </div>
              <div className="space-y-4">
                {featured.map((a) => (
                  <NewsCard key={a.id} article={a} featured />
                ))}
              </div>
            </section>

            <hr className="section-divider" />

            {/* Filterable feed */}
            <section>
              <h2 className="font-serif font-bold text-navy-900 text-xl gold-underline mb-5" style={{ color: '#0A1628' }}>
                Latest News
              </h2>
              <HomeFeed items={feed} />
            </section>

            {/* Guides & tools */}
            <section>
              <h2 className="font-serif font-bold text-navy-900 text-xl gold-underline mb-5" style={{ color: '#0A1628' }}>
                Learn &amp; Calculate
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {GUIDES.slice(0, 2).map((g) => (
                  <Link key={g.slug} href={`/guides/${g.slug}`} className="news-card bg-white rounded-xl border border-gray-100 shadow-sm p-5 block">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-gold-600 mb-1">Guide · {g.readingMinutes} min</p>
                    <p className="font-serif font-bold leading-snug" style={{ color: '#0A1628' }}>{g.title}</p>
                  </Link>
                ))}
                {TOOLS.slice(0, 2).map((t) => (
                  <Link key={t.slug} href={`/tools/${t.slug}`} className="news-card rounded-xl p-5 block" style={{ background: '#0A1628', border: '1px solid rgba(201,168,76,0.25)' }}>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-gold-400 mb-1">{t.icon} Free tool</p>
                    <p className="font-serif font-bold text-white leading-snug">{t.title}</p>
                    <p className="text-xs text-slate-400 mt-1">{t.short}</p>
                  </Link>
                ))}
              </div>
              <div className="flex gap-4 mt-3 text-xs font-semibold text-gold-600">
                <Link href="/guides" className="hover:underline">All guides →</Link>
                <Link href="/tools" className="hover:underline">All tools →</Link>
              </div>
            </section>

            {/* Newsletter */}
            <NewsletterBox />
          </div>

          {/* ── Right: Sidebar ── */}
          <aside className="space-y-6">
            {/* Sidebar Ad */}
            <AdSlot variant="sidebar" className="h-64" />

            {/* Trending topics */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-serif font-bold text-navy-900 text-base mb-1 flex items-center gap-2" style={{ color: '#0A1628' }}>
                <span className="w-1 h-5 rounded-full inline-block" style={{ background: '#C9A84C' }} />
                Most covered right now
              </h3>
              <p className="text-[11px] text-slate-400 mb-3 font-mono">Updated {formatDate(latestDate)}</p>
              <ul className="space-y-2">
                {topCats.map(([label, n]) => (
                  <li key={label}>
                    <Link href={`/category/${catSlug(label)}`} className="flex items-center justify-between text-sm text-slate-600 hover:text-navy-900">
                      <span>{label}</span>
                      <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-gray-100">{n}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Daily Archive */}
            <DailyArchive />

            {/* Categories */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-serif font-bold text-navy-900 text-base mb-4 flex items-center gap-2"
                style={{ color: '#0A1628' }}>
                <span className="w-1 h-5 rounded-full inline-block" style={{ background: '#C9A84C' }} />
                Browse Categories
              </h3>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((c) => (
                  <Link key={c.slug} href={`/category/${c.slug}`}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full border transition-all hover:bg-navy-900 hover:text-white hover:border-navy-900"
                    style={{ borderColor: '#E2E8F0', color: '#475569' }}>
                    {c.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Countries */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-serif font-bold text-navy-900 text-base mb-4 flex items-center gap-2"
                style={{ color: '#0A1628' }}>
                <span className="w-1 h-5 rounded-full inline-block" style={{ background: '#C9A84C' }} />
                Browse by Country
              </h3>
              <div className="space-y-1.5">
                {COUNTRIES.map((c) => (
                  <Link key={c.slug} href={`/country/${c.slug}`}
                    className="flex items-center gap-2 py-1.5 px-2 rounded-lg hover:bg-gray-50 transition-colors text-sm text-slate-600 hover:text-navy-900">
                    {c.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar Ad 2 */}
            <AdSlot variant="sidebar" className="h-48" />

            {/* Trust Box */}
            <div className="rounded-xl p-5 border" style={{ background: '#0A1628', borderColor: 'rgba(201,168,76,0.25)' }}>
              <h3 className="font-mono text-gold-400 text-xs uppercase tracking-widest mb-3">Our Standards</h3>
              <ul className="space-y-2 text-xs text-slate-400">
                {[
                  '✓ Every story links to its original source',
                  '✓ Corrections handled openly — email editorial@policyrix.com',
                  '✓ Informational only — not financial advice',
                  '✓ Editorial independence maintained',
                  '✓ Sources linked on every story',
                ].map((t) => <li key={t}>{t}</li>)}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}