'use client';
import { ReactNode } from 'react';

export const money = (n: number, cur = 'USD') =>
  isFinite(n) ? new Intl.NumberFormat('en-US', { style: 'currency', currency: cur, maximumFractionDigits: 0 }).format(n) : '—';

export function NumField({ label, value, onChange, step = 1, suffix, hint }: {
  label: string; value: number; onChange: (v: number) => void; step?: number; suffix?: string; hint?: string;
}) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold text-slate-600 mb-1">{label}</span>
      <div className="relative">
        <input type="number" inputMode="decimal" min={0} step={step} value={Number.isFinite(value) ? value : ''}
          onChange={(e) => onChange(e.target.value === '' ? 0 : Math.max(0, parseFloat(e.target.value)))}
          className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold-400" />
        {suffix && <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400">{suffix}</span>}
      </div>
      {hint && <span className="block text-[11px] text-slate-400 mt-1">{hint}</span>}
    </label>
  );
}

export function Result({ label, value, big = false }: { label: string; value: ReactNode; big?: boolean }) {
  return (
    <div className="rounded-xl p-4" style={{ background: big ? '#0A1628' : '#F8F9FA', border: big ? '1px solid rgba(201,168,76,0.3)' : '1px solid #E2E8F0' }}>
      <p className={`text-[11px] font-mono uppercase tracking-widest mb-1 ${big ? 'text-gold-400' : 'text-slate-500'}`}>{label}</p>
      <p className={`font-serif font-bold ${big ? 'text-white text-3xl' : 'text-navy-900 text-xl'}`} style={big ? undefined : { color: '#0A1628' }}>{value}</p>
    </div>
  );
}

export function Card({ children }: { children: ReactNode }) {
  return <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 md:p-7">{children}</div>;
}
