'use client';

import { useState } from 'react';

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
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="bg-slate-900 p-8 rounded-lg border border-blue-500/30 w-96">
          <h1 className="text-2xl font-bold text-blue-400 mb-4">PolicyRix Admin</h1>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
            className="w-full bg-slate-800 border border-blue-500/20 rounded px-4 py-2 text-white mb-4"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
          {error && <p className="text-red-400 mt-2">{error}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-400 mb-2">PolicyRix Admin Dashboard</h1>
        <p className="text-slate-400 mb-8">Welcome to the admin panel</p>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-slate-900/50 border border-blue-500/20 rounded-lg p-4">
            <p className="text-slate-400 text-sm">Status</p>
            <p className="text-2xl font-bold text-green-400">✓ Active</p>
          </div>
          <div className="bg-slate-900/50 border border-blue-500/20 rounded-lg p-4">
            <p className="text-slate-400 text-sm">IndexNow</p>
            <p className="text-2xl font-bold text-blue-400">Verified</p>
          </div>
          <div className="bg-slate-900/50 border border-blue-500/20 rounded-lg p-4">
            <p className="text-slate-400 text-sm">Sitemap</p>
            <p className="text-2xl font-bold text-yellow-400">Ready</p>
          </div>
        </div>

        <div className="bg-slate-900/50 border border-blue-500/20 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-blue-400 mb-4">Quick Actions</h2>
          <button
            onClick={async () => {
              const res = await fetch('https://www.policyrix.com/api/reindex', {
                method: 'POST',
                headers: { 'Authorization': 'Bearer policyrix2026secret' },
              });
              if (res.ok) {
                alert('✓ Reindex triggered successfully');
              } else {
                alert('❌ Reindex failed');
              }
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mb-2"
          >
            Trigger Reindex Now
          </button>
        </div>

        <div className="bg-slate-900/50 border border-blue-500/20 rounded-lg p-6">
          <h2 className="text-xl font-bold text-blue-400 mb-4">Quick Links</h2>
          <div className="grid grid-cols-2 gap-4">
            <a href="https://search.google.com/search-console/about?resource_id=sc-domain%3Apolicyrix.com" target="_blank" className="bg-slate-800 hover:bg-slate-700 text-blue-400 py-2 px-4 rounded text-center">
              🔍 Search Console
            </a>
            <a href="https://analytics.google.com" target="_blank" className="bg-slate-800 hover:bg-slate-700 text-blue-400 py-2 px-4 rounded text-center">
              📊 Analytics
            </a>
            <a href="https://vercel.com/dashboard" target="_blank" className="bg-slate-800 hover:bg-slate-700 text-blue-400 py-2 px-4 rounded text-center">
              ▲ Vercel
            </a>
            <a href="/" className="bg-slate-800 hover:bg-slate-700 text-blue-400 py-2 px-4 rounded text-center">
              🏠 Home
            </a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => {
              sessionStorage.removeItem('admin');
              setIsAuthed(false);
            }}
            className="text-red-400 hover:text-red-300 text-sm"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}