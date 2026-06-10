import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'PolicyGlobal legal disclaimer — informational content only, not financial advice.',
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Breadcrumbs crumbs={[{ label: 'Disclaimer' }]} />
      <div className="mt-6 mb-8 p-8 rounded-2xl text-white"
        style={{ background: 'linear-gradient(135deg, #0A1628, #162444)', border: '1px solid rgba(201,168,76,0.2)' }}>
        <p className="text-gold-400 font-mono text-xs uppercase tracking-widest mb-2">Legal</p>
        <h1 className="font-serif font-bold text-4xl">Disclaimer</h1>
      </div>
      <div className="prose max-w-none space-y-5 text-slate-700">
        <p><strong>Informational Purpose Only.</strong> All content published on PolicyGlobal is for general informational purposes only and does not constitute financial, investment, legal, tax, or insurance advice. Nothing on this website should be construed as a recommendation to buy, sell, or hold any financial product or asset.</p>
        <p><strong>No Professional Relationship.</strong> Reading this website does not create a financial advisor, attorney, or insurance agent–client relationship between you and PolicyGlobal or any of its contributors.</p>
        <p><strong>Third-Party Sources.</strong> PolicyGlobal aggregates and summarizes information from publicly available third-party sources. While we make every effort to ensure accuracy, we cannot guarantee the completeness, timeliness, or correctness of any information presented. Original sources should always be consulted.</p>
        <p><strong>Affiliate &amp; Advertising Disclosure.</strong> PolicyGlobal may earn revenue through display advertising and may in the future include affiliate links. Advertisers do not influence our editorial content. All advertising is clearly labelled.</p>
        <p><strong>Forward-Looking Statements.</strong> Some articles may include projections or forecasts from third-party analysts. These are not guarantees of future outcomes and should not be relied upon for decision-making.</p>
        <p><strong>Consult a Professional.</strong> Before making any financial, insurance, or investment decisions, please consult a qualified, licensed professional in your jurisdiction.</p>
        <p className="text-sm text-slate-500">Last updated: June 10, 2026</p>
      </div>
    </div>
  );
}
