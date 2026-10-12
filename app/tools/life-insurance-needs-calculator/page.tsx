import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import LifeCalculator from '@/components/tools/LifeCalculator';
import Explainer from './explainer';

export const metadata: Metadata = {
  title: 'Life Insurance Needs Calculator',
  description: 'Estimate how much life insurance your family would need by adding income replacement, debts, mortgage, education and final expenses.',
  alternates: { canonical: '/tools/life-insurance-needs-calculator' },
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Breadcrumbs crumbs={[{ label: 'Tools', href: '/tools' }, { label: 'Life Insurance Needs Calculator' }]} />
      <div className="mt-6 mb-8 rounded-2xl p-8 text-white"
        style={{ background: 'linear-gradient(135deg, #0A1628 0%, #162444 100%)', border: '1px solid rgba(201,168,76,0.2)' }}>
        <p className="text-gold-400 font-mono text-xs uppercase tracking-widest mb-2">Free Tool</p>
        <h1 className="font-serif font-bold text-3xl md:text-4xl">Life Insurance Needs Calculator</h1>
        <p className="text-slate-300 mt-3 max-w-2xl">Estimate how much life insurance your family would need by adding income replacement, debts, mortgage, education and final expenses.</p>
      </div>
      <LifeCalculator />
      <p className="text-xs text-slate-500 mt-4">Estimates are for general education only and are not financial, insurance or tax advice. Calculations run in your browser; nothing you enter is sent to our servers.</p>
      <Explainer />
    </div>
  );
}
