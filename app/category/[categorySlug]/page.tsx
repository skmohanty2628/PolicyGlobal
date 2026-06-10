import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getNewsByCategory } from '@/lib/news';
import { CATEGORIES, slugToLabel } from '@/lib/constants';
import NewsCard from '@/components/NewsCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import AdSlot from '@/components/AdSlot';
import Link from 'next/link';

export async function generateStaticParams() {
  return CATEGORIES.map((c) => ({ categorySlug: c.slug }));
}

export async function generateMetadata({ params }: { params: { categorySlug: string } }): Promise<Metadata> {
  const label = slugToLabel(params.categorySlug);
  return {
    title: `${label} News`,
    description: `Latest verified ${label} news from PolicyGlobal — global coverage across insurance, finance, and regulation.`,
  };
}

export default function CategoryPage({ params }: { params: { categorySlug: string } }) {
  const label = CATEGORIES.find((c) => c.slug === params.categorySlug)?.label ?? slugToLabel(params.categorySlug);
  const articles = getNewsByCategory(params.categorySlug);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs crumbs={[{ label: 'Categories' }, { label }]} />

      <div className="mt-6 mb-8 rounded-2xl p-8 text-white"
        style={{ background: 'linear-gradient(135deg, #0A1628 0%, #162444 100%)', border: '1px solid rgba(201,168,76,0.2)' }}>
        <p className="text-gold-400 font-mono text-xs uppercase tracking-widest mb-2">Category</p>
        <h1 className="font-serif font-bold text-3xl md:text-4xl mb-2">{label}</h1>
        <p className="text-slate-400 text-sm">{articles.length} verified {label} stories</p>
      </div>

      <AdSlot variant="banner" className="h-16 mb-8" />

      {articles.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-slate-400 text-lg mb-4">No stories found in this category yet.</p>
          <Link href="/" className="text-gold-600 font-semibold hover:underline">← Back to Latest News</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((a) => <NewsCard key={a.id} article={a} />)}
        </div>
      )}

      {/* Category Quick Nav */}
      <div className="mt-10 pt-8 border-t border-gray-200">
        <h2 className="font-serif font-bold text-navy-900 text-lg mb-4" style={{ color: '#0A1628' }}>
          Other Categories
        </h2>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.filter((c) => c.slug !== params.categorySlug).map((c) => (
            <Link key={c.slug} href={`/category/${c.slug}`}
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
