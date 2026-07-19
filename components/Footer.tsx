import Link from 'next/link';
import { CATEGORIES, COUNTRIES } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="text-slate-300 mt-16"
      style={{ background: 'linear-gradient(180deg, #0A1628 0%, #04090F 100%)' }}
    >
      {/* Trust Bar */}
      <div className="border-t border-b border-gold-700 border-opacity-30 py-4"
        style={{ borderColor: 'rgba(201,168,76,0.25)' }}>
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-6 text-xs font-mono text-slate-400 text-center">
          <span className="flex items-center gap-2">
            <span className="text-green-400">✓</span> Verified from original sources
          </span>
          <span className="flex items-center gap-2">
            <span className="text-gold-400">◆</span> No AI-generated claims without citation
          </span>
          <span className="flex items-center gap-2">
            <span className="text-blue-400">ℹ</span> Informational only — not financial advice
          </span>
          <span className="flex items-center gap-2">
            <span className="text-slate-400">🔒</span> Editorial independence maintained
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded flex items-center justify-center text-navy-900 font-bold text-sm"
                style={{ background: 'linear-gradient(135deg, #E0B84A, #F0D080)' }}>
                PR
              </div>
              <span className="font-serif font-bold text-white text-lg">PolicyRix</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Your trusted source for global insurance and finance intelligence. Coverage spanning
              120+ countries, verified daily by our editorial desk.
            </p>
            <p className="text-gold-500 text-xs font-mono uppercase tracking-widest">
              Est. 2026 · Global Coverage
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Categories</h4>
            <ul className="space-y-2">
              {CATEGORIES.map((c) => (
                <li key={c.slug}>
                  <Link href={`/category/${c.slug}`}
                    className="text-slate-400 hover:text-gold-400 text-sm transition-colors">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Countries */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">By Country</h4>
            <ul className="space-y-2">
              {COUNTRIES.map((c) => (
                <li key={c.slug}>
                  <Link href={`/country/${c.slug}`}
                    className="text-slate-400 hover:text-gold-400 text-sm transition-colors">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Contact', href: '/contact' },
                { label: 'Disclaimer', href: '/disclaimer' },
                { label: 'Privacy Policy', href: '/privacy-policy' },
                { label: 'Terms of Use', href: '/terms' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href}
                    className="text-slate-400 hover:text-gold-400 text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-navy-700 pt-6 mb-6" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          <p className="text-slate-500 text-xs leading-relaxed">
            <strong className="text-slate-400">Important Disclaimer:</strong> PolicyRix publishes
            informational news and analysis sourced from publicly available, verified third-party
            sources. Nothing on this website constitutes financial, investment, legal, or insurance
            advice. Always consult a qualified professional before making financial decisions.
            PolicyRix is not affiliated with any insurance company, financial institution, or
            government regulatory body. We may display advertising; advertisers do not influence
            our editorial content.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-slate-500">
          <p>© {currentYear} PolicyRix. All rights reserved.</p>
          <p className="font-mono">Verified · Independent · Informational</p>
        </div>
      </div>
    </footer>
  );
}