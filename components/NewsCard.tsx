import Link from 'next/link';
import Image from 'next/image';
import { NewsArticle } from '@/lib/news';
import { formatDate } from '@/lib/constants';
import CategoryBadge from './CategoryBadge';
import CountryBadge from './CountryBadge';

interface Props {
  article: NewsArticle;
  featured?: boolean;
}

export default function NewsCard({ article, featured = false }: Props) {
  const href = `/news/${article.date}/${article.slug}`;

  if (featured) {
    return (
      <article className="news-card group bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 flex flex-col md:flex-row h-auto md:h-56">
        <div className="relative md:w-80 h-48 md:h-full flex-shrink-0 overflow-hidden">
          <Image
            src={article.image_url}
            alt={article.image_alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 320px"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
        <div className="flex flex-col justify-between p-5 flex-1 min-w-0">
          <div>
            <div className="flex flex-wrap gap-2 mb-3">
              <CategoryBadge category={article.category} />
              <CountryBadge country={article.country} />
            </div>
            <Link href={href}>
              <h2 className="font-serif font-bold text-navy-900 text-lg leading-snug group-hover:text-gold-600 transition-colors line-clamp-2 mb-2"
                style={{ color: '#0A1628' }}>
                {article.title}
              </h2>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">{article.summary}</p>
          </div>
          <div className="flex items-center justify-between mt-3 flex-wrap gap-2">
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <span className="font-mono">{formatDate(article.published_at)}</span>
              <span className="text-slate-300">·</span>
              <span>{article.reading_time}</span>
              <span className="text-slate-300">·</span>
              <span className="font-medium text-slate-500">{article.source_name}</span>
            </div>
            <Link
              href={href}
              className="text-xs font-semibold px-3 py-1.5 rounded-full transition-all hover:opacity-80"
              style={{ background: '#0A1628', color: '#C9A84C' }}
            >
              Read Story →
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="news-card group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full">
      <div className="relative h-44 overflow-hidden flex-shrink-0">
        <Image
          src={article.image_url}
          alt={article.image_alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
        <div className="absolute top-3 left-3">
          <CategoryBadge category={article.category} link={false} />
        </div>
      </div>

      <div className="flex flex-col flex-1 p-4">
        <div className="flex items-center justify-between mb-2">
          <CountryBadge country={article.country} />
          {article.verification_status === 'Verified' && (
            <span className="text-green-600 text-[9px] font-mono uppercase tracking-wider flex items-center gap-1">
              <span>✓</span> Verified
            </span>
          )}
        </div>

        <Link href={href} className="flex-1">
          <h3 className="font-serif font-bold text-navy-900 text-base leading-snug group-hover:text-gold-600 transition-colors line-clamp-3 mb-2"
            style={{ color: '#0A1628' }}>
            {article.title}
          </h3>
        </Link>

        <p className="text-slate-500 text-sm line-clamp-2 mb-4 leading-relaxed">{article.summary}</p>

        <div className="mt-auto">
          <hr className="border-gray-100 mb-3" />
          <div className="flex items-center justify-between">
            <div className="text-xs text-slate-400 font-mono">
              <span className="block truncate max-w-[120px]">{article.source_name}</span>
              <span>{formatDate(article.published_at)}</span>
            </div>
            <Link
              href={href}
              className="text-xs font-semibold px-3 py-1.5 rounded-full border transition-all hover:bg-navy-900 hover:text-white"
              style={{ borderColor: '#C9A84C', color: '#C9A84C' }}
            >
              Read →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
