'use client';
import { useState } from 'react';
import { Card, NumField, Result, money } from './ui';

function grow(start: number, monthly: number, ratePct: number, years: number) {
  const n = Math.round(years * 12);
  const r = ratePct / 100 / 12;
  if (r === 0) return start + monthly * n;
  const f = Math.pow(1 + r, n);
  return start * f + monthly * ((f - 1) / r);
}

export default function CompoundCalculator() {
  const [start, setStart] = useState(5000);
  const [monthly, setMonthly] = useState(300);
  const [rate, setRate] = useState(6);
  const [years, setYears] = useState(20);
  const [inflation, setInflation] = useState(2.5);

  const y = Math.min(years, 80);
  const end = grow(start, monthly, rate, y);
  const paidIn = start + monthly * Math.round(y * 12);
  const interest = end - paidIn;
  const real = end / Math.pow(1 + inflation / 100, y);
  const doubling = rate > 0 ? Math.log(2) / (12 * Math.log(1 + rate / 100 / 12)) : Infinity;
  const marks = [5, 10, 20, 30, 40].filter((m) => m <= Math.max(y, 5));

  return (
    <div className="space-y-6">
      <Card>
        <div className="grid grid-cols-2 gap-4">
          <NumField label="Starting amount" value={start} onChange={setStart} step={500} suffix="$" />
          <NumField label="Added every month" value={monthly} onChange={setMonthly} step={50} suffix="$" />
          <NumField label="Annual return or interest rate" value={rate} onChange={setRate} step={0.25} suffix="%" hint="Compounded monthly. Returns are never guaranteed." />
          <NumField label="Years" value={years} onChange={setYears} step={1} hint="Up to 80" />
          <NumField label="Inflation assumption" value={inflation} onChange={setInflation} step={0.25} suffix="%" hint="Used only for the value in today's money" />
        </div>
      </Card>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="sm:col-span-3"><Result big label={`Balance after ${y} years`} value={money(end)} /></div>
        <Result label="Total you paid in" value={money(paidIn)} />
        <Result label="Growth earned" value={money(interest)} />
        <Result label="In today's money" value={money(real)} />
      </div>
      <Card>
        <p className="font-serif font-bold mb-3" style={{ color: '#0A1628' }}>How the balance builds</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-slate-500 border-b border-gray-200">
                <th className="py-2 pr-4 font-semibold">After</th>
                <th className="py-2 pr-4 font-semibold">Paid in</th>
                <th className="py-2 pr-4 font-semibold">Balance</th>
                <th className="py-2 font-semibold">Share from growth</th>
              </tr>
            </thead>
            <tbody>
              {marks.map((m) => {
                const b = grow(start, monthly, rate, m);
                const p = start + monthly * m * 12;
                return (
                  <tr key={m} className="border-b border-gray-100">
                    <td className="py-2 pr-4">{m} years</td>
                    <td className="py-2 pr-4">{money(p)}</td>
                    <td className="py-2 pr-4">{money(b)}</td>
                    <td className="py-2">{b > 0 ? `${Math.max(0, ((b - p) / b) * 100).toFixed(0)}%` : '0%'}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500 mt-3">
          {isFinite(doubling) ? `At ${rate}% a year, money left untouched doubles in about ${doubling.toFixed(1)} years.` : 'With a 0% rate the balance only grows by what you add.'}
        </p>
      </Card>
    </div>
  );
}
