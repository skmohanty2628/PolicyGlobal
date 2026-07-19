import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Contact PolicyRix',
  description: 'Contact the PolicyRix editorial team for news tips, corrections, or advertising inquiries.',
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Breadcrumbs crumbs={[{ label: 'Contact' }]} />
      <div className="mt-6 mb-8 p-8 rounded-2xl text-white"
        style={{ background: 'linear-gradient(135deg, #0A1628, #162444)', border: '1px solid rgba(201,168,76,0.2)' }}>
        <p className="text-gold-400 font-mono text-xs uppercase tracking-widest mb-2">Get in Touch</p>
        <h1 className="font-serif font-bold text-4xl">Contact Us</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-5">
          {[
            { title: 'Editorial & News Tips', desc: 'Submit a news tip, correction, or story suggestion to our editorial desk.', email: 'editorial@policyglobal.com' },
            { title: 'Advertising', desc: 'For advertising and sponsorship inquiries across our digital properties.', email: 'ads@policyglobal.com' },
            { title: 'General Enquiries', desc: 'For all other questions, feedback, and partnership requests.', email: 'hello@policyglobal.com' },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-serif font-bold text-navy-900 text-base mb-1" style={{ color: '#0A1628' }}>{item.title}</h3>
              <p className="text-sm text-slate-500 mb-2">{item.desc}</p>
              <a href={`mailto:${item.email}`} className="text-sm font-mono text-gold-600 hover:underline">{item.email}</a>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h3 className="font-serif font-bold text-navy-900 text-lg mb-4" style={{ color: '#0A1628' }}>Send a Message</h3>
          <div className="space-y-4">
            <input type="text" placeholder="Your name" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold-400" />
            <input type="email" placeholder="Your email" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold-400" />
            <select className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 text-slate-600">
              <option>Editorial enquiry</option>
              <option>Advertising</option>
              <option>News tip</option>
              <option>Correction request</option>
              <option>General feedback</option>
            </select>
            <textarea placeholder="Your message..." rows={4} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 resize-none" />
            <button className="w-full py-3 rounded-lg font-bold text-sm text-navy-900 transition-all hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #C9A84C, #E0B84A)' }}>
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}