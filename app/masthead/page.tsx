import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Masthead & Editorial Team',
  description: 'Meet the editorial team behind PolicyRix, and read our corrections and sourcing policy.',
};

const TEAM = [
  {
    name: 'Subham',
    role: 'Founder & Editor-in-Chief',
    bio: 'Oversees editorial direction, sourcing standards, and day-to-day coverage decisions across PolicyRix. Responsible for final review of published stories and for responding to reader-flagged corrections.',
  },
];

export default function MastheadPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Breadcrumbs crumbs={[{ label: 'Masthead' }]} />

      <div className="mt-6 mb-10 rounded-2xl p-8 text-white"
        style={{ background: 'linear-gradient(135deg, #0A1628 0%, #162444 100%)', border: '1px solid rgba(201,168,76,0.2)' }}>
        <p className="text-gold-400 font-mono text-xs uppercase tracking-widest mb-2">Editorial Team</p>
        <h1 className="font-serif font-bold text-4xl">Masthead</h1>
        <p className="text-slate-300 mt-3 max-w-2xl">
          The people responsible for what we publish, how we source it, and how we correct it when we get something wrong.
        </p>
      </div>

      <div className="prose prose-lg max-w-none space-y-6 text-slate-700">
        <h2 className="font-serif font-bold text-navy-900 text-2xl mt-8 mb-4" style={{ color: '#0A1628' }}>
          Editorial Team
        </h2>

        <div className="space-y-5">
          {TEAM.map((person) => (
            <div key={person.name} className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 bg-white shadow-sm">
              <div className="w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center text-navy-900 font-bold text-lg"
                style={{ background: 'linear-gradient(135deg, #E0B84A, #F0D080)' }}>
                {person.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-serif font-bold text-navy-900 text-lg" style={{ color: '#0A1628' }}>
                  {person.name}
                </h3>
                <p className="text-gold-600 text-sm font-semibold mb-2">{person.role}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{person.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="font-serif font-bold text-navy-900 text-2xl mt-10 mb-4" style={{ color: '#0A1628' }}>
          Sourcing Standards
        </h2>
        <ul className="space-y-3">
          {[
            'Every article is sourced from verified, publicly available reporting — including Reuters, AP, Bloomberg, CNBC, official regulatory bodies, and company press releases.',
            'Source names and links are displayed on every article, along with a verification status.',
            'Our team rewrites and paraphrases all content in our own words. We do not republish or copy source text.',
            'We do not publish claims that lack a verifiable, named source.',
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

        <h2 className="font-serif font-bold text-navy-900 text-2xl mt-10 mb-4" style={{ color: '#0A1628' }}>
          Corrections Policy
        </h2>
        <p>
          We take accuracy seriously. If you believe an article contains a factual error, please{' '}
          <Link href="/contact" className="text-gold-600 font-semibold hover:underline">contact us</Link>{' '}
          with the article link and a description of the issue.
        </p>
        <ul className="space-y-3">
          {[
            'We review every correction request against the original source material.',
            'Verified factual errors are corrected as soon as possible after review.',
            'Substantive corrections are noted at the bottom of the affected article, along with the date of the correction.',
            'Minor edits (typos, formatting) may be made without a separate correction note.',
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

        <div className="mt-8 flex gap-4 flex-wrap">
          <Link href="/contact" className="px-5 py-2.5 rounded-lg font-bold text-sm text-navy-900"
            style={{ background: 'linear-gradient(135deg, #C9A84C, #E0B84A)' }}>
            Report an Error
          </Link>
          <Link href="/about" className="px-5 py-2.5 rounded-lg font-bold text-sm border text-slate-700"
            style={{ borderColor: '#CBD5E1' }}>
            About PolicyRix
          </Link>
        </div>
      </div>
    </div>
  );
}