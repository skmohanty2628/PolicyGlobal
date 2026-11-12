import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import AffordabilityCalculator from '@/components/tools/AffordabilityCalculator';
import Explainer from './explainer';

const TITLE = 'Mortgage Affordability Calculator';
const DESC = 'Estimate how much house you can afford from your income, debts, down payment and interest rate, using housing and total debt-to-income limits you can adjust.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: '/tools/mortgage-affordability-calculator' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: TITLE,
  description: DESC,
  url: 'https://www.policyrix.com/tools/mortgage-affordability-calculator',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  publisher: { '@type': 'Organization', name: 'PolicyRix' },
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs crumbs={[{ label: 'Tools', href: '/tools' }, { label: TITLE }]} />
      <div className="mt-6 mb-8 rounded-2xl p-8 text-white"
        style={{ background: 'linear-gradient(135deg, #0A1628 0%, #162444 100%)', border: '1px solid rgba(201,168,76,0.2)' }}>
        <p className="text-gold-400 font-mono text-xs uppercase tracking-widest mb-2">Free Tool</p>
        <h1 className="font-serif font-bold text-3xl md:text-4xl">{TITLE}</h1>
        <p className="text-slate-300 mt-3 max-w-2xl">{DESC}</p>
      </div>
      <AffordabilityCalculator />
      <p className="text-xs text-slate-500 mt-4">Estimates are for general education only and are not financial, insurance or tax advice. Calculations run in your browser; nothing you enter is sent to our servers.</p>
      <Explainer />
    </div>
  );
}
