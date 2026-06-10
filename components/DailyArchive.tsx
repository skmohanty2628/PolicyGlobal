import Link from 'next/link';
import { getAllDates } from '@/lib/news';
import { formatDate } from '@/lib/constants';

export default function DailyArchive({ limit = 10 }: { limit?: number }) {
  const dates = getAllDates().slice(0, limit);
  if (!dates.length) return null;
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
      <h3 className="font-serif font-bold text-navy-900 text-base mb-4 flex items-center gap-2"
        style={{ color: '#0A1628' }}>
        <span className="w-1 h-5 rounded-full inline-block" style={{ background: '#C9A84C' }} />
        Daily Archive
      </h3>
      <ul className="space-y-2">
        {dates.map((date) => (
          <li key={date}>
            <Link href={`/daily/${date}`}
              className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors group">
              <span className="text-sm text-slate-700 group-hover:text-navy-900 font-medium">
                {formatDate(date)}
              </span>
              <svg className="w-4 h-4 text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
