'use client';

import { useState, useEffect } from 'react';
import { FileText, Zap, RefreshCw, Clock, CheckCircle, XCircle } from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────
type Article = { title?: string; date?: string; slug?: string };

type ReindexResult = {
  successful: number;
  failed: number;
  articlesProcessed: number;
  lastRun: string;
  message?: string;
};

type AnalyticsData = {
  connected: boolean;
  totalSessions: number;
  totalViews: number;
  activeUsers: number;
  organicShare: number;
  topPage:     { path: string; title: string; views: number };
  topCountry:  { name: string; users: number; percentage: number };
  bestChannel: { name: string; sessions: number; percentage: number };
  topPages:        Array<{ path: string; title: string; views: number }>;
  topCountries:    Array<{ name: string; users: number; percentage: number }>;
  trafficSources:  Array<{ name: string; sessions: number; percentage: number }>;
};

// ─── Helpers ──────────────────────────────────────────────────
const CHANNEL_COLORS: Record<string, string> = {
  'Organic Search': 'bg-green-500',
  'Direct':         'bg-blue-500',
  'Referral':       'bg-purple-500',
  'Social':         'bg-pink-500',
  'Email':          'bg-yellow-500',
  'Paid Search':    'bg-orange-500',
  'Unassigned':     'bg-slate-500',
};
const channelColor = (name: string) => CHANNEL_COLORS[name] ?? 'bg-cyan-500';

const fmt = (n: number) =>
  n >= 1_000_000 ? `${(n / 1_000_000).toFixed(1)}M`
  : n >= 1_000   ? `${(n / 1_000).toFixed(1)}K`
  : String(n);

// ─── Main Component ───────────────────────────────────────────
export default function AdminPage() {
  const [password,       setPassword]       = useState('');
  const [isAuthed,       setIsAuthed]       = useState(false);
  const [authError,      setAuthError]      = useState('');
  const [articles,       setArticles]       = useState<Article[]>([]);
  const [articlesLoading,setArticlesLoading]= useState(false);
  const [reindexing,     setReindexing]     = useState(false);
  const [reindexResult,  setReindexResult]  = useState<ReindexResult | null>(null);
  const [reindexMessage, setReindexMessage] = useState('');
  const [analytics,      setAnalytics]      = useState<AnalyticsData | null>(null);
  const [analyticsLoading, setAnalyticsLoading] = useState(false);

  const handleLogin = () => {
    if (password === 'Subham000') { setIsAuthed(true); setAuthError(''); }
    else { setAuthError('❌ Wrong password'); setPassword(''); }
  };

  useEffect(() => {
    if (!isAuthed) return;
    fetchArticles();
    fetchAnalytics();
  }, [isAuthed]);

  const fetchArticles = async () => {
    setArticlesLoading(true);
    try {
      const res  = await fetch('/api/recent-articles');
      if (!res.ok) throw new Error();
      const json = await res.json();
      setArticles(Array.isArray(json) ? json : Array.isArray(json.articles) ? json.articles : []);
    } catch { setArticles([]); }
    finally { setArticlesLoading(false); }
  };

  const fetchAnalytics = async () => {
    setAnalyticsLoading(true);
    try {
      const res  = await fetch('/api/analytics');
      const data = await res.json();
      setAnalytics(data);
    } catch { setAnalytics(null); }
    finally { setAnalyticsLoading(false); }
  };

  const handleReindex = async () => {
    setReindexing(true);
    setReindexMessage('🔄 Notifying Google about recent articles...');
    setReindexResult(null);
    try {
      const res  = await fetch('/api/reindex', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: 'Bearer policyrix2026secret' },
      });
      const data = await res.json();
      if (res.ok) {
        setReindexResult({
          successful:        data.successful ?? 0,
          failed:            data.failed ?? 0,
          articlesProcessed: data.articlesProcessed ?? 0,
          lastRun:           new Date().toLocaleString(),
          message:           data.message,
        });
        setReindexMessage(`✓ ${data.message || `Successfully indexed ${data.successful} URLs`}`);
      } else {
        setReindexMessage(`❌ ${data.error || 'Reindex failed'}`);
      }
    } catch (err) {
      setReindexMessage(`❌ ${err instanceof Error ? err.message : 'Unknown error'}`);
    } finally { setReindexing(false); }
  };

  // ── Login ──────────────────────────────────────────────────
  if (!isAuthed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-slate-900/80 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              PolicyRix Admin
            </h1>
            <p className="text-slate-400">Dashboard Login</p>
          </div>
          <input
            type="password" placeholder="Enter admin password" value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
            className="w-full bg-slate-800/50 border border-blue-500/20 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500/50 transition mb-4"
          />
          <button onClick={handleLogin}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 rounded-lg transition">
            Login
          </button>
          {authError && <p className="text-red-400 mt-4 text-center text-sm">{authError}</p>}
        </div>
      </div>
    );
  }

  const isConnected = analytics?.connected === true;

  // ── Dashboard ──────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">

      {/* ── Header ── */}
      <div className="sticky top-0 z-50 border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-blue-400">📊 PolicyRix Admin Dashboard</h1>
            <p className="text-xs text-slate-500 mt-1">Indexing & Content Management</p>
          </div>
          <div className="flex items-center gap-3">
            {isConnected && (
              <span className="text-xs bg-green-500/20 text-green-300 border border-green-500/30 px-3 py-1 rounded-full">
                ● GA4 Live
              </span>
            )}
            <button onClick={() => setIsAuthed(false)}
              className="px-4 py-2 text-sm text-red-400 hover:text-red-300 border border-red-500/20 rounded-lg hover:bg-red-500/10 transition">
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">

        {/* ── [NEW] Analytics Overview Bar ── */}
        {isConnected ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: '🏠 Top Page',     value: analytics!.topPage.title,         sub: `${fmt(analytics!.topPage.views)} views`,        color: 'text-orange-300' },
              { label: '🌍 Top Country',  value: analytics!.topCountry.name,        sub: `${fmt(analytics!.topCountry.users)} active users`, color: 'text-blue-300'   },
              { label: '📊 Best Channel', value: analytics!.bestChannel.name,       sub: `${fmt(analytics!.bestChannel.sessions)} sessions`, color: 'text-purple-300' },
              { label: '🔍 Organic Share',value: `${analytics!.organicShare}%`,     sub: 'of total traffic',                              color: 'text-green-300'  },
            ].map(({ label, value, sub, color }) => (
              <div key={label} className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-4 hover:border-slate-600/50 transition">
                <p className="text-xs text-slate-500 mb-2">{label}</p>
                <p className={`text-base font-bold ${color} truncate`}>{value}</p>
                <p className="text-xs text-slate-400 mt-1">{sub}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 flex items-center justify-between">
            <div>
              <p className="text-yellow-300 font-semibold text-sm">📊 Google Analytics not connected</p>
              <p className="text-yellow-400/70 text-xs mt-1">
                Add <code className="bg-slate-800 px-1 rounded">GA4_PROPERTY_ID</code> to Vercel env vars to see live traffic data
              </p>
            </div>
            <a href="https://vercel.com/dashboard" target="_blank"
              className="text-xs bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 px-3 py-2 rounded-lg hover:bg-yellow-500/30 transition whitespace-nowrap ml-4">
              Connect →
            </a>
          </div>
        )}

        {/* ── [NEW] Live Performance Metrics ── */}
        {isConnected && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Active Users',  value: fmt(analytics!.activeUsers),    icon: '👥', from: 'from-blue-600/20',   border: 'border-blue-500/30',   text: 'text-blue-400'   },
              { label: 'Sessions (7d)', value: fmt(analytics!.totalSessions),  icon: '📈', from: 'from-green-600/20',  border: 'border-green-500/30',  text: 'text-green-400'  },
              { label: 'Page Views',    value: fmt(analytics!.totalViews),     icon: '👁️', from: 'from-purple-600/20', border: 'border-purple-500/30', text: 'text-purple-400' },
              { label: 'Organic Share', value: `${analytics!.organicShare}%`, icon: '🔍', from: 'from-cyan-600/20',   border: 'border-cyan-500/30',   text: 'text-cyan-400'   },
            ].map(({ label, value, icon, from, border, text }) => (
              <div key={label} className={`bg-gradient-to-br ${from} to-transparent border ${border} rounded-xl p-5`}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-400 mb-1">{label}</p>
                    <p className={`text-3xl font-bold ${text}`}>{analyticsLoading ? '…' : value}</p>
                  </div>
                  <span className="text-3xl opacity-30">{icon}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── Existing Stats Row ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-blue-600/20 to-blue-700/20 border border-blue-500/30 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-300 mb-1">Total Articles</p>
                <p className="text-3xl font-bold text-blue-400">{articlesLoading ? '…' : articles.length}</p>
                <p className="text-xs text-blue-300 mt-1">All time</p>
              </div>
              <FileText className="w-12 h-12 text-blue-500/30" />
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-600/20 to-green-700/20 border border-green-500/30 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-300 mb-1">Notified Google</p>
                <p className="text-3xl font-bold text-green-400">{reindexResult ? reindexResult.successful : '—'}</p>
                <p className="text-xs text-green-300 mt-1">Last 3 days</p>
              </div>
              <Zap className="w-12 h-12 text-green-500/30" />
            </div>
          </div>
          <div className="bg-gradient-to-br from-red-600/20 to-red-700/20 border border-red-500/30 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-red-300 mb-1">Failed URLs</p>
                <p className="text-3xl font-bold text-red-400">{reindexResult ? reindexResult.failed : '—'}</p>
                <p className="text-xs text-red-300 mt-1">Last run</p>
              </div>
              <Clock className="w-12 h-12 text-red-500/30" />
            </div>
          </div>
        </div>

        {/* ── [NEW] Top Pages + Traffic Sources ── */}
        {isConnected && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Top Pages */}
            <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6">
              <h2 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                📄 Top Pages by Views
                <span className="text-xs text-slate-500 font-normal">(Last 7 days)</span>
              </h2>
              <div className="space-y-3">
                {analytics!.topPages.map((page, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <span className="text-slate-600 text-xs w-5 flex-shrink-0 font-mono">#{i + 1}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-slate-200 text-sm font-medium truncate group-hover:text-white transition">
                        {page.title.length > 40 ? page.title.substring(0, 40) + '…' : page.title}
                      </p>
                      <p className="text-slate-600 text-xs truncate">{page.path}</p>
                    </div>
                    <span className="text-green-400 text-sm font-bold flex-shrink-0">{fmt(page.views)}</span>
                  </div>
                ))}
                {(!analytics!.topPages || analytics!.topPages.length === 0) && (
                  <p className="text-slate-500 text-sm text-center py-4">No page data yet</p>
                )}
              </div>
            </div>

            {/* Traffic Sources */}
            <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6">
              <h2 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                📊 Traffic Sources
                <span className="text-xs text-slate-500 font-normal">(Last 7 days)</span>
              </h2>
              <div className="space-y-4">
                {analytics!.trafficSources.map((src, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-slate-300 font-medium">{src.name}</span>
                      <span className="text-slate-400">{fmt(src.sessions)} sessions</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div className={`h-2 rounded-full ${channelColor(src.name)} transition-all`}
                        style={{ width: `${src.percentage}%` }} />
                    </div>
                  </div>
                ))}
                {(!analytics!.trafficSources || analytics!.trafficSources.length === 0) && (
                  <p className="text-slate-500 text-sm text-center py-4">No traffic data yet</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ── Existing: Recent Articles + Reindex ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-slate-900/50 border border-slate-700/50 rounded-xl p-6">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-cyan-400" /> Recent Articles
            </h2>
            {articlesLoading ? (
              <div className="text-center py-8">
                <RefreshCw className="w-6 h-6 text-blue-400 animate-spin mx-auto mb-2" />
                <p className="text-slate-400">Loading articles...</p>
              </div>
            ) : articles.length === 0 ? (
              <p className="text-center py-8 text-slate-400">No articles found</p>
            ) : (
              <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
                {articles.slice(0, 10).map((article, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition">
                    <div className="min-w-0">
                      <p className="font-medium text-slate-200 truncate">{article.title || 'Untitled'}</p>
                      <p className="text-xs text-slate-500 mt-1">{article.date || 'No date'}</p>
                    </div>
                    <span className="text-xs bg-green-500/20 text-green-300 px-3 py-1 rounded-full whitespace-nowrap ml-2">
                      Published
                    </span>
                  </div>
                ))}
                {articles.length > 10 && (
                  <p className="text-center text-slate-500 text-sm py-2">
                    +{articles.length - 10} more articles
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Reindex Control */}
          <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" /> Reindex Control
            </h2>
            <div className="space-y-4">
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                <p className="text-xs text-green-300 mb-1 font-semibold flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" /> SUCCESS
                </p>
                <p className="text-2xl font-bold text-green-400">{reindexResult?.successful ?? 0}</p>
                <p className="text-xs text-green-300 mt-1">URLs Notified</p>
              </div>
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                <p className="text-xs text-red-300 mb-1 font-semibold flex items-center gap-1">
                  <XCircle className="w-3 h-3" /> FAILED
                </p>
                <p className="text-2xl font-bold text-red-400">{reindexResult?.failed ?? 0}</p>
                <p className="text-xs text-red-300 mt-1">URLs Failed</p>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                <p className="text-xs text-blue-300 mb-1 font-semibold">LAST RUN</p>
                <p className="text-xs text-blue-300 break-words">{reindexResult?.lastRun ?? 'Not run yet'}</p>
              </div>
              <button onClick={handleReindex} disabled={reindexing}
                className={`w-full font-bold py-3 px-4 rounded-lg transition flex items-center justify-center gap-2 ${
                  reindexing ? 'bg-slate-600 text-slate-400 cursor-not-allowed'
                             : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white'
                }`}>
                <RefreshCw className={`w-4 h-4 ${reindexing ? 'animate-spin' : ''}`} />
                {reindexing ? 'Reindexing...' : 'Trigger Reindex Now'}
              </button>
              {reindexMessage && (
                <div className={`p-3 rounded-lg text-sm font-medium ${
                  reindexMessage.startsWith('✓') ? 'bg-green-500/10 text-green-300 border border-green-500/20'
                  : reindexMessage.startsWith('🔄') ? 'bg-blue-500/10 text-blue-300 border border-blue-500/20'
                  : 'bg-red-500/10 text-red-300 border border-red-500/20'
                }`}>
                  {reindexMessage}
                </div>
              )}
              <p className="text-xs text-slate-500 text-center">
                Notifies Google about articles from the last 3 days
              </p>
            </div>
          </div>
        </div>

        {/* ── [NEW] Top Countries ── */}
        {isConnected && analytics!.topCountries.length > 0 && (
          <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6">
            <h2 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
              🌍 Top Countries
              <span className="text-xs text-slate-500 font-normal">(Last 7 days)</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {analytics!.topCountries.map((country, i) => (
                <div key={i}>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-slate-300 font-medium">{country.name}</span>
                    <span className="text-slate-400">{fmt(country.users)} users</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div className="h-2 rounded-full bg-blue-500 transition-all"
                      style={{ width: `${country.percentage}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Existing: Quick Links ── */}
        <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6">
          <h2 className="text-lg font-bold text-white mb-6">🔗 Quick Links</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: '🔍', label: 'Search Console', href: 'https://search.google.com/search-console' },
              { icon: '📊', label: 'Analytics',       href: 'https://analytics.google.com'            },
              { icon: '▲',  label: 'Vercel',          href: 'https://vercel.com/dashboard'             },
              { icon: '🏠', label: 'Homepage',        href: '/'                                        },
              { icon: '🐱', label: 'GitHub',          href: 'https://github.com/skmohanty2628/PolicyGlobal' },
              { icon: '📝', label: 'Sitemap',         href: '/sitemap.xml'                             },
              { icon: '🤖', label: 'Robots.txt',      href: '/robots.txt'                              },
              { icon: 'ℹ️', label: 'About',            href: '/about'                                   },
            ].map(({ icon, label, href }) => (
              <a key={label} href={href}
                target={href.startsWith('/') ? '_self' : '_blank'} rel="noopener noreferrer"
                className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-4 text-center hover:bg-slate-800/50 hover:border-blue-500/30 transition group">
                <div className="text-2xl mb-2 group-hover:scale-110 transition">{icon}</div>
                <p className="text-xs font-semibold text-slate-300 group-hover:text-blue-400 transition">{label}</p>
              </a>
            ))}
          </div>
        </div>

        {/* ── Existing: SEO Status ── */}
        <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6">
          <h2 className="text-lg font-bold text-white mb-4">✓ SEO Status</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {['Sitemap Active','Robots.txt Ready','SSL Enabled','Mobile Optimized',
              'Meta Tags','Schema Markup','Fast Loading','Indexed Pages'].map((text) => (
              <div key={text}
                className="p-3 rounded-lg text-center text-xs font-semibold bg-green-500/10 text-green-300 border border-green-500/20">
                ✓ {text}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-700/50 pt-6 text-center">
          <p className="text-xs text-slate-600">
            PolicyRix Admin Dashboard © 2026 | Last Updated: {new Date().toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}