import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4"
      style={{ background: '#F8F9FA' }}>
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold" style={{ color: '#C9A84C' }}>404</h1>
        <h2 className="text-2xl font-serif font-bold mt-4" style={{ color: '#0A1628' }}>
          Page Not Found
        </h2>
        <p className="text-slate-500 mt-2 mb-6">
          This article or page may have been moved or no longer exists.
        </p>
        <Link href="/"
          className="inline-block px-6 py-3 rounded-lg text-white font-semibold text-sm"
          style={{ background: '#0A1628' }}>
          ← Back to Latest News
        </Link>
      </div>
    </div>
  );
}