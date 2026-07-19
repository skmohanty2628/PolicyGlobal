'use client';
import { useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function NewsletterBox() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please try again.');
    }
  };

  return (
    <section
      className="rounded-2xl p-8 md:p-10 text-center my-10"
      style={{
        background: 'linear-gradient(135deg, #0A1628 0%, #162444 100%)',
        border: '1px solid rgba(201,168,76,0.25)',
      }}
    >
      <p className="text-gold-500 text-xs font-mono uppercase tracking-widest mb-2">
        Daily Intelligence
      </p>
      <h2 className="font-serif font-bold text-white text-2xl md:text-3xl mb-3">
        The PolicyRix Daily Brief
      </h2>
      <p className="text-slate-400 text-sm max-w-md mx-auto mb-6 leading-relaxed">
        Get the top 5 insurance and finance stories every morning, curated and verified by our
        editorial desk. No spam. Unsubscribe anytime.
      </p>

      {/* Success */}
      {status === 'success' && (
        <div className="inline-flex items-center gap-2 text-green-400 font-semibold text-sm">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd" />
          </svg>
          Subscribed! Check your inbox for a welcome email.
        </div>
      )}

      {/* Form */}
      {status !== 'success' && (
        <>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              disabled={status === 'loading'}
              className="flex-1 px-4 py-3 rounded-lg text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 disabled:opacity-60"
              style={{
                background: '#0F1E38',
                border: '1px solid rgba(201,168,76,0.3)',
              }}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-6 py-3 rounded-lg font-bold text-sm transition-all hover:opacity-90 flex-shrink-0 disabled:opacity-60"
              style={{ background: 'linear-gradient(135deg, #C9A84C, #E0B84A)', color: '#0A1628' }}
            >
              {status === 'loading' ? 'Sending...' : 'Subscribe Free'}
            </button>
          </form>

          {/* Error */}
          {status === 'error' && (
            <p className="text-red-400 text-xs mt-3">{errorMsg}</p>
          )}
        </>
      )}

      <p className="text-slate-600 text-xs mt-4">
        Informational newsletter only. Not financial advice.{' '}
        <a href="/disclaimer" className="underline hover:text-gold-400 transition-colors">
          Disclaimer
        </a>
      </p>
    </section>
  );
}