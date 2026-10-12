import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import DeductibleCalculator from '@/components/tools/DeductibleCalculator';
import Explainer from './explainer';

export const metadata: Metadata = {
  title: 'Insurance Deductible Break-Even Calculator',
  description: 'Compare a lower and a higher deductible using your premiums and realistic claim frequency to see which option costs less.',
  alternates: { canonical: '/tools/deductible-break-even-calculator' },
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Breadcrumbs crumbs={[{ label: 'Tools', href: '/tools' }, { label: 'Insurance Deductible Break-Even Calculator' }]} />
      <div className="mt-6 mb-8 rounded-2xl p-8 text-white"
        style={{ background: 'linear-gradient(135deg, #0A1628 0%, #162444 100%)', border: '1px solid rgba(201,168,76,0.2)' }}>
        <p className="text-gold-400 font-mono text-xs uppercase tracking-widest mb-2">Free Tool</p>
        <h1 className="font-serif font-bold text-3xl md:text-4xl">Insurance Deductible Break-Even Calculator</h1>
        <p className="text-slate-300 mt-3 max-w-2xl">Compare a lower and a higher deductible using your premiums and realistic claim frequency to see which option costs less.</p>
      </div>
      <DeductibleCalculator />
      <p className="text-xs text-slate-500 mt-4">Estimates are for general education only and are not financial, insurance or tax advice. Calculations run in your browser; nothing you enter is sent to our servers.</p>
      <Explainer />
    </div>
  );
}
