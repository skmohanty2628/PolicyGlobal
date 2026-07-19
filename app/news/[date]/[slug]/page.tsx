import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getNewsBySlug, getRelatedNews, getAllDates, getNewsByDate } from '@/lib/news';
import { formatDate } from '@/lib/constants';
import CategoryBadge from '@/components/CategoryBadge';
import CountryBadge from '@/components/CountryBadge';
import SourceBadge from '@/components/SourceBadge';
import RelatedNews from '@/components/RelatedNews';
import Breadcrumbs from '@/components/Breadcrumbs';
import AdSlot from '@/components/AdSlot';
import NewsletterBox from '@/components/NewsletterBox';

interface Params { date: string; slug: string; }

export async function generateStaticParams() {
  const dates = getAllDates();
  const params: Params[] = [];
  for (const date of dates) {
    const articles = getNewsByDate(date);
    articles.forEach((a) => params.push({ date, slug: a.slug }));
  }
  return params;
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const article = getNewsBySlug(params.date, params.slug);
  if (!article) return { title: 'Article Not Found' };
  return {
    title: article.title,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      images: [{ url: article.image_url, alt: article.image_alt }],
      type: 'article',
      publishedTime: article.published_at,
      authors: ['PolicyRix Editorial Desk'],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.summary,
      images: [article.image_url],
    },
  };
}

export default function ArticlePage({ params }: { params: Params }) {
  const article = getNewsBySlug(params.date, params.slug);
  if (!article) notFound();
  const related = getRelatedNews(article, 4);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.summary,
    image: article.image_url,
    datePublished: article.published_at,
    dateModified: article.verified_at,
    author: { '@type': 'Organization', name: 'PolicyRix Editorial Desk' },
    publisher: {
      '@type': 'Organization',
      name: 'PolicyRix',
      logo: { '@type': 'ImageObject', url: 'https://policyrix.com/og-default.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://policyrix.com/news/${params.date}/${params.slug}` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Image */}
      <div className="w-full relative" style={{ height: 400, background: '#0A1628' }}>
        <Image
          src={article.image_url}
          alt={article.image_alt}
          fill
          className="object-cover"
          priority
          unoptimized
          sizes="100vw"
        />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(4,9,15,0.8) 0%, rgba(10,22,40,0.3) 100%)' }} />
        <div className="absolute bottom-0 left-0 right-0 p-6 max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-3">
            <CategoryBadge category={article.category} link={false} />
            <CountryBadge country={article.country} link={false} />
          </div>
          <h1 className="font-serif font-bold text-white text-2xl md:text-4xl leading-snug max-w-4xl"
            style={{ textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}>
            {article.title}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ── Article ── */}
          <article className="lg:col-span-2">
            <Breadcrumbs crumbs={[
              { label: 'News', href: '/' },
              { label: params.date, href: `/daily/${params.date}` },
              { label: article.title },
            ]} />

            <div className="flex flex-wrap items-center gap-4 mt-4 mb-6 pb-6 border-b border-gray-200">
              <div className="text-xs text-slate-500 font-mono">
                <span className="font-semibold text-slate-700">Editorial Desk</span>
                <span className="mx-2">·</span>
                <time dateTime={article.published_at}>{formatDate(article.published_at)}</time>
                <span className="mx-2">·</span>
                <span>{article.reading_time}</span>
              </div>
              {article.verification_status === 'Verified' && (
                <span className="verified-badge">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd" />
                  </svg>
                  Verified Story
                </span>
              )}
            </div>

            <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium border-l-4 pl-4"
              style={{ borderColor: '#C9A84C' }}>
              {article.summary}
            </p>

            <AdSlot variant="inline" className="h-16 mb-6" />

            <div className="article-prose mb-8">
              {article.description.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {article.video_url && (
              <div className="mb-8 rounded-xl overflow-hidden aspect-video bg-black">
                <iframe src={article.video_url} title={article.title}
                  className="w-full h-full" allowFullScreen />
              </div>
            )}

            <div className="rounded-xl p-6 mb-6 border" style={{ background: '#F8F9FA', borderColor: '#E2E8F0' }}>
              <h2 className="font-serif font-bold text-navy-900 text-lg mb-4 flex items-center gap-2"
                style={{ color: '#0A1628' }}>
                <span className="w-1 h-5 rounded-full" style={{ background: '#C9A84C' }} />
                Key Points
              </h2>
              <ul className="space-y-3">
                {article.key_points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center text-navy-900"
                      style={{ background: 'linear-gradient(135deg, #E0B84A, #F0D080)' }}>
                      {i + 1}
                    </span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl p-6 mb-6" style={{ background: '#0A1628', border: '1px solid rgba(201,168,76,0.25)' }}>
              <h2 className="font-mono text-gold-400 text-xs uppercase tracking-widest mb-3">
                Why This Matters
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">{article.why_it_matters}</p>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {article.tags.map((tag) => (
                <span key={tag} className="text-xs font-mono px-3 py-1 rounded-full bg-gray-100 text-slate-500">
                  #{tag}
                </span>
              ))}
            </div>

            <SourceBadge
              sourceName={article.source_name}
              sourceUrl={article.source_url}
              verificationStatus={article.verification_status}
              verifiedAt={article.verified_at}
            />

            <AdSlot variant="bottom" className="h-20 mt-8" />

            <div className="mt-6 p-4 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-800 leading-relaxed">
              <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute
              financial, investment, legal, or insurance advice. Always consult a qualified professional before
              making financial decisions. PolicyRix reports on publicly available information from third-party
              sources and cannot guarantee the accuracy or completeness of such information.
            </div>

            <RelatedNews articles={related} />
            <NewsletterBox />
          </article>

          {/* ── Sidebar ── */}
          <aside className="space-y-6">
            <AdSlot variant="sidebar" className="h-64" />

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-serif font-bold text-navy-900 text-base mb-4" style={{ color: '#0A1628' }}>
                More in this Category
              </h3>
              {/* ✅ Bug 1 Fixed: & → and before replacing spaces */}
              <Link href={`/category/${article.category.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-')}`}
                className="text-sm font-semibold text-gold-600 hover:underline">
                Browse all {article.category} stories →
              </Link>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-serif font-bold text-navy-900 text-base mb-4" style={{ color: '#0A1628' }}>
                More from {article.country}
              </h3>
              <Link href={`/country/${article.country.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm font-semibold text-gold-600 hover:underline">
                Browse all {article.country} stories →
              </Link>
            </div>

            <AdSlot variant="sidebar" className="h-48" />
          </aside>
        </div>
      </div>
    </>
  );
}