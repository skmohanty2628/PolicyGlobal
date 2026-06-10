'use client';
import { useState } from 'react';

export default function NewsletterBox() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSent(true); setEmail(''); }
  };

  return (
    <section
      className="rounded-2xl p-8 md:p-10 text-center my-10"
      style={{ background: 'linear-gradient(135deg, #0A1628 0%, #162444 100%)', border: '1px solid rgba(201,168,76,0.25)' }}
    >
      <p className="text-gold-500 text-xs font-mono uppercase tracking-widest mb-2">Daily Intelligence</p>
      <h2 className="font-serif font-bold text-white text-2xl md:text-3xl mb-3">
        The PolicyGlobal Daily Brief
      </h2>
      <p className="text-slate-400 text-sm max-w-md mx-auto mb-6 leading-relaxed">
        Get the top 5 insurance and finance stories every morning, curated and verified by our editorial desk.
        No spam. Unsubscribe anytime.
      </p>
      {sent ? (
        <div className="inline-flex items-center gap-2 text-green-400 font-semibold text-sm">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd" />
          </svg>
          You&apos;re subscribed! Check your inbox.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 px-4 py-3 rounded-lg bg-navy-800 border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2"
            style={{ background: '#0F1E38', borderColor: 'rgba(201,168,76,0.3)' }}
          />
          <button type="submit"
            className="px-6 py-3 rounded-lg font-bold text-sm transition-all hover:opacity-90 flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #C9A84C, #E0B84A)', color: '#0A1628' }}>
            Subscribe Free
          </button>
        </form>
      )}
      <p className="text-slate-600 text-xs mt-4">
        Informational newsletter only. Not financial advice. See our <a href="/disclaimer" className="underline hover:text-gold-400">disclaimer</a>.
      </p>
    </section>
  );
}
