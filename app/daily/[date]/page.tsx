import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getNewsByDate, getAllDates } from '@/lib/news';
import { formatDate } from '@/lib/constants';
import NewsCard from '@/components/NewsCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import AdSlot from '@/components/AdSlot';
import Link from 'next/link';

export async function generateStaticParams() {
  return getAllDates().map((date) => ({ date }));
}

export async function generateMetadata({ params }: { params: { date: string } }): Promise<Metadata> {
  const display = formatDate(params.date);
  return {
    title: `Daily Brief: ${display}`,
    description: `All insurance and finance news from PolicyRix for ${display}. Verified stories from global sources.`,
  };
}

export default function DailyPage({ params }: { params: { date: string } }) {
  const articles = getNewsByDate(params.date);
  if (!articles.length) notFound();
  const display = formatDate(params.date);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs crumbs={[{ label: 'Daily Archive', href: '#' }, { label: display }]} />

      {/* Header */}
      <div className="mt-6 mb-8 rounded-2xl p-8 text-white"
        style={{ background: 'linear-gradient(135deg, #0A1628 0%, #162444 100%)', border: '1px solid rgba(201,168,76,0.2)' }}>
        <p className="text-gold-400 font-mono text-xs uppercase tracking-widest mb-2">Daily Brief</p>
        <h1 className="font-serif font-bold text-3xl md:text-4xl mb-2">{display}</h1>
        <p className="text-slate-400 text-sm">{articles.length} verified stories from global sources</p>
      </div>

      <AdSlot variant="banner" className="h-16 mb-8" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((a) => (
          <NewsCard key={a.id} article={a} />
        ))}
      </div>

      {/* Prev / Next nav */}
      <div className="mt-10 flex justify-between">
        <Link href="/" className="text-sm font-semibold text-gold-600 hover:underline">← Back to Latest</Link>
      </div>
    </div>
  );
}