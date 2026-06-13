'use client';

import { useState, useEffect } from 'react';
import { FileText, Zap, RefreshCw, Clock, CheckCircle, XCircle } from 'lucide-react';

type Article = { title?: string; date?: string; slug?: string };

type ReindexResult = {
  successful: number;
  failed: number;
  articlesProcessed: number;
  lastRun: string;
  message?: string;
};

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [isAuthed, setIsAuthed] = useState(false);
  const [error, setError] = useState('');
  const [articles, setArticles] = useState<Article[]>([]);
  const [articlesLoading, setArticlesLoading] = useState(false);
  const [reindexing, setReindexing] = useState(false);
  const [reindexResult, setReindexResult] = useState<ReindexResult | null>(null);
  const [reindexMessage, setReindexMessage] = useState('');

  const handleLogin = () => {
    if (password === 'Subham000') {
      setIsAuthed(true);
      setError('');
    } else {
      setError('❌ Wrong password');
      setPassword('');
    }
  };

  // ✅ FIX 1: Only fetch articles on login — do NOT auto-trigger reindex
  useEffect(() => {
    if (!isAuthed) return;
    fetchArticles();
  }, [isAuthed]);

  const fetchArticles = async () => {
    setArticlesLoading(true);
    try {
      const res = await fetch('/api/recent-articles');
      if (!res.ok) throw new Error('Failed to fetch');
      const json = await res.json();

      // ✅ FIX 2: Handle both array response AND { articles: [] } response
      const articleList: Article[] = Array.isArray(json)
        ? json
        : Array.isArray(json.articles)
        ? json.articles
        : [];

      setArticles(articleList);
    } catch (err) {
      console.error('Failed to load articles:', err);
      setArticles([]);
    } finally {
      setArticlesLoading(false);
    }
  };

  const handleReindex = async () => {
    setReindexing(true);
    setReindexMessage('🔄 Notifying Google about recent articles...');
    setReindexResult(null);

    try {
      // ✅ FIX 3: Use relative URL — no www or domain needed
      const res = await fetch('/api/reindex', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer policyrix2026secret',
        },
      });

      const data = await res.json();

      if (res.ok) {
        setReindexResult({
          successful: data.successful ?? 0,
          failed: data.failed ?? 0,
          articlesProcessed: data.articlesProcessed ?? 0,
          lastRun: new Date().toLocaleString(),
          message: data.message,
        });
        setReindexMessage(
          `✓ ${data.message || `Successfully indexed ${data.successful} URLs`}`
        );
      } else {
        setReindexMessage(`❌ ${data.error || 'Reindex failed'}`);
      }
    } catch (err) {
      setReindexMessage(
        `❌ Error: ${err instanceof Error ? err.message : 'Unknown error'}`
      );
    } finally {
      setReindexing(false);
    }
  };

  // ─── Login Screen ─────────────────────────────────────────────
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

  // ─── Dashboard ────────────────────────────────────────────────
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
            onClick={() => setIsAuthed(false)}
            className="px-4 py-2 text-sm text-red-400 hover:text-red-300 border border-red-500/20 rounded-lg hover:bg-red-500/10 transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Total Articles */}
          <div className="bg-gradient-to-br from-blue-600/20 to-blue-700/20 border border-blue-500/30 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-300 mb-1">Total Articles</p>
                <p className="text-3xl font-bold text-blue-400">
                  {articlesLoading ? '...' : articles.length}
                </p>
                <p className="text-xs text-blue-300 mt-1">All time</p>
              </div>
              <FileText className="w-12 h-12 text-blue-500/30" />
            </div>
          </div>

          {/* Notified URLs */}
          <div className="bg-gradient-to-br from-green-600/20 to-green-700/20 border border-green-500/30 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-300 mb-1">Notified Google</p>
                <p className="text-3xl font-bold text-green-400">
                  {reindexResult ? reindexResult.successful : '—'}
                </p>
                <p className="text-xs text-green-300 mt-1">Last 3 days</p>
              </div>
              <Zap className="w-12 h-12 text-green-500/30" />
            </div>
          </div>

          {/* Failed */}
          <div className="bg-gradient-to-br from-red-600/20 to-red-700/20 border border-red-500/30 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-red-300 mb-1">Failed URLs</p>
                <p className="text-3xl font-bold text-red-400">
                  {reindexResult ? reindexResult.failed : '—'}
                </p>
                <p className="text-xs text-red-300 mt-1">Last run</p>
              </div>
              <Clock className="w-12 h-12 text-red-500/30" />
            </div>
          </div>
        </div>

        {/* Articles + Reindex */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

          {/* Recent Articles */}
          <div className="lg:col-span-2 bg-slate-900/50 border border-slate-700/50 rounded-xl p-6">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-cyan-400" />
              Recent Articles
            </h2>

            {articlesLoading ? (
              <div className="text-center py-8">
                <RefreshCw className="w-6 h-6 text-blue-400 animate-spin mx-auto mb-2" />
                <p className="text-slate-400">Loading articles...</p>
              </div>
            ) : articles.length === 0 ? (
              <div className="text-center py-8 text-slate-400">No articles found</div>
            ) : (
              <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
                {articles.slice(0, 10).map((article, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition"
                  >
                    <div className="min-w-0">
                      <p className="font-medium text-slate-200 truncate">
                        {article.title || 'Untitled'}
                      </p>
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
              <Zap className="w-5 h-5 text-yellow-400" />
              Reindex Control
            </h2>

            <div className="space-y-4">
              {/* Success count */}
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                <p className="text-xs text-green-300 mb-1 font-semibold flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" /> SUCCESS
                </p>
                <p className="text-2xl font-bold text-green-400">
                  {reindexResult?.successful ?? 0}
                </p>
                <p className="text-xs text-green-300 mt-1">URLs Notified</p>
              </div>

              {/* Failed count */}
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                <p className="text-xs text-red-300 mb-1 font-semibold flex items-center gap-1">
                  <XCircle className="w-3 h-3" /> FAILED
                </p>
                <p className="text-2xl font-bold text-red-400">
                  {reindexResult?.failed ?? 0}
                </p>
                <p className="text-xs text-red-300 mt-1">URLs Failed</p>
              </div>

              {/* Last run */}
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                <p className="text-xs text-blue-300 mb-1 font-semibold">LAST RUN</p>
                <p className="text-xs text-blue-300 break-words">
                  {reindexResult?.lastRun ?? 'Not run yet'}
                </p>
              </div>

              {/* Trigger Button */}
              <button
                onClick={handleReindex}
                disabled={reindexing}
                className={`w-full font-bold py-3 px-4 rounded-lg transition flex items-center justify-center gap-2 ${
                  reindexing
                    ? 'bg-slate-600 text-slate-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white'
                }`}
              >
                <RefreshCw className={`w-4 h-4 ${reindexing ? 'animate-spin' : ''}`} />
                {reindexing ? 'Reindexing...' : 'Trigger Reindex Now'}
              </button>

              {/* Message */}
              {reindexMessage && (
                <div
                  className={`p-3 rounded-lg text-sm font-medium ${
                    reindexMessage.startsWith('✓')
                      ? 'bg-green-500/10 text-green-300 border border-green-500/20'
                      : reindexMessage.startsWith('🔄')
                      ? 'bg-blue-500/10 text-blue-300 border border-blue-500/20'
                      : 'bg-red-500/10 text-red-300 border border-red-500/20'
                  }`}
                >
                  {reindexMessage}
                </div>
              )}

              {/* Info note */}
              <p className="text-xs text-slate-500 text-center">
                Notifies Google about articles from the last 3 days
              </p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-bold text-white mb-6">🔗 Quick Links</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <LinkButton icon="🔍" label="Search Console" href="https://search.google.com/search-console" />
            <LinkButton icon="📊" label="Analytics"      href="https://analytics.google.com" />
            <LinkButton icon="▲"  label="Vercel"         href="https://vercel.com/dashboard" />
            <LinkButton icon="🏠" label="Homepage"       href="/" />
            <LinkButton icon="🐱" label="GitHub"         href="https://github.com/skmohanty2628/PolicyGlobal" />
            <LinkButton icon="📝" label="Sitemap"        href="/sitemap.xml" />
            <LinkButton icon="🤖" label="Robots.txt"     href="/robots.txt" />
            <LinkButton icon="ℹ️"  label="About"          href="/about" />
          </div>
        </div>

        {/* SEO Status */}
        <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-bold text-white mb-4">✓ SEO Status</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              'Sitemap Active', 'Robots.txt Ready', 'SSL Enabled',   'Mobile Optimized',
              'Meta Tags',      'Schema Markup',    'Fast Loading',   'Indexed Pages',
            ].map((text) => (
              <div
                key={text}
                className="p-3 rounded-lg text-center text-xs font-semibold bg-green-500/10 text-green-300 border border-green-500/20"
              >
                ✓ {text}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-700/50 pt-6 pb-6 text-center">
          <p className="text-xs text-slate-600">
            PolicyRix Admin Dashboard © 2026 | Last Updated: {new Date().toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}

function LinkButton({ icon, label, href }: { icon: string; label: string; href: string }) {
  return (
    <a
      href={href}
      target={href.startsWith('/') ? '_self' : '_blank'}
      rel="noopener noreferrer"
      className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-4 text-center hover:bg-slate-800/50 hover:border-blue-500/30 transition group"
    >
      <div className="text-2xl mb-2 group-hover:scale-110 transition">{icon}</div>
      <p className="text-xs font-semibold text-slate-300 group-hover:text-blue-400 transition">{label}</p>
    </a>
  );
}