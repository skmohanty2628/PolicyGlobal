import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import LoanCalculator from '@/components/tools/LoanCalculator';
import Explainer from './explainer';

export const metadata: Metadata = {
  title: 'Loan & Mortgage Payment Calculator',
  description: 'Work out your monthly payment, total interest and how much an extra monthly payment saves on any fixed-rate loan or mortgage.',
  alternates: { canonical: '/tools/loan-emi-calculator' },
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Breadcrumbs crumbs={[{ label: 'Tools', href: '/tools' }, { label: 'Loan & Mortgage Payment Calculator' }]} />
      <div className="mt-6 mb-8 rounded-2xl p-8 text-white"
        style={{ background: 'linear-gradient(135deg, #0A1628 0%, #162444 100%)', border: '1px solid rgba(201,168,76,0.2)' }}>
        <p className="text-gold-400 font-mono text-xs uppercase tracking-widest mb-2">Free Tool</p>
        <h1 className="font-serif font-bold text-3xl md:text-4xl">Loan & Mortgage Payment Calculator</h1>
        <p className="text-slate-300 mt-3 max-w-2xl">Work out your monthly payment, total interest and how much an extra monthly payment saves on any fixed-rate loan or mortgage.</p>
      </div>
      <LoanCalculator />
      <p className="text-xs text-slate-500 mt-4">Estimates are for general education only and are not financial, insurance or tax advice. Calculations run in your browser; nothing you enter is sent to our servers.</p>
      <Explainer />
    </div>
  );
}
