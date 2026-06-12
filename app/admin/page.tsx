'use client';

import { useState, useEffect } from 'react';
import { BarChart3, TrendingUp, Globe2, FileText, Activity, Clock, Zap, RefreshCw, AlertCircle } from 'lucide-react';

type GSCData = {
  clicks: number;
  impressions: number;
  ctr: string;
  position: string;
  queries: Array<{ keys: string[]; clicks: number; impressions: number; ctr: number; position: number }>;
  period: string;
};

type DashboardAnalytics = {
  gscData: GSCData | null;
  reindexData: {
    successful: number;
    failed: number;
    lastRun: string;
  };
  recentArticles: Array<{ title?: string; date?: string }>;
  loading: boolean;
  gscError: string;
};

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [isAuthed, setIsAuthed] = useState(false);
  const [error, setError] = useState('');
  const [analytics, setAnalytics] = useState<DashboardAnalytics>({
    gscData: null,
    reindexData: { successful: 0, failed: 0, lastRun: 'Never' },
    recentArticles: [],
    loading: true,
    gscError: '',
  });

  const handleLogin = () => {
    if (password === 'Subham000') {
      setIsAuthed(true);
      sessionStorage.setItem('admin', 'true');
    } else {
      setError('Wrong password');
    }
  };

  // Fetch real analytics data
  useEffect(() => {
    if (!isAuthed) return;

    const fetchAnalytics = async () => {
      try {
        setAnalytics((prev) => ({ ...prev, loading: true }));

        // Fetch GSC data
        let gscData: GSCData | null = null;
        try {
          const gscRes = await fetch('/api/gsc');
          if (gscRes.ok) {
            gscData = await gscRes.json();
          }
        } catch (err) {
          console.error('GSC fetch error:', err);
        }

        // Fetch recent articles
        const articlesRes = await fetch('/api/recent-articles')
          .then((r) => (r.ok ? r.json() : { articles: [] }))
          .catch(() => ({ articles: [] }));

        // Fetch reindex status
        const reindexRes = await fetch('/api/reindex', {
          method: 'POST',
          headers: { 'Authorization': 'Bearer policyrix2026secret' },
        })
          .then((r) => (r.ok ? r.json() : { successful: 0, failed: 0 }))
          .catch(() => ({ successful: 0, failed: 0 }));

        setAnalytics((prev) => ({
          ...prev,
          gscData,
          recentArticles: articlesRes.articles || [],
          reindexData: {
            successful: reindexRes.successful || 0,
            failed: reindexRes.failed || 0,
            lastRun: new Date().toLocaleString(),
          },
          loading: false,
          gscError: !gscData ? 'Could not load GSC data - check API' : '',
        }));
      } catch (err) {
        setAnalytics((prev) => ({
          ...prev,
          loading: false,
          gscError: `Error: ${err instanceof Error ? err.message : 'Unknown'}`,
        }));
      }
    };

    fetchAnalytics();
  }, [isAuthed]);

  if (!isAuthed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-slate-900/80 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                PolicyRix Admin
              </h1>
              <p className="text-slate-400">Real-Time Analytics Dashboard</p>
            </div>

            <div className="space-y-4">
              <input
                type="password"
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                className="w-full bg-slate-800/50 border border-blue-500/20 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500/50 transition"
              />
              <button
                onClick={handleLogin}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
              >
                Login
              </button>
            </div>

            {error && <p className="text-red-400 mt-4 text-center text-sm">{error}</p>}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <div className="sticky top-0 z-50 border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-blue-400">📊 Real Analytics Dashboard</h1>
            <p className="text-xs text-slate-500 mt-1">Live GSC, Analytics & API Data</p>
          </div>
          <button
            onClick={() => {
              sessionStorage.removeItem('admin');
              setIsAuthed(false);
            }}
            className="px-4 py-2 text-sm text-red-400 hover:text-red-300 border border-red-500/20 rounded-lg hover:bg-red-500/10 transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Loading */}
        {analytics.loading && (
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-8 flex items-center gap-3">
            <RefreshCw className="w-5 h-5 text-blue-400 animate-spin" />
            <p className="text-blue-300">Loading real analytics data...</p>
          </div>
        )}

        {/* GSC Error */}
        {analytics.gscError && (
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-8 flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-400" />
            <p className="text-yellow-300">{analytics.gscError}</p>
          </div>
        )}

        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {analytics.gscData && (
            <>
              <StatCard
                title="Total Clicks (Last 30 Days)"
                value={analytics.gscData.clicks}
                subtitle="From Google Search"
                icon="🔍"
                color="blue"
              />
              <StatCard
                title="Total Impressions"
                value={analytics.gscData.impressions}
                subtitle="Search appearances"
                icon="👁️"
                color="cyan"
              />
              <StatCard
                title="Click-Through Rate"
                value={`${analytics.gscData.ctr}%`}
                subtitle="Average CTR"
                icon="📊"
                color="purple"
              />
              <StatCard
                title="Avg Position"
                value={analytics.gscData.position}
                subtitle="Search position"
                icon="📍"
                color="yellow"
              />
            </>
          )}
        </div>

        {/* Google Search Console Queries */}
        {analytics.gscData && analytics.gscData.queries.length > 0 && (
          <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 mb-8">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Globe2 className="w-5 h-5 text-blue-400" />
              Top Search Queries ({analytics.gscData.period})
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-700/50">
                    <th className="text-left py-3 px-4 text-slate-400 font-semibold">Query</th>
                    <th className="text-right py-3 px-4 text-slate-400 font-semibold">Clicks</th>
                    <th className="text-right py-3 px-4 text-slate-400 font-semibold">Impressions</th>
                    <th className="text-right py-3 px-4 text-slate-400 font-semibold">CTR</th>
                    <th className="text-right py-3 px-4 text-slate-400 font-semibold">Position</th>
                  </tr>
                </thead>
                <tbody>
                  {analytics.gscData.queries.slice(0, 10).map((query, i) => (
                    <tr key={i} className="border-b border-slate-700/30 hover:bg-slate-800/30 transition">
                      <td className="py-3 px-4 text-slate-300">{query.keys[0]}</td>
                      <td className="text-right py-3 px-4 text-green-400 font-semibold">{query.clicks}</td>
                      <td className="text-right py-3 px-4 text-blue-400">{query.impressions}</td>
                      <td className="text-right py-3 px-4 text-purple-400">{(query.ctr * 100).toFixed(2)}%</td>
                      <td className="text-right py-3 px-4 text-yellow-400">{query.position.toFixed(1)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Articles & Reindex */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Articles */}
          <div className="lg:col-span-2 bg-slate-900/50 border border-slate-700/50 rounded-xl p-6">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-cyan-400" />
              Recent Articles
            </h2>

            {analytics.recentArticles.length === 0 ? (
              <div className="text-center py-8 text-slate-400">No articles data</div>
            ) : (
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {analytics.recentArticles.slice(0, 10).map((article, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition">
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-slate-200 truncate">{article.title || 'Untitled'}</p>
                      <p className="text-xs text-slate-500">{article.date || 'No date'}</p>
                    </div>
                    <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded">Published</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Reindex Status */}
          <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              Reindex Status
            </h2>

            <div className="space-y-4">
              <div className="bg-slate-800/30 p-4 rounded-lg">
                <p className="text-sm text-slate-400 mb-1">Success</p>
                <p className="text-3xl font-bold text-green-400">{analytics.reindexData.successful}</p>
              </div>

              <div className="bg-slate-800/30 p-4 rounded-lg">
                <p className="text-sm text-slate-400 mb-1">Failed</p>
                <p className="text-3xl font-bold text-red-400">{analytics.reindexData.failed}</p>
              </div>

              <div className="bg-slate-800/30 p-4 rounded-lg">
                <p className="text-sm text-slate-400 mb-1">Last Run</p>
                <p className="text-xs text-blue-300 break-words">{analytics.reindexData.lastRun}</p>
              </div>

              <button
                onClick={async () => {
                  try {
                    const res = await fetch('https://www.policyrix.com/api/reindex', {
                      method: 'POST',
                      headers: { 'Authorization': 'Bearer policyrix2026secret' },
                    });
                    if (res.ok) {
                      const data = await res.json();
                      setAnalytics((prev) => ({
                        ...prev,
                        reindexData: {
                          successful: data.successful || 0,
                          failed: data.failed || 0,
                          lastRun: new Date().toLocaleString(),
                        },
                      }));
                      alert(`✓ Indexed ${data.successful} URLs`);
                    }
                  } catch (err) {
                    alert(`Error: ${err instanceof Error ? err.message : 'Unknown'}`);
                  }
                }}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2 px-4 rounded-lg transition"
              >
                🔄 Reindex Now
              </button>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-bold text-white mb-6">🔗 Quick Links</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <LinkButton icon="🔍" label="Search Console" href="https://search.google.com/search-console" />
            <LinkButton icon="📊" label="Analytics" href="https://analytics.google.com" />
            <LinkButton icon="▲" label="Vercel" href="https://vercel.com/dashboard" />
            <LinkButton icon="🏠" label="Home" href="/" />
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-700/50 pt-6 pb-6 text-center">
          <p className="text-xs text-slate-600">
            PolicyRix Dashboard © 2026 | Updated: {new Date().toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, subtitle, icon, color }: any) {
  const colors: Record<string, string> = {
    blue: 'from-blue-600 to-blue-700',
    cyan: 'from-cyan-600 to-cyan-700',
    purple: 'from-purple-600 to-purple-700',
    yellow: 'from-yellow-600 to-yellow-700',
  };

  return (
    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-5">
      <div className={`bg-gradient-to-br ${colors[color]} p-3 rounded-lg w-fit mb-4`}>
        <span className="text-2xl">{icon}</span>
      </div>
      <p className="text-slate-400 text-sm mb-1">{title}</p>
      <p className="text-3xl font-bold text-white">{value}</p>
      <p className="text-xs text-slate-500 mt-2">{subtitle}</p>
    </div>
  );
}

function LinkButton({ icon, label, href }: any) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-4 text-center hover:bg-slate-800/50 hover:border-blue-500/30 transition group"
    >
      <div className="text-2xl mb-2 group-hover:scale-110 transition">{icon}</div>
      <p className="text-xs font-semibold text-slate-300 group-hover:text-blue-400 transition">{label}</p>
    </a>
  );
}