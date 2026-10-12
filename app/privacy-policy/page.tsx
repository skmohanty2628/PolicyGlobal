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
          ['Who we are', 'PolicyRix (policyrix.com) is an independent insurance and finance news publication. You can reach us at hello@policyrix.com for any privacy question.'],
          ['Information We Collect', 'When you visit PolicyRix we collect non-personal technical data such as browser type, device type, approximate location (country/region), referring URL and pages viewed. If you subscribe to our newsletter we collect your email address, and if you use our contact form we collect the name, email address and message you send. Our calculators run entirely in your browser; the numbers you type into them are not sent to or stored on our servers.'],
          ['How We Use Your Information', 'We use this data to operate and improve the site, send newsletters you requested, respond to messages, measure audience and keep the site secure. We do not sell your personal information.'],
          ['Cookies and Similar Technologies', 'We use essential cookies/local storage (for example to remember your cookie choice) and, with your consent, analytics and advertising cookies. A banner on your first visit lets you accept or reject non-essential cookies; you can change your decision at any time by clearing this site\u2019s data in your browser. We support Google Consent Mode, so Google tags adjust their behaviour to your choice.'],
          ['Google Analytics', 'We use Google Analytics 4 to understand how readers use the site. It may set cookies and collect IP-derived and usage data subject to your consent. Learn more at policies.google.com/technologies/partner-sites.'],
          ['Advertising and Google AdSense', 'We may show ads served by Google AdSense and other Google advertising products. Third-party vendors, including Google, use cookies to serve ads based on a user\u2019s prior visits to this and other websites. Google\u2019s use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the internet. You may opt out of personalised advertising by visiting Google Ads Settings (adssettings.google.com) or aboutads.info. In the EEA, UK and Switzerland, personalised ads are only shown with your consent.'],
          ['Third-Party Links and Content', 'Our articles link to original sources and some pages include images from third parties such as Unsplash. Those sites have their own privacy practices that we do not control.'],
          ['Data Retention and Security', 'Newsletter and contact details are kept only as long as needed to provide the service or answer your enquiry. We use industry-standard safeguards, but no internet transmission is completely secure.'],
          ['Your Rights', 'Depending on where you live (for example the EEA, UK, or California) you may have the right to access, correct, delete or port your personal data, to object to or restrict processing, and to opt out of the sale or sharing of personal information. We do not sell personal information. To exercise a right, email privacy@policyrix.com. You can unsubscribe from the newsletter at any time.'],
          ['Children', 'PolicyRix is not directed to children under 16 and we do not knowingly collect their personal data.'],
          ['Changes to this Policy', 'We may update this policy from time to time. The date below shows the latest revision.'],
        ].map(([title, body]) => (
          <div key={title}>
            <h2 className="font-serif font-bold text-navy-900 text-xl mb-2" style={{ color: '#0A1628' }}>{title}</h2>
            <p>{body}</p>
          </div>
        ))}
        <p className="text-sm text-slate-500">Last updated: October 12, 2026</p>
      </div>
    </div>
  );
}