import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { GUIDES } from '@/lib/guides';
import { formatDate } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Insurance & Finance Guides',
  description: 'Plain-English guides on health, life and auto insurance, claims, mortgages and how interest rates reach your wallet.',
  alternates: { canonical: '/guides' },
};

export default function GuidesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <Breadcrumbs crumbs={[{ label: 'Guides' }]} />
      <div className="mt-6 mb-8 rounded-2xl p-8 text-white"
        style={{ background: 'linear-gradient(135deg, #0A1628 0%, #162444 100%)', border: '1px solid rgba(201,168,76,0.2)' }}>
        <p className="text-gold-400 font-mono text-xs uppercase tracking-widest mb-2">Evergreen Explainers</p>
        <h1 className="font-serif font-bold text-3xl md:text-4xl">Guides</h1>
        <p className="text-slate-300 mt-3 max-w-2xl">The news tells you what happened. These guides explain how insurance and money products actually work, so you can make sense of the headlines and your own decisions.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {GUIDES.map((g) => (
          <Link key={g.slug} href={`/guides/${g.slug}`} className="news-card bg-white rounded-xl border border-gray-100 shadow-sm p-6 block">
            <p className="text-[11px] font-mono uppercase tracking-widest text-gold-600 mb-2">{g.category} · {g.readingMinutes} min read</p>
            <h2 className="font-serif font-bold text-xl leading-snug mb-2" style={{ color: '#0A1628' }}>{g.title}</h2>
            <p className="text-sm text-slate-500 leading-relaxed">{g.description}</p>
            <p className="text-xs text-slate-400 mt-4 font-mono">Updated {formatDate(g.updated)}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
