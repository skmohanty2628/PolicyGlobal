import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { TOOLS } from '@/lib/tools';

export const metadata: Metadata = {
  title: 'Free Insurance & Finance Calculators',
  description: 'Free calculators for loan payments, life-insurance needs and deductible choices. They run privately in your browser.',
  alternates: { canonical: '/tools' },
};

export default function ToolsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <Breadcrumbs crumbs={[{ label: 'Tools' }]} />
      <div className="mt-6 mb-8 rounded-2xl p-8 text-white"
        style={{ background: 'linear-gradient(135deg, #0A1628 0%, #162444 100%)', border: '1px solid rgba(201,168,76,0.2)' }}>
        <p className="text-gold-400 font-mono text-xs uppercase tracking-widest mb-2">Free Tools</p>
        <h1 className="font-serif font-bold text-3xl md:text-4xl">Insurance &amp; Finance Calculators</h1>
        <p className="text-slate-300 mt-3 max-w-2xl">Practical calculators that turn the headlines into numbers for your own situation. Everything runs in your browser — nothing you type is stored.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {TOOLS.map((t) => (
          <Link key={t.slug} href={`/tools/${t.slug}`} className="news-card bg-white rounded-xl border border-gray-100 shadow-sm p-6 block">
            <div className="text-3xl mb-3">{t.icon}</div>
            <h2 className="font-serif font-bold text-lg mb-2" style={{ color: '#0A1628' }}>{t.title}</h2>
            <p className="text-sm text-slate-500">{t.short}</p>
            <p className="text-xs font-semibold mt-4 text-gold-600">Open calculator →</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
