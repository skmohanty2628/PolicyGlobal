'use client';

import { useState, useEffect } from 'react';
import { FileText, Zap, RefreshCw, Globe2, Clock } from 'lucide-react';

type DashboardData = {
  recentArticles: Array<{ title?: string; date?: string }>;
  reindexData: {
    successful: number;
    failed: number;
    lastRun: string;
  };
  loading: boolean;
};

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [isAuthed, setIsAuthed] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState<DashboardData>({
    recentArticles: [],
    reindexData: { successful: 0, failed: 0, lastRun: 'Never' },
    loading: true,
  });

  const handleLogin = () => {
    if (password === 'Subham000') {
      setIsAuthed(true);
      sessionStorage.setItem('admin', 'true');
    } else {
      setError('Wrong password');
    }
  };

  useEffect(() => {
    if (!isAuthed) return;

    const fetchData = async () => {
      try {
        setData((prev) => ({ ...prev, loading: true }));

        // Fetch articles
        const articlesRes = await fetch('/api/recent-articles')
          .then((r) => (r.ok ? r.json() : { articles: [] }))
          .catch(() => ({ articles: [] }));

        // Fetch reindex data
        const reindexRes = await fetch('/api/reindex', {
          method: 'POST',
          headers: { 'Authorization': 'Bearer policyrix2026secret' },
        })
          .then((r) => (r.ok ? r.json() : { successful: 0, failed: 0 }))
          .catch(() => ({ successful: 0, failed: 0 }));

        setData({
          recentArticles: articlesRes.articles || [],
          reindexData: {
            successful: reindexRes.successful || 0,
            failed: reindexRes.failed || 0,
            lastRun: new Date().toLocaleString(),
          },
          loading: false,
        });
      } catch (err) {
        console.error('Error fetching data:', err);
        setData((prev) => ({ ...prev, loading: false }));
      }
    };

    fetchData();
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
              <p className="text-slate-400">Dashboard Login</p>
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
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-4 rounded-lg transition"
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
            <h1 className="text-2xl font-bold text-blue-400">📊 PolicyRix Admin Dashboard</h1>
            <p className="text-xs text-slate-500 mt-1">Indexing & Content Management</p>
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
        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gradient-to-br from-blue-600/20 to-blue-700/20 border border-blue-500/30 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-300 mb-1">Total Articles</p>
                <p className="text-3xl font-bold text-blue-400">{data.recentArticles.length}</p>
              </div>
              <FileText className="w-12 h-12 text-blue-500/30" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-600/20 to-green-700/20 border border-green-500/30 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-300 mb-1">Indexed URLs</p>
                <p className="text-3xl font-bold text-green-400">{data.reindexData.successful}</p>
              </div>
              <Zap className="w-12 h-12 text-green-500/30" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-600/20 to-red-700/20 border border-red-500/30 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-red-300 mb-1">Failed URLs</p>
                <p className="text-3xl font-bold text-red-400">{data.reindexData.failed}</p>
              </div>
              <Clock className="w-12 h-12 text-red-500/30" />
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Recent Articles */}
          <div className="lg:col-span-2 bg-slate-900/50 border border-slate-700/50 rounded-xl p-6">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-cyan-400" />
              Recent Articles
            </h2>

            {data.loading ? (
              <div className="text-center py-8">
                <RefreshCw className="w-6 h-6 text-blue-400 animate-spin mx-auto mb-2" />
                <p className="text-slate-400">Loading articles...</p>
              </div>
            ) : data.recentArticles.length === 0 ? (
              <div className="text-center py-8 text-slate-400">No articles found</div>
            ) : (
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {data.recentArticles.map((article, i) => (
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
              </div>
            )}
          </div>

          {/* Reindex Control */}
          <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              Reindex Control
            </h2>

            <div className="space-y-4">
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                <p className="text-xs text-green-300 mb-1 font-semibold">✓ SUCCESS</p>
                <p className="text-2xl font-bold text-green-400">{data.reindexData.successful}</p>
                <p className="text-xs text-green-300 mt-1">URLs Indexed</p>
              </div>

              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                <p className="text-xs text-red-300 mb-1 font-semibold">✗ FAILED</p>
                <p className="text-2xl font-bold text-red-400">{data.reindexData.failed}</p>
                <p className="text-xs text-red-300 mt-1">URLs Failed</p>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                <p className="text-xs text-blue-300 mb-1 font-semibold">LAST RUN</p>
                <p className="text-xs text-blue-300 break-words">{data.reindexData.lastRun}</p>
              </div>

              <button
                onClick={async () => {
                  try {
                    const res = await fetch('https://www.policyrix.com/api/reindex', {
                      method: 'POST',
                      headers: { 'Authorization': 'Bearer policyrix2026secret' },
                    });
                    if (res.ok) {
                      const newData = await res.json();
                      setData((prev) => ({
                        ...prev,
                        reindexData: {
                          successful: newData.successful || 0,
                          failed: newData.failed || 0,
                          lastRun: new Date().toLocaleString(),
                        },
                      }));
                      alert(`✓ Successfully indexed ${newData.successful} URLs!`);
                    } else {
                      alert('❌ Reindex failed');
                    }
                  } catch (err) {
                    alert(`Error: ${err instanceof Error ? err.message : 'Unknown error'}`);
                  }
                }}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-4 rounded-lg transition flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Trigger Reindex Now
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
            <LinkButton icon="🏠" label="Homepage" href="/" />
            <LinkButton icon="🐱" label="GitHub" href="https://github.com/skmohanty2628/PolicyGlobal" />
            <LinkButton icon="📝" label="Sitemap" href="https://policyrix.com/sitemap.xml" />
            <LinkButton icon="🤖" label="Robots.txt" href="https://policyrix.com/robots.txt" />
            <LinkButton icon="ℹ️" label="About" href="/about" />
          </div>
        </div>

        {/* SEO Status */}
        <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-bold text-white mb-4">✓ SEO Status</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <StatusBadge text="Sitemap Active" status="success" />
            <StatusBadge text="Robots.txt Ready" status="success" />
            <StatusBadge text="SSL Enabled" status="success" />
            <StatusBadge text="Mobile Optimized" status="success" />
            <StatusBadge text="Meta Tags" status="success" />
            <StatusBadge text="Schema Markup" status="success" />
            <StatusBadge text="Fast Loading" status="success" />
            <StatusBadge text="Indexed Pages" status="success" />
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-700/50 pt-6 pb-6 text-center">
          <p className="text-xs text-slate-600">PolicyRix Admin Dashboard © 2026 | Last Updated: {new Date().toLocaleString()}</p>
        </div>
      </div>
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

function StatusBadge({ text, status }: any) {
  return (
    <div className={`p-3 rounded-lg text-center text-xs font-semibold ${status === 'success' ? 'bg-green-500/10 text-green-300 border border-green-500/20' : 'bg-yellow-500/10 text-yellow-300 border border-yellow-500/20'}`}>
      {status === 'success' ? '✓' : '⚠'} {text}
    </div>
  );
}