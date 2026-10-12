'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setError('');
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(fd.entries())),
      });
      const data = await res.json();
      if (res.ok && data.success) { setStatus('success'); (e.target as HTMLFormElement).reset(); }
      else { setStatus('error'); setError(data.error || 'Something went wrong.'); }
    } catch {
      setStatus('error'); setError('Network error. Please try again.');
    }
  }

  const field = 'w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold-400';
  if (status === 'success') {
    return <p className="text-green-700 font-semibold text-sm">Thanks — your message has been sent. We aim to reply within two business days.</p>;
  }
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input name="name" type="text" required placeholder="Your name" className={field} />
      <input name="email" type="email" required placeholder="Your email" className={field} />
      <select name="topic" className={`${field} text-slate-600`}>
        <option>Editorial enquiry</option>
        <option>Advertising</option>
        <option>News tip</option>
        <option>Correction request</option>
        <option>General feedback</option>
      </select>
      <textarea name="message" required rows={4} placeholder="Your message..." className={`${field} resize-none`} />
      {/* honeypot */}
      <input name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <button disabled={status === 'loading'} type="submit"
        className="w-full py-3 rounded-lg font-bold text-sm text-navy-900 transition-all hover:opacity-90 disabled:opacity-60"
        style={{ background: 'linear-gradient(135deg, #C9A84C, #E0B84A)' }}>
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
      {status === 'error' && <p className="text-red-600 text-xs">{error}</p>}
    </form>
  );
}
