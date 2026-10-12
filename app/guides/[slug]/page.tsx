import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import ShareButtons from '@/components/ShareButtons';
import ReadingProgress from '@/components/ReadingProgress';
import NewsletterBox from '@/components/NewsletterBox';
import { GUIDES, getGuide } from '@/lib/guides';
import { TOOLS } from '@/lib/tools';
import { formatDate } from '@/lib/constants';

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const g = getGuide(params.slug);
  if (!g) return { title: 'Guide not found' };
  return {
    title: g.title,
    description: g.description,
    alternates: { canonical: `/guides/${g.slug}` },
    openGraph: { type: 'article', title: g.title, description: g.description, publishedTime: g.published, modifiedTime: g.updated },
  };
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const g = getGuide(params.slug);
  if (!g) notFound();
  const tool = TOOLS.find((t) => t.slug === g.relatedTool);
  const others = GUIDES.filter((x) => x.slug !== g.slug).slice(0, 3);
  const url = `https://policyrix.com/guides/${g.slug}`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: g.title,
      description: g.description,
      datePublished: g.published,
      dateModified: g.updated,
      author: { '@type': 'Organization', name: 'PolicyRix Editorial' },
      publisher: { '@type': 'Organization', name: 'PolicyRix', logo: { '@type': 'ImageObject', url: 'https://policyrix.com/og-default.png' } },
      mainEntityOfPage: url,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: g.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ];

  return (
    <>
      <ReadingProgress />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumbs crumbs={[{ label: 'Guides', href: '/guides' }, { label: g.title }]} />
        <p className="text-[11px] font-mono uppercase tracking-widest text-gold-600 mt-6 mb-2">{g.category} · {g.readingMinutes} min read</p>
        <h1 className="font-serif font-bold text-3xl md:text-4xl leading-tight" style={{ color: '#0A1628' }}>{g.title}</h1>
        <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pb-5 border-b border-gray-200">
          <p className="text-xs text-slate-500 font-mono">
            <Link href="/masthead" className="font-semibold text-slate-700 hover:underline">PolicyRix Editorial</Link>
            <span className="mx-2">·</span>Updated {formatDate(g.updated)}
          </p>
          <ShareButtons url={url} title={g.title} />
        </div>

        <p className="text-lg text-slate-600 leading-relaxed my-6 font-medium border-l-4 pl-4" style={{ borderColor: '#C9A84C' }}>{g.intro}</p>

        <nav aria-label="In this guide" className="rounded-xl p-5 mb-8 border" style={{ background: '#F8F9FA', borderColor: '#E2E8F0' }}>
          <p className="font-mono text-xs uppercase tracking-widest text-slate-500 mb-3">In this guide</p>
          <ol className="list-decimal pl-5 space-y-1 text-sm">
            {g.sections.map((s, i) => (
              <li key={i}><a href={`#s${i}`} className="text-slate-700 hover:text-gold-600 hover:underline">{s.heading}</a></li>
            ))}
            <li><a href="#faq" className="text-slate-700 hover:text-gold-600 hover:underline">Frequently asked questions</a></li>
          </ol>
        </nav>

        <div className="article-prose">
          {g.sections.map((s, i) => (
            <section key={i} id={`s${i}`} className="scroll-mt-28">
              <h2 className="font-serif font-bold text-2xl mt-8 mb-3" style={{ color: '#0A1628' }}>{s.heading}</h2>
              {s.paragraphs.map((p, j) => <p key={j}>{p}</p>)}
              {s.bullets && (
                <ul className="list-disc pl-6 space-y-2 mb-5">
                  {s.bullets.map((b, k) => <li key={k}>{b}</li>)}
                </ul>
              )}
            </section>
          ))}
        </div>

        <div className="rounded-xl p-6 my-8" style={{ background: '#0A1628', border: '1px solid rgba(201,168,76,0.25)' }}>
          <h2 className="font-mono text-gold-400 text-xs uppercase tracking-widest mb-3">Key takeaways</h2>
          <ul className="space-y-2 text-sm text-slate-300 list-disc pl-5">
            {g.takeaways.map((t, i) => <li key={i}>{t}</li>)}
          </ul>
        </div>

        {tool && (
          <Link href={`/tools/${tool.slug}`} className="news-card flex items-center gap-4 bg-white rounded-xl border border-gray-100 shadow-sm p-5 mb-8">
            <span className="text-3xl">{tool.icon}</span>
            <span>
              <span className="block text-[11px] font-mono uppercase tracking-widest text-gold-600">Try the tool</span>
              <span className="block font-serif font-bold" style={{ color: '#0A1628' }}>{tool.title}</span>
              <span className="block text-sm text-slate-500">{tool.short}</span>
            </span>
          </Link>
        )}

        <section id="faq" className="scroll-mt-28">
          <h2 className="font-serif font-bold text-2xl mb-4" style={{ color: '#0A1628' }}>Frequently asked questions</h2>
          <div className="space-y-3">
            {g.faqs.map((f, i) => (
              <details key={i} className="bg-white rounded-lg border border-gray-100 p-4 group">
                <summary className="font-semibold text-sm cursor-pointer" style={{ color: '#0A1628' }}>{f.q}</summary>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <div className="mt-8 p-4 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-800 leading-relaxed">
          <strong>Disclaimer:</strong> This guide is general education, not financial, legal, tax or insurance advice. Products, rules and prices vary by country, state and provider; check your own policy documents and consult a licensed professional before deciding.
        </div>

        <NewsletterBox />

        <h2 className="font-serif font-bold text-xl mb-4" style={{ color: '#0A1628' }}>More guides</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {others.map((o) => (
            <Link key={o.slug} href={`/guides/${o.slug}`} className="news-card bg-white rounded-xl border border-gray-100 shadow-sm p-4 block">
              <p className="text-[10px] font-mono uppercase tracking-widest text-gold-600 mb-1">{o.category}</p>
              <p className="font-serif font-bold text-sm leading-snug" style={{ color: '#0A1628' }}>{o.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
