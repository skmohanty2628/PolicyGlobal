import Link from 'next/link';
import Image from 'next/image';
import { NewsArticle } from '@/lib/news';
import { formatDate } from '@/lib/constants';
import CategoryBadge from './CategoryBadge';

export default function RelatedNews({ articles }: { articles: NewsArticle[] }) {
  if (!articles.length) return null;
  return (
    <section className="mt-10">
      <h2 className="font-serif font-bold text-navy-900 text-2xl mb-6 gold-underline"
        style={{ color: '#0A1628' }}>
        Related Stories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {articles.map((a) => (
          <Link key={a.id} href={`/news/${a.date}/${a.slug}`}
            className="group flex gap-4 bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
            <div className="relative w-20 h-16 flex-shrink-0 rounded-lg overflow-hidden">
              <Image src={a.image_url} alt={a.image_alt} fill className="object-cover" unoptimized sizes="80px" />
            </div>
            <div className="flex-1 min-w-0">
              <CategoryBadge category={a.category} link={false} className="mb-1" />
              <p className="font-serif font-semibold text-sm group-hover:text-gold-600 transition-colors line-clamp-2 leading-snug"
                style={{ color: '#0A1628' }}>
                {a.title}
              </p>
              <p className="text-xs text-slate-400 font-mono mt-1">{formatDate(a.published_at)}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
