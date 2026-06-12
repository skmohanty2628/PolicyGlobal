'use client';

import { useState, useEffect } from 'react';
import { BarChart3, TrendingUp, Globe2, FileText, Users, Activity, Search, ArrowUp, ArrowDown, Eye, Clock, Zap } from 'lucide-react';

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [isAuthed, setIsAuthed] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (password === 'Subham000') {
      setIsAuthed(true);
      sessionStorage.setItem('admin', 'true');
    } else {
      setError('Wrong password');
    }
  };

  if (!isAuthed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-slate-900/80 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">PolicyRix Admin</h1>
              <p className="text-slate-400">Secure Access Dashboard</p>
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

            <div className="mt-6 pt-6 border-t border-slate-700/50">
              <p className="text-xs text-slate-500 text-center">PolicyRix © 2026 | All Rights Reserved</p>
            </div>
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
            <h1 className="text-2xl font-bold text-blue-400">📊 Admin Dashboard</h1>
            <p className="text-xs text-slate-500 mt-1">Real-time Analytics & Management</p>
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
        {/* Top Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            icon={<Zap className="w-5 h-5 text-yellow-400" />}
            title="IndexNow Status"
            value="Verified"
            change="+100%"
            changeType="up"
            color="yellow"
          />
          <StatCard
            icon={<Globe2 className="w-5 h-5 text-blue-400" />}
            title="Pages Indexed"
            value="60"
            change="+12 this week"
            changeType="up"
            color="blue"
          />
          <StatCard
            icon={<Eye className="w-5 h-5 text-purple-400" />}
            title="Organic Views"
            value="1,245"
            change="+8.5%"
            changeType="up"
            color="purple"
          />
          <StatCard
            icon={<TrendingUp className="w-5 h-5 text-green-400" />}
            title="CTR Average"
            value="3.42%"
            change="+0.5%"
            changeType="up"
            color="green"
          />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Left Column - Performance */}
          <div className="lg:col-span-2 space-y-6">
            {/* Performance Chart */}
            <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-blue-400" />
                  Indexing Performance
                </h2>
                <select className="bg-slate-800/50 border border-slate-700 rounded px-3 py-1 text-sm text-slate-300">
                  <option>Last 30 Days</option>
                  <option>Last 90 Days</option>
                  <option>Last Year</option>
                </select>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-400">Google Indexing</span>
                    <span className="text-green-400 font-bold">92%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-400">Bing Indexing</span>
                    <span className="text-blue-400 font-bold">78%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-400">Yandex Indexing</span>
                    <span className="text-purple-400 font-bold">65%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-400 h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Activity className="w-5 h-5 text-cyan-400" />
                Quick Actions
              </h2>

              <div className="space-y-3">
                <button
                  onClick={async () => {
                    try {
                      const res = await fetch('https://www.policyrix.com/api/reindex', {
                        method: 'POST',
                        headers: { 'Authorization': 'Bearer policyrix2026secret' },
                      });
                      if (res.ok) {
                        const data = await res.json();
                        alert(`✓ Indexed ${data.successful} URLs successfully`);
                      } else {
                        alert('❌ Reindex failed');
                      }
                    } catch (err) {
                      alert(`Error: ${err instanceof Error ? err.message : 'Unknown error'}`);
                    }
                  }}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-4 rounded-lg transition duration-200"
                >
                  🔄 Trigger Reindex Now
                </button>

                <button className="w-full bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white font-semibold py-3 px-4 rounded-lg transition duration-200">
                  🔗 Submit Sitemap to GSC
                </button>

                <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 px-4 rounded-lg transition duration-200">
                  📋 Check Crawl Errors
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Summary */}
          <div className="space-y-6">
            {/* SEO Status */}
            <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6">
              <h2 className="text-lg font-bold text-white mb-4">🎯 SEO Status</h2>

              <div className="space-y-3">
                <StatusItem icon="✓" text="Sitemap Verified" color="green" />
                <StatusItem icon="✓" text="Robots.txt Active" color="green" />
                <StatusItem icon="✓" text="IndexNow Key Valid" color="green" />
                <StatusItem icon="✓" text="SSL Certificate" color="green" />
                <StatusItem icon="✓" text="Mobile Optimized" color="green" />
                <StatusItem icon="!" text="Broken Links (3)" color="yellow" />
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-400" />
                Recent Activity
              </h2>

              <div className="space-y-3 text-sm">
                <ActivityItem time="2 mins ago" text="Reindex triggered" />
                <ActivityItem time="15 mins ago" text="New article indexed" />
                <ActivityItem time="1 hour ago" text="Sitemap updated" />
                <ActivityItem time="3 hours ago" text="GSC crawl completed" />
                <ActivityItem time="Yesterday" text="Monthly scan run" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Top Articles */}
          <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-cyan-400" />
              Top Performing Articles
            </h2>

            <div className="space-y-2">
              <ArticleRow rank="1" title="Insurance Trends 2026" views="1,245" clicks="89" />
              <ArticleRow rank="2" title="Banking Reform Guide" views="892" clicks="56" />
              <ArticleRow rank="3" title="Mortgage Comparison" views="756" clicks="42" />
              <ArticleRow rank="4" title="Finance Update News" views="634" clicks="38" />
              <ArticleRow rank="5" title="Investment Strategy" views="521" clicks="31" />
            </div>
          </div>

          {/* Top Countries */}
          <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Globe2 className="w-5 h-5 text-blue-400" />
              Traffic by Country
            </h2>

            <div className="space-y-3">
              <CountryRow flag="🇺🇸" country="United States" traffic="485" percent="42%" />
              <CountryRow flag="🇮🇳" country="India" traffic="312" percent="27%" />
              <CountryRow flag="🇬🇧" country="United Kingdom" traffic="189" percent="16%" />
              <CountryRow flag="🇨🇦" country="Canada" traffic="98" percent="8%" />
              <CountryRow flag="🇦🇺" country="Australia" traffic="56" percent="5%" />
            </div>
          </div>
        </div>

        {/* SEO Checklist */}
        <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-bold text-white mb-6">📋 SEO Implementation Checklist</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ChecklistItem checked={true} title="Meta Tags" desc="All pages optimized" />
            <ChecklistItem checked={true} title="Schema Markup" desc="Structured data added" />
            <ChecklistItem checked={true} title="Mobile Responsive" desc="100% mobile friendly" />
            <ChecklistItem checked={true} title="Page Speed" desc="Core Web Vitals passed" />
            <ChecklistItem checked={true} title="Internal Links" desc="Strategic linking done" />
            <ChecklistItem checked={false} title="AMP Pages" desc="Not implemented" />
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-bold text-white mb-6">🔗 Quick Links & Tools</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <LinkButton icon="🔍" label="Search Console" href="https://search.google.com/search-console/about?resource_id=sc-domain%3Apolicyrix.com" />
            <LinkButton icon="📊" label="Google Analytics" href="https://analytics.google.com" />
            <LinkButton icon="▲" label="Vercel Dashboard" href="https://vercel.com/dashboard" />
            <LinkButton icon="🏠" label="Homepage" href="/" />
            <LinkButton icon="🐱" label="GitHub Repo" href="https://github.com/skmohanty2628/PolicyGlobal" />
            <LinkButton icon="📝" label="Sitemap" href="https://policyrix.com/sitemap.xml" />
            <LinkButton icon="🤖" label="Robots.txt" href="https://policyrix.com/robots.txt" />
            <LinkButton icon="⚙️" label="Settings" href="#" />
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-700/50 pt-6 pb-6">
          <p className="text-xs text-slate-600 text-center">PolicyRix Admin Dashboard © 2026 | All Rights Reserved | Last Updated: {new Date().toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

// Component: Stat Card
function StatCard({ icon, title, value, change, changeType, color }: any) {
  const colorMap: Record<string, string> = {
    yellow: 'from-yellow-600 to-yellow-700',
    blue: 'from-blue-600 to-blue-700',
    purple: 'from-purple-600 to-purple-700',
    green: 'from-green-600 to-green-700',
  };

  return (
    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-5">
      <div className="flex items-start justify-between mb-4">
        <div className={`bg-gradient-to-br ${colorMap[color]} p-3 rounded-lg`}>
          {icon}
        </div>
        <span className="text-xs font-semibold text-green-400">{changeType === 'up' ? '↑' : '↓'} {change}</span>
      </div>
      <p className="text-slate-400 text-sm mb-1">{title}</p>
      <p className="text-2xl font-bold text-white">{value}</p>
    </div>
  );
}

// Component: Status Item
function StatusItem({ icon, text, color }: any) {
  const colors: Record<string, string> = {
    green: 'text-green-400',
    yellow: 'text-yellow-400',
    red: 'text-red-400',
  };

  return (
    <div className="flex items-center gap-3 p-3 bg-slate-800/30 rounded-lg">
      <span className={`text-lg font-bold ${colors[color]}`}>{icon}</span>
      <span className="text-sm text-slate-300">{text}</span>
    </div>
  );
}

// Component: Activity Item
function ActivityItem({ time, text }: any) {
  return (
    <div className="flex items-start gap-3 pb-3 border-b border-slate-700/30 last:border-b-0 last:pb-0">
      <div className="w-2 h-2 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
      <div>
        <p className="text-slate-300">{text}</p>
        <p className="text-xs text-slate-500">{time}</p>
      </div>
    </div>
  );
}

// Component: Article Row
function ArticleRow({ rank, title, views, clicks }: any) {
  return (
    <div className="flex items-center justify-between p-3 bg-slate-800/20 rounded-lg hover:bg-slate-800/40 transition">
      <div className="flex items-center gap-3">
        <span className="text-sm font-bold text-blue-400 w-6">{rank}</span>
        <span className="text-sm text-slate-300">{title}</span>
      </div>
      <div className="flex gap-4">
        <span className="text-xs text-slate-400">{views} views</span>
        <span className="text-xs text-cyan-400 font-semibold">{clicks} clicks</span>
      </div>
    </div>
  );
}

// Component: Country Row
function CountryRow({ flag, country, traffic, percent }: any) {
  return (
    <div className="flex items-center justify-between p-3 bg-slate-800/20 rounded-lg hover:bg-slate-800/40 transition">
      <div className="flex items-center gap-3">
        <span className="text-lg">{flag}</span>
        <div>
          <p className="text-sm text-slate-300">{country}</p>
          <div className="w-32 bg-slate-700 rounded h-1 mt-1">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-1 rounded" style={{ width: percent }}></div>
          </div>
        </div>
      </div>
      <span className="text-sm font-bold text-blue-400">{traffic}</span>
    </div>
  );
}

// Component: Checklist Item
function ChecklistItem({ checked, title, desc }: any) {
  return (
    <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-4">
      <div className="flex items-start gap-3">
        <div className={`w-5 h-5 rounded border-2 mt-0.5 flex items-center justify-center ${checked ? 'bg-green-500/30 border-green-500' : 'border-slate-600'}`}>
          {checked && <span className="text-green-400 text-xs font-bold">✓</span>}
        </div>
        <div>
          <p className="font-semibold text-slate-200">{title}</p>
          <p className="text-xs text-slate-400 mt-1">{desc}</p>
        </div>
      </div>
    </div>
  );
}

// Component: Link Button
function LinkButton({ icon, label, href }: any) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : '_self'}
      rel={href.startsWith('http') ? 'noopener noreferrer' : ''}
      className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-4 text-center hover:bg-slate-800/50 hover:border-blue-500/30 transition group"
    >
      <div className="text-2xl mb-2 group-hover:scale-110 transition">{icon}</div>
      <p className="text-xs font-semibold text-slate-300 group-hover:text-blue-400 transition">{label}</p>
    </a>
  );
}