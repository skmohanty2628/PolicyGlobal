import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'About PolicyRix',
  description: 'Learn about PolicyRix — our mission, editorial standards, and approach to verified global insurance and finance news.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Breadcrumbs crumbs={[{ label: 'About' }]} />

      <div className="mt-6 mb-10 rounded-2xl p-8 text-white"
        style={{ background: 'linear-gradient(135deg, #0A1628 0%, #162444 100%)', border: '1px solid rgba(201,168,76,0.2)' }}>
        <p className="text-gold-400 font-mono text-xs uppercase tracking-widest mb-2">Who We Are</p>
        <h1 className="font-serif font-bold text-4xl">About PolicyRix</h1>
      </div>

      <div className="prose prose-lg max-w-none space-y-6 text-slate-700">
        <p className="text-lg leading-relaxed">
          <strong>PolicyRix</strong> is an independent global news and intelligence platform dedicated to covering the insurance and finance industries with accuracy, depth, and trust. We believe every person — whether a consumer comparing auto insurance, a CFO assessing reinsurance risk, or a regulator tracking global capital flows — deserves clear, verified, and actionable financial news.
        </p>

        <h2 className="font-serif font-bold text-navy-900 text-2xl mt-8 mb-4" style={{ color: '#0A1628' }}>
          Our Editorial Standards
        </h2>
        <ul className="space-y-3">
          {[
            'Every story is sourced from verified, trusted publications including Reuters, AP, Bloomberg, FT, official regulatory bodies, and company press releases.',
            'We do not publish AI-generated claims without verified third-party citations.',
            'All articles include visible source attribution, source links, and verification status.',
            'Our editorial team rewrites and paraphrases all content — we do not copy from sources.',
            'We clearly distinguish between news, analysis, and informational content.',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1 w-5 h-5 rounded-full flex-shrink-0 text-xs font-bold flex items-center justify-center text-navy-900"
                style={{ background: 'linear-gradient(135deg, #E0B84A, #F0D080)' }}>
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-serif font-bold text-navy-900 text-2xl mt-8 mb-4" style={{ color: '#0A1628' }}>
          Our Coverage
        </h2>
        <p>PolicyRix covers the full spectrum of the global insurance and finance ecosystem: auto, life, health, and property insurance; banking and monetary policy; fintech and digital payments; capital markets regulation; loans and mortgages; and macroeconomic policy across 20+ countries.</p>

        <h2 className="font-serif font-bold text-navy-900 text-2xl mt-8 mb-4" style={{ color: '#0A1628' }}>
          Advertising
        </h2>
        <p>PolicyRix is advertising-supported. Advertisers do not influence our editorial decisions. All ad placements are clearly labelled as advertisements. We do not accept sponsored content that is presented as editorial news.</p>

        <div className="mt-8 flex gap-4 flex-wrap">
          <Link href="/masthead" className="px-5 py-2.5 rounded-lg font-bold text-sm text-navy-900"
            style={{ background: 'linear-gradient(135deg, #C9A84C, #E0B84A)' }}>
            Meet the Editorial Team
          </Link>
          <Link href="/contact" className="px-5 py-2.5 rounded-lg font-bold text-sm border text-slate-700"
            style={{ borderColor: '#CBD5E1' }}>
            Contact Us
          </Link>
          <Link href="/disclaimer" className="px-5 py-2.5 rounded-lg font-bold text-sm border text-slate-700"
            style={{ borderColor: '#CBD5E1' }}>
            Read Disclaimer
          </Link>
        </div>
      </div>
    </div>
  );
}