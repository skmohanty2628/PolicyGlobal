'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

declare global {
  interface Window { gtag?: (...args: unknown[]) => void }
}

const KEY = 'pr-consent';

function update(granted: boolean) {
  const v = granted ? 'granted' : 'denied';
  window.gtag?.('consent', 'update', {
    analytics_storage: v, ad_storage: v, ad_user_data: v, ad_personalization: v,
  });
}

/** Lightweight consent banner wired to Google Consent Mode v2. Reject is as easy as Accept. */
export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try { if (!localStorage.getItem(KEY)) setShow(true); } catch { setShow(true); }
  }, []);

  const choose = (granted: boolean) => {
    try { localStorage.setItem(KEY, granted ? 'granted' : 'denied'); } catch {}
    update(granted);
    setShow(false);
  };

  if (!show) return null;
  return (
    <div role="dialog" aria-label="Cookie consent"
      className="fixed bottom-0 inset-x-0 z-[60] p-3 sm:p-4">
      <div className="max-w-3xl mx-auto rounded-xl shadow-2xl p-4 sm:p-5 flex flex-col sm:flex-row gap-4 sm:items-center"
        style={{ background: '#0A1628', border: '1px solid rgba(201,168,76,0.35)' }}>
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed flex-1">
          We use cookies for analytics and, once approved, to show and measure advertising.
          You can accept or reject non-essential cookies. See our{' '}
          <Link href="/privacy-policy" className="underline text-gold-400">Privacy Policy</Link>.
        </p>
        <div className="flex gap-2 flex-shrink-0">
          <button onClick={() => choose(false)}
            className="px-4 py-2 rounded-lg text-sm font-semibold border text-slate-200 hover:bg-white/5"
            style={{ borderColor: 'rgba(148,163,184,0.4)' }}>
            Reject
          </button>
          <button onClick={() => choose(true)}
            className="px-4 py-2 rounded-lg text-sm font-bold"
            style={{ background: 'linear-gradient(135deg, #C9A84C, #E0B84A)', color: '#0A1628' }}>
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
