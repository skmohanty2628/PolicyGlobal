import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'PolicyRix Privacy Policy — how we collect, use, and protect your information.',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Breadcrumbs crumbs={[{ label: 'Privacy Policy' }]} />
      <div className="mt-6 mb-8 p-8 rounded-2xl text-white"
        style={{ background: 'linear-gradient(135deg, #0A1628, #162444)', border: '1px solid rgba(201,168,76,0.2)' }}>
        <p className="text-gold-400 font-mono text-xs uppercase tracking-widest mb-2">Legal</p>
        <h1 className="font-serif font-bold text-4xl">Privacy Policy</h1>
      </div>
      <div className="prose max-w-none space-y-5 text-slate-700">
        {[
          ['Information We Collect', 'When you visit PolicyRix, we may collect non-personal information including your browser type, device type, referring URL, and pages visited. If you subscribe to our newsletter, we collect your email address solely to deliver the newsletter.'],
          ['How We Use Your Information', 'We use collected data to improve our website, personalise your experience, send newsletters you have requested, and analyse traffic patterns. We do not sell or rent your personal information to third parties.'],
          ['Cookies', 'PolicyRix uses cookies for essential functionality and analytics. You can disable cookies in your browser settings, though some features may not function correctly.'],
          ['Third-Party Services', 'We may use third-party analytics services (such as Google Analytics) and advertising networks. These services may collect data according to their own privacy policies. We do not control how these services use your data.'],
          ['Data Security', 'We implement industry-standard security measures to protect your information. However, no internet transmission is 100% secure, and we cannot guarantee absolute security.'],
          ['Your Rights', 'You may request access to, correction of, or deletion of any personal information we hold about you by contacting us at privacy@policyglobal.com.'],
          ['Changes to this Policy', 'We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.'],
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