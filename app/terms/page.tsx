import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'PolicyGlobal Terms of Use — the rules governing your use of our website and content.',
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Breadcrumbs crumbs={[{ label: 'Terms of Use' }]} />
      <div className="mt-6 mb-8 p-8 rounded-2xl text-white"
        style={{ background: 'linear-gradient(135deg, #0A1628, #162444)', border: '1px solid rgba(201,168,76,0.2)' }}>
        <p className="text-gold-400 font-mono text-xs uppercase tracking-widest mb-2">Legal</p>
        <h1 className="font-serif font-bold text-4xl">Terms of Use</h1>
      </div>
      <div className="prose max-w-none space-y-5 text-slate-700">
        {[
          ['Acceptance of Terms', 'By accessing or using PolicyGlobal, you agree to be bound by these Terms of Use. If you do not agree, please do not use this website.'],
          ['Content Use', 'All content on PolicyGlobal is protected by copyright. You may read and share articles for personal, non-commercial purposes with attribution. Republication, modification, or commercial use of our content without prior written permission is prohibited.'],
          ['No Financial Advice', 'Nothing on PolicyGlobal constitutes financial, investment, insurance, or legal advice. See our full Disclaimer for details.'],
          ['Third-Party Links', 'PolicyGlobal links to third-party sources for attribution and reader reference. We are not responsible for the content, accuracy, or privacy practices of linked websites.'],
          ['Limitation of Liability', 'PolicyGlobal and its contributors are not liable for any direct, indirect, incidental, or consequential damages arising from your use of this website or reliance on any content published here.'],
          ['Governing Law', 'These Terms are governed by applicable law. Disputes shall be subject to the exclusive jurisdiction of the competent courts.'],
          ['Modifications', 'We reserve the right to modify these Terms at any time. Continued use of the website following any changes constitutes acceptance of the revised Terms.'],
        ].map(([title, body]) => (
          <div key={title}>
            <h2 className="font-serif font-bold text-navy-900 text-xl mb-2" style={{ color: '#0A1628' }}>{title}</h2>
            <p>{body}</p>
          </div>
        ))}
        <p className="text-sm text-slate-500">Last updated: June 10, 2026</p>
      </div>
    </div>
  );
}
