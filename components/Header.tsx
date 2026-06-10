'use client';
import Link from 'next/link';
import { useState } from 'react';
import { CATEGORIES, COUNTRIES } from '@/lib/constants';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Daily Archive', href: '/daily/2026-06-10' },
  { label: 'About', href: '/about' },
  { label: 'Disclaimer', href: '/disclaimer' },
];

const TICKER_ITEMS = [
  '🇺🇸 US 30-yr mortgage rate: 6.55% — Bankrate, June 10',
  '🇯🇵 BOJ June rate hike: 80% market probability — CNBC',
  '🇮🇳 India opens insurance to 100% FDI under automatic route',
  '🇺🇸 Fed holds rates at 3.50–3.75% — third consecutive hold',
  '🌍 Global cyber insurance market: $33.4B projected for 2026',
  '🇬🇧 FCA: Insurance premium finance APRs down 4.1% since 2022',
  '🇰🇷 DB Insurance completes $1.65B Fortegra acquisition',
  '🇺🇸 Medicaid cuts: CBO estimates 11.8M to lose coverage',
  '🇦🇺 APRA CPS 230 amendments effective July 1, 2026',
  '🇩🇪 BaFin launches dedicated cyber insurance reporting class',
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const [cntOpen, setCntOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50">
      {/* ── Ticker ── */}
      <div className="ticker-wrapper py-1.5">
        <div className="ticker-track text-xs font-mono text-gold-400 tracking-wide">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="mx-10">{item}</span>
          ))}
        </div>
      </div>

      {/* ── Brand Bar ── */}
      <div
        className="bg-navy-900 border-b border-gold-600"
        style={{ background: 'linear-gradient(135deg, #04090F 0%, #0A1628 60%, #0F1E38 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className="w-9 h-9 rounded flex items-center justify-center text-navy-900 font-bold text-base"
              style={{ background: 'linear-gradient(135deg, #E0B84A, #F0D080)' }}
            >
              PG
            </div>
            <div>
              <p
                className="font-serif font-bold text-white text-xl leading-none tracking-wide group-hover:text-gold-400 transition-colors"
              >
                PolicyGlobal
              </p>
              <p className="text-gold-500 text-[10px] font-mono uppercase tracking-widest">
                Insurance &amp; Finance Intelligence
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-slate-300 hover:text-gold-400 text-sm font-medium px-3 py-2 rounded transition-colors"
              >
                {l.label}
              </Link>
            ))}

            {/* Categories dropdown */}
            <div className="relative" onMouseLeave={() => setCatOpen(false)}>
              <button
                onMouseEnter={() => { setCatOpen(true); setCntOpen(false); }}
                className="text-slate-300 hover:text-gold-400 text-sm font-medium px-3 py-2 rounded transition-colors flex items-center gap-1"
              >
                Categories
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {catOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-navy-800 border border-navy-700 rounded-lg shadow-2xl py-1 z-50"
                  style={{ background: '#0F1E38' }}>
                  {CATEGORIES.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/category/${c.slug}`}
                      className="block px-4 py-2 text-sm text-slate-300 hover:text-gold-400 hover:bg-navy-700 transition-colors"
                      onClick={() => setCatOpen(false)}
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Countries dropdown */}
            <div className="relative" onMouseLeave={() => setCntOpen(false)}>
              <button
                onMouseEnter={() => { setCntOpen(true); setCatOpen(false); }}
                className="text-slate-300 hover:text-gold-400 text-sm font-medium px-3 py-2 rounded transition-colors flex items-center gap-1"
              >
                Countries
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {cntOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-navy-800 border border-navy-700 rounded-lg shadow-2xl py-1 z-50"
                  style={{ background: '#0F1E38' }}>
                  {COUNTRIES.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/country/${c.slug}`}
                      className="block px-4 py-2 text-sm text-slate-300 hover:text-gold-400 hover:bg-navy-700 transition-colors"
                      onClick={() => setCntOpen(false)}
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-navy-700 px-4 pb-4" style={{ background: '#0A1628' }}>
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href}
                className="block text-slate-300 hover:text-gold-400 py-2 text-sm border-b border-navy-700"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <p className="text-gold-500 text-xs font-mono uppercase tracking-widest mt-3 mb-1">Categories</p>
            {CATEGORIES.slice(0, 6).map((c) => (
              <Link key={c.slug} href={`/category/${c.slug}`}
                className="block text-slate-300 hover:text-gold-400 py-1.5 text-sm"
                onClick={() => setMenuOpen(false)}
              >
                {c.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* ── Category Quick Bar ── */}
      <div className="bg-white border-b border-gray-200 hidden md:block">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-0 overflow-x-auto scrollbar-none">
            {CATEGORIES.map((c) => (
              <Link
                key={c.slug}
                href={`/category/${c.slug}`}
                className="whitespace-nowrap text-xs font-medium text-slate-600 hover:text-navy-900 px-3 py-2.5 border-b-2 border-transparent hover:border-gold-500 transition-all"
              >
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
