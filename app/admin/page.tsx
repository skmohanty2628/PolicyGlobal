'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Activity,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  Globe2,
  FileText,
  TrendingUp,
  ExternalLink,
  Search,
  Zap,
  Clock,
  BarChart3,
  Shield,
  ChevronRight,
} from 'lucide-react';

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

function StatCard({ icon: Icon, title, value, subtitle, accent = '#3b82f6', glow = false }) {
  return (
    <div
      className={cn(
        'rounded-lg border border-blue-500/20 bg-slate-900/50 p-4 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500/35',
        glow && 'shadow-[0_0_0_1px_rgba(59,130,246,0.18),0_10px_30px_rgba(59,130,246,0.08)]'
      )}
    >
      <div className="mb-2 flex items-center justify-between">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/5 bg-white/[0.03]" style={{ color: accent }}>
          <Icon size={16} />
        </div>
        <span className="text-[9px] uppercase tracking-[1.5px] text-blue-400/60">{title}</span>
      </div>

      <div className="text-xl font-bold" style={{ color: accent }}>
        {value}
      </div>

      <p className="mt-1 text-sm text-slate-400">{subtitle}</p>
    </div>
  );
}

function SectionTitle({ icon: Icon, children, right }) {
  return (
    <div className="mt-6 mb-3 flex items-center justify-between gap-3 border-b border-blue-500/15 pb-2">
      <h2 className="flex items-center gap-2 text-lg font-bold tracking-wide text-blue-400">
        {Icon ? <Icon size={18} /> : null}
        <span>{children}</span>
      </h2>
      {right ? <div>{right}</div> : null}
    </div>
  );
}

function StatusBadge({ status, text }) {
  const colors = {
    success: 'bg-green-500/20 text-green-300 border-green-500/30',
    warning: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    error: 'bg-red-500/20 text-red-300 border-red-500/30',
    info: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  };

  return (
    <span className={cn('inline-flex items-center gap-1 rounded-full border px-2 py-1 text-[9px] uppercase tracking-[1px] font-semibold', colors[status] || colors.info)}>
      {text}
    </span>
  );
}

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [authed, setAuthed] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [dashboardData, setDashboardData] = useState({
    indexnowStatus: 'checking',
    lastReindex: null,
    sitemap: { discovered: 0, indexed: 0, lastSubmitted: null },
    recentArticles: [],
    gscStatus: 'connecting',
  });

  useEffect(() => {
    if (sessionStorage.getItem('policyrix_admin') === 'true') {
      setAuthed(true);
    }
  }, []);

  const handleLogin = () => {
    if (!password) {
      setError('Password required');
      return;
    }

    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD || password === 'Subham000') {
      setAuthed(true);
      sessionStorage.setItem('policyrix_admin', 'true');
      setError('');
    } else {
      setError('Invalid password');
    }
  };

  useEffect(() => {
    if (!authed) return;

    const fetchDashboardData = async () => {
      setLoading(true);
      try {
        // Fetch IndexNow status
        const keyCheck = await fetch('https://www.policyrix.com/policyrix2026.txt')
          .then((r) => r.ok)
          .catch(() => false);

        // Fetch recent articles
        const articlesData = await fetch('/api/recent-articles')
          .then((r) => (r.ok ? r.json() : { articles: [] }))
          .catch(() => ({ articles: [] }));

        setDashboardData((prev) => ({
          ...prev,
          indexnowStatus: keyCheck ? 'verified' : 'error',
          recentArticles: articlesData.articles || [],
          lastReindex: new Date().toLocaleString(),
        }));
      } catch (err) {
        console.error('Dashboard fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [authed]);

  if (!authed) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 flex items-center justify-center p-4">
        <div className="w-full max-w-sm rounded-lg border border-blue-500/20 bg-slate-900/50 p-6">
          <h1 className="mb-2 text-2xl font-bold text-blue-400">PolicyRix Admin</h1>
          <p className="mb-6 text-sm text-slate-400">Enter password to continue</p>

          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
            className="w-full mb-3 rounded-lg border border-blue-500/20 bg-slate-800 px-4 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
          />

          <button
            onClick={handleLogin}
            className="w-full rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            Login
          </button>

          {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-blue-400">PolicyRix Admin</h1>
            <p className="mt-1 text-slate-400">Dashboard • SEO & Indexing Status</p>
          </div>
          <Link
            href="/"
            className="flex items-center gap-2 rounded-lg border border-blue-500/20 bg-slate-800 px-4 py-2 text-sm text-blue-300 hover:bg-slate-700 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Site
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <StatCard
            icon={Zap}
            title="IndexNow Status"
            value={dashboardData.indexnowStatus === 'verified' ? '✓' : '✗'}
            subtitle="Key verification"
            accent={dashboardData.indexnowStatus === 'verified' ? '#10b981' : '#ef4444'}
            glow={dashboardData.indexnowStatus === 'verified'}
          />
          <StatCard
            icon={Globe2}
            title="Sitemap"
            value={dashboardData.sitemap.discovered || '0'}
            subtitle="Pages discovered"
            accent="#3b82f6"
          />
          <StatCard
            icon={Clock}
            title="Last Reindex"
            value={dashboardData.lastReindex ? 'Done' : 'Pending'}
            subtitle="API status"
            accent="#8b5cf6"
          />
          <StatCard
            icon={FileText}
            title="Recent Articles"
            value={dashboardData.recentArticles.length || '0'}
            subtitle="Last 7 days"
            accent="#f59e0b"
          />
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          {/* IndexNow Section */}
          <div className="rounded-lg border border-blue-500/15 bg-slate-900/30 p-6">
            <SectionTitle icon={Zap}>IndexNow Integration</SectionTitle>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-blue-500/10 bg-slate-800/30 p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-slate-200">Key File Status</h3>
                    <p className="mt-1 text-sm text-slate-400">https://www.policyrix.com/policyrix2026.txt</p>
                  </div>
                  {dashboardData.indexnowStatus === 'verified' && (
                    <StatusBadge status="success" text="Verified" />
                  )}
                  {dashboardData.indexnowStatus === 'error' && <StatusBadge status="error" text="Error" />}
                </div>
              </div>

              <div className="rounded-lg border border-blue-500/10 bg-slate-800/30 p-4">
                <h3 className="font-semibold text-slate-200">Reindex API</h3>
                <p className="mt-1 text-sm text-slate-400">/api/reindex endpoint</p>
                <button
                  onClick={async () => {
                    try {
                      const res = await fetch('https://www.policyrix.com/api/reindex', {
                        method: 'POST',
                        headers: { Authorization: 'Bearer policyrix2026secret' },
                      });
                      if (res.ok) {
                        const data = await res.json();
                        alert(`✓ Indexed ${data.successful} URLs`);
                      } else {
                        alert('❌ Reindex failed');
                      }
                    } catch (err) {
                      alert('Error: ' + err.message);
                    }
                  }}
                  className="mt-3 rounded bg-blue-600 px-3 py-1 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
                >
                  Trigger Reindex Now
                </button>
              </div>
            </div>
          </div>

          {/* SEO Checklist */}
          <div className="rounded-lg border border-blue-500/15 bg-slate-900/30 p-6">
            <SectionTitle icon={Shield}>SEO Checklist</SectionTitle>
            <div className="grid gap-3">
              {[
                { ok: true, text: '✓ Sitemap created at /sitemap.xml' },
                { ok: true, text: '✓ Robots.txt configured correctly' },
                { ok: true, text: '✓ Domain property verified in Search Console' },
                { ok: true, text: '✓ IndexNow integration active' },
                { ok: dashboardData.indexnowStatus === 'verified', text: '✓ IndexNow key file accessible' },
                { ok: true, text: '✓ Meta descriptions on all articles' },
                { ok: true, text: '✓ Open Graph tags configured' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 rounded-lg border border-blue-500/10 bg-slate-800/20 p-3">
                  {item.ok ? (
                    <CheckCircle2 size={18} className="text-green-400 flex-shrink-0" />
                  ) : (
                    <AlertCircle size={18} className="text-yellow-400 flex-shrink-0" />
                  )}
                  <p className="text-sm text-slate-300">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Articles */}
          <div className="rounded-lg border border-blue-500/15 bg-slate-900/30 p-6">
            <SectionTitle icon={FileText}>Recent Articles</SectionTitle>
            {dashboardData.recentArticles.length === 0 ? (
              <div className="rounded-lg border border-blue-500/10 bg-slate-800/20 p-4 text-center">
                <p className="text-sm text-slate-400">No articles data available</p>
              </div>
            ) : (
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {dashboardData.recentArticles.slice(0, 10).map((article, i) => (
                  <div key={i} className="flex items-center justify-between rounded-lg border border-blue-500/10 bg-slate-800/20 p-3">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-slate-200">{article.title || 'Untitled'}</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">{article.date || 'No date'}</p>
                    </div>
                    <StatusBadge status="success" text="Published" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div className="rounded-lg border border-blue-500/15 bg-slate-900/30 p-6">
            <SectionTitle icon={ExternalLink}>Quick Links</SectionTitle>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { label: 'Search Console', href: 'https://search.google.com/search-console/about?resource_id=sc-domain%3Apolicyrix.com', icon: '🔍' },
                { label: 'Google Analytics', href: 'https://analytics.google.com', icon: '📈' },
                { label: 'Vercel Dashboard', href: 'https://vercel.com/dashboard', icon: '▲' },
                { label: 'Home', href: '/', icon: '🏠' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="rounded-lg border border-blue-500/10 bg-slate-800/20 p-3 text-center transition-all hover:bg-slate-800/40 hover:border-blue-500/20"
                >
                  <div className="mb-1 text-xl">{item.icon}</div>
                  <p className="text-[10px] tracking-wide font-semibold text-slate-400">{item.label}</p>
                </a>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 flex items-center justify-between border-t border-blue-500/10 pt-6">
            <p className="text-[9px] uppercase tracking-[2px] text-slate-600">
              PolicyRix Admin • {new Date().getFullYear()} • SEO & Indexing Dashboard
            </p>

            <button
              onClick={() => {
                sessionStorage.removeItem('policyrix_admin');
                setAuthed(false);
              }}
              className="text-[9px] tracking-widest text-red-600 hover:text-red-500 transition-colors font-semibold"
              type="button"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}