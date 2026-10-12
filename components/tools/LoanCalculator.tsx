'use client';
import { useMemo, useState } from 'react';
import { Card, NumField, Result, money } from './ui';

function schedule(P: number, annualRate: number, years: number, extra: number) {
  const n = Math.round(years * 12);
  const r = annualRate / 100 / 12;
  const base = n === 0 ? 0 : r === 0 ? P / n : (P * r) / (1 - Math.pow(1 + r, -n));
  let bal = P, months = 0, interest = 0;
  const yearly: { year: number; interest: number; principal: number; balance: number }[] = [];
  let yi = 0, yp = 0;
  while (bal > 0.005 && months < 1200 && base > 0) {
    const i = bal * r;
    let p = base + extra - i;
    if (p > bal) p = bal;
    if (p <= 0) break; // payment never covers interest
    bal -= p; interest += i; months++; yi += i; yp += p;
    if (months % 12 === 0 || bal <= 0.005) {
      yearly.push({ year: Math.ceil(months / 12), interest: yi, principal: yp, balance: Math.max(bal, 0) });
      yi = 0; yp = 0;
    }
  }
  return { base, months, interest, yearly };
}

export default function LoanCalculator() {
  const [amount, setAmount] = useState(350000);
  const [rate, setRate] = useState(6.75);
  const [years, setYears] = useState(30);
  const [extra, setExtra] = useState(0);

  const plain = useMemo(() => schedule(amount, rate, years, 0), [amount, rate, years]);
  const fast = useMemo(() => schedule(amount, rate, years, extra), [amount, rate, years, extra]);
  const saved = plain.interest - fast.interest;
  const monthsSaved = plain.months - fast.months;

  return (
    <div className="space-y-6">
      <Card>
        <div className="grid grid-cols-2 gap-4">
          <NumField label="Loan amount" value={amount} onChange={setAmount} step={1000} suffix="$" />
          <NumField label="Interest rate (APR)" value={rate} onChange={setRate} step={0.05} suffix="%" />
          <NumField label="Term" value={years} onChange={setYears} step={1} suffix="years" />
          <NumField label="Extra monthly payment" value={extra} onChange={setExtra} step={25} suffix="$" hint="Optional — see how much faster you finish" />
        </div>
      </Card>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="sm:col-span-3"><Result big label="Monthly payment (principal + interest)" value={money(plain.base + extra)} /></div>
        <Result label="Total interest" value={money(fast.interest)} />
        <Result label="Total paid" value={money(amount + fast.interest)} />
        <Result label="Payoff time" value={`${Math.floor(fast.months / 12)}y ${fast.months % 12}m`} />
      </div>
      {extra > 0 && (
        <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg p-3">
          Paying {money(extra)} extra each month saves about <strong>{money(saved)}</strong> in interest and
          finishes <strong>{Math.floor(monthsSaved / 12)} years {monthsSaved % 12} months</strong> sooner.
        </p>
      )}
      <Card>
        <h3 className="font-serif font-bold text-lg mb-3" style={{ color: '#0A1628' }}>Year-by-year breakdown</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="text-left text-xs text-slate-500 border-b"><th className="py-2">Year</th><th>Principal paid</th><th>Interest paid</th><th>Balance left</th></tr></thead>
            <tbody>
              {fast.yearly.map((y) => (
                <tr key={y.year} className="border-b border-gray-50">
                  <td className="py-2 font-mono">{y.year}</td><td>{money(y.principal)}</td><td>{money(y.interest)}</td><td>{money(y.balance)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
