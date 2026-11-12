import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  alternates: { canonical: '/editorial-policy' },
  title: 'Editorial Policy',
  description: 'How PolicyRix chooses stories, checks sources, separates news summaries from original analysis, uses AI tools, handles corrections and keeps advertising apart from editorial.',
};

const SECTIONS: [string, string[]][] = [
  ['What we publish', [
    'PolicyRix publishes two kinds of work, and each article is labelled by what it is. News summaries explain a public report, such as a company result or a regulator decision, in plain language, name the original source and link to it. Analysis pieces compare several public sources and add our own calculations or reasoning, and they say clearly which numbers we calculated ourselves.',
    'We do not publish rumours, anonymous tips as fact, or paid content presented as news.',
  ]],
  ['How we choose and check stories', [
    'We start from primary sources whenever possible: company results and filings, regulator statements, central bank releases and official data. Where a primary page is not available to us, we use reputable trade or news reporting and say so in the article.',
    'Figures that matter, such as profits, ratios, dates and rates, are checked against the source before publishing. If two sources disagree, we use the one closest to the original, and we say when sources conflict. If we cannot confirm a number, we leave it out.',
  ]],
  ['Use of AI tools', [
    'We use AI tools to help research, draft and check articles. The PolicyRix Team is responsible for everything published under its name, and AI is not used to invent quotes, data or sources.',
  ]],
  ['What we are not', [
    'Nothing on PolicyRix is financial, investment, legal or insurance advice. We explain public information so readers can ask better questions of a qualified professional.',
  ]],
  ['Corrections', [
    'If we get something wrong, we correct it promptly and note material changes on the article. To report an error, write to editorial@policyrix.com with the article link and what should change.',
  ]],
  ['Independence and advertising', [
    'Advertising, where it appears, is kept separate from editorial decisions. Advertisers and sponsors do not choose, review or change our coverage. Links to original sources are never paid placements.',
  ]],
];

export default function EditorialPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Breadcrumbs crumbs={[{ label: 'Editorial Policy' }]} />
      <div className="mt-6 mb-10 rounded-2xl p-8 text-white"
        style={{ background: 'linear-gradient(135deg, #0A1628 0%, #162444 100%)', border: '1px solid rgba(201,168,76,0.2)' }}>
        <p className="text-gold-400 font-mono text-xs uppercase tracking-widest mb-2">How we work</p>
        <h1 className="font-serif font-bold text-4xl">Editorial Policy</h1>
      </div>
      <div className="max-w-none space-y-8 text-slate-700">
        {SECTIONS.map(([h, paras]) => (
          <section key={h}>
            <h2 className="font-serif font-bold text-2xl mb-3" style={{ color: '#0A1628' }}>{h}</h2>
            {paras.map((p) => (<p key={p} className="leading-relaxed mb-3">{p}</p>))}
          </section>
        ))}
        <p className="text-sm text-slate-500">
          See also our <Link href="/about" className="underline">About page</Link>, <Link href="/masthead" className="underline">Masthead</Link> and <Link href="/disclaimer" className="underline">Disclaimer</Link>.
        </p>
      </div>
    </div>
  );
}
