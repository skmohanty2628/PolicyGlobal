'use client';
import { useState } from 'react';

export default function ShareButtons({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const enc = encodeURIComponent;
  const links = [
    { label: 'X', href: `https://twitter.com/intent/tweet?url=${enc(url)}&text=${enc(title)}` },
    { label: 'LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}` },
    { label: 'WhatsApp', href: `https://wa.me/?text=${enc(title + ' ' + url)}` },
  ];
  const copy = async () => {
    try { await navigator.clipboard.writeText(url); setCopied(true); setTimeout(() => setCopied(false), 1800); } catch {}
  };
  const cls = 'text-xs font-semibold px-3 py-1.5 rounded-full border border-gray-200 text-slate-600 hover:border-gold-500 hover:text-gold-600 transition-colors';
  return (
    <div className="flex flex-wrap items-center gap-2" aria-label="Share">
      <span className="text-xs text-slate-400 mr-1">Share</span>
      {links.map((l) => (
        <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className={cls}>{l.label}</a>
      ))}
      <button onClick={copy} className={cls}>{copied ? 'Copied ✓' : 'Copy link'}</button>
    </div>
  );
}
