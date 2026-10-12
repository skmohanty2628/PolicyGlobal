'use client';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export interface FeedItem {
  date: string; slug: string; title: string; summary: string; category: string;
  country: string; flag: string; source: string; image: string; alt: string; minutes: string;
}

const PAGE = 8;

export default function HomeFeed({ items }: { items: FeedItem[] }) {
  const cats = useMemo(() => {
    const c: Record<string, number> = {};
    items.forEach((i) => { c[i.category] = (c[i.category] ?? 0) + 1; });
    return Object.entries(c).sort((a, b) => b[1] - a[1]);
  }, [items]);
  const [cat, setCat] = useState('All');
  const [shown, setShown] = useState(PAGE);
  const list = cat === 'All' ? items : items.filter((i) => i.category === cat);

  const chip = (active: boolean) =>
    `text-xs font-semibold px-3 py-1.5 rounded-full border whitespace-nowrap transition-all ${active ? 'text-white border-transparent' : 'text-slate-600 border-gray-200 bg-white hover:border-gold-500'}`;

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-3 -mx-1 px-1" role="tablist" aria-label="Filter stories by category">
        <button role="tab" aria-selected={cat === 'All'} className={chip(cat === 'All')}
          style={cat === 'All' ? { background: '#0A1628' } : undefined} onClick={() => { setCat('All'); setShown(PAGE); }}>
          All · {items.length}
        </button>
        {cats.map(([c, n]) => (
          <button key={c} role="tab" aria-selected={cat === c} className={chip(cat === c)}
            style={cat === c ? { background: '#0A1628' } : undefined} onClick={() => { setCat(c); setShown(PAGE); }}>
            {c} · {n}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-3">
        {list.slice(0, shown).map((a) => (
          <article key={`${a.date}/${a.slug}`} className="news-card group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
            <Link href={`/news/${a.date}/${a.slug}`} className="relative block h-40 overflow-hidden">
              <Image src={a.image} alt={a.alt} fill unoptimized sizes="(max-width:640px) 100vw, 400px"
                className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded" style={{ background: '#E0B84A', color: '#0A1628' }}>{a.category}</span>
            </Link>
            <div className="p-4 flex flex-col flex-1">
              <p className="text-[11px] text-slate-400 font-mono mb-1">{a.flag} {a.country} · {a.minutes}</p>
              <Link href={`/news/${a.date}/${a.slug}`}>
                <h3 className="font-serif font-bold text-base leading-snug line-clamp-3 group-hover:text-gold-600 transition-colors" style={{ color: '#0A1628' }}>{a.title}</h3>
              </Link>
              <p className="text-sm text-slate-500 mt-2 line-clamp-2">{a.summary}</p>
              <p className="text-[11px] text-slate-400 mt-auto pt-3">via {a.source}</p>
            </div>
          </article>
        ))}
      </div>

      {shown < list.length && (
        <div className="text-center mt-6">
          <button onClick={() => setShown((s) => s + PAGE)}
            className="px-6 py-2.5 rounded-full text-sm font-bold" style={{ background: '#0A1628', color: '#C9A84C' }}>
            Show more stories ({list.length - shown} left)
          </button>
        </div>
      )}
      {list.length === 0 && <p className="text-sm text-slate-500 mt-6">No stories in this category yet.</p>}
    </div>
  );
}
