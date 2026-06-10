import Link from 'next/link';
import Image from 'next/image';
import { NewsArticle } from '@/lib/news';
import { formatDate } from '@/lib/constants';
import CategoryBadge from './CategoryBadge';
import CountryBadge from './CountryBadge';

export default function FeaturedNewsCard({ article }: { article: NewsArticle }) {
  const href = `/news/${article.date}/${article.slug}`;

  return (
    <article className="group relative w-full rounded-2xl overflow-hidden shadow-xl" style={{ minHeight: 420 }}>
      <Image
        src={article.image_url}
        alt={article.image_alt}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-700"
        priority
        unoptimized
        sizes="100vw"
      />
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, rgba(4,9,15,0.95) 0%, rgba(10,22,40,0.6) 50%, rgba(10,22,40,0.1) 100%)' }} />

      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        <div className="absolute top-6 left-6 flex gap-2 flex-wrap">
          <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full text-navy-900"
            style={{ background: 'linear-gradient(135deg, #E0B84A, #F0D080)' }}>
            ★ Top Story
          </span>
          <CategoryBadge category={article.category} link={false} />
          <CountryBadge country={article.country} link={false} />
        </div>

        <Link href={href}>
          <h1 className="font-serif font-bold text-white text-2xl md:text-3xl leading-tight mb-3
            group-hover:text-gold-300 transition-colors" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
            {article.title}
          </h1>
        </Link>

        <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-5 line-clamp-2 max-w-3xl">
          {article.summary}
        </p>

        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span className="font-mono">{formatDate(article.published_at)}</span>
            <span className="text-slate-600">·</span>
            <span className="font-medium text-slate-300">{article.source_name}</span>
            <span className="text-slate-600">·</span>
            <span>{article.reading_time}</span>
          </div>
          <Link href={href}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #C9A84C, #E0B84A)', color: '#0A1628' }}>
            Read Full Story
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
