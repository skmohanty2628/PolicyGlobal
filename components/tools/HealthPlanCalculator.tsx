'use client';
import { useState } from 'react';
import { Card, NumField, Result, money } from './ui';

function yearCost(premium: number, ded: number, coins: number, oop: number, bills: number) {
  const cap = Math.max(oop, 0);
  const share = Math.min(bills, ded) + (coins / 100) * Math.max(0, bills - ded);
  const member = cap > 0 ? Math.min(cap, share) : share;
  return { member, total: premium * 12 + member };
}

export default function HealthPlanCalculator() {
  const [aPrem, setAPrem] = useState(350);
  const [aDed, setADed] = useState(3000);
  const [aCoins, setACoins] = useState(20);
  const [aOop, setAOop] = useState(7000);
  const [bPrem, setBPrem] = useState(480);
  const [bDed, setBDed] = useState(750);
  const [bCoins, setBCoins] = useState(20);
  const [bOop, setBOop] = useState(4000);
  const [bills, setBills] = useState(4000);

  const a = yearCost(aPrem, aDed, aCoins, aOop, bills);
  const b = yearCost(bPrem, bDed, bCoins, bOop, bills);
  const cheaper = a.total === b.total ? 'Same cost' : a.total < b.total ? 'Plan A' : 'Plan B';
  const diff = Math.abs(a.total - b.total);
  const scenarios = [0, 1000, 5000, 20000, 100000];

  // Find the bill level where the cheaper plan changes (scan in $10 steps, shown to the nearest $50).
  let crossover: number | null = null;
  let prev = Math.sign(yearCost(aPrem, aDed, aCoins, aOop, 0).total - yearCost(bPrem, bDed, bCoins, bOop, 0).total);
  for (let x = 10; x <= 200000; x += 10) {
    const s = Math.sign(yearCost(aPrem, aDed, aCoins, aOop, x).total - yearCost(bPrem, bDed, bCoins, bOop, x).total);
    if (s !== 0 && prev !== 0 && s !== prev) { crossover = Math.round((x - 5) / 50) * 50; break; }
    if (s !== 0) prev = s;
  }

  return (
    <div className="space-y-6">
      <Card>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <p className="font-serif font-bold" style={{ color: '#0A1628' }}>Plan A</p>
            <NumField label="Monthly premium" value={aPrem} onChange={setAPrem} step={10} suffix="$" />
            <NumField label="Annual deductible" value={aDed} onChange={setADed} step={100} suffix="$" />
            <NumField label="Coinsurance you pay after deductible" value={aCoins} onChange={setACoins} step={5} suffix="%" />
            <NumField label="Out-of-pocket maximum" value={aOop} onChange={setAOop} step={100} suffix="$" />
          </div>
          <div className="space-y-3">
            <p className="font-serif font-bold" style={{ color: '#0A1628' }}>Plan B</p>
            <NumField label="Monthly premium" value={bPrem} onChange={setBPrem} step={10} suffix="$" />
            <NumField label="Annual deductible" value={bDed} onChange={setBDed} step={100} suffix="$" />
            <NumField label="Coinsurance you pay after deductible" value={bCoins} onChange={setBCoins} step={5} suffix="%" />
            <NumField label="Out-of-pocket maximum" value={bOop} onChange={setBOop} step={100} suffix="$" />
          </div>
        </div>
        <div className="mt-6">
          <NumField label="Covered medical bills you expect this year" value={bills} onChange={setBills} step={500} suffix="$"
            hint="The full cost of care before insurance pays anything. Try a healthy year and a bad year." />
        </div>
      </Card>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="sm:col-span-3">
          <Result big label="Cheaper for the year on your numbers"
            value={cheaper === 'Same cost' ? 'Both plans cost the same' : `${cheaper} (by ${money(diff)})`} />
        </div>
        <Result label="Plan A total (premiums + your share)" value={money(a.total)} />
        <Result label="Plan B total (premiums + your share)" value={money(b.total)} />
        <Result label="Bills level where the winner changes" value={crossover ? `about ${money(crossover)}` : 'No switch'} />
      </div>
      <Card>
        <p className="font-serif font-bold mb-3" style={{ color: '#0A1628' }}>Total yearly cost at different levels of care</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-slate-500 border-b border-gray-200">
                <th className="py-2 pr-4 font-semibold">Medical bills</th>
                <th className="py-2 pr-4 font-semibold">Plan A</th>
                <th className="py-2 pr-4 font-semibold">Plan B</th>
                <th className="py-2 font-semibold">Cheaper</th>
              </tr>
            </thead>
            <tbody>
              {scenarios.map((s) => {
                const x = yearCost(aPrem, aDed, aCoins, aOop, s).total;
                const y = yearCost(bPrem, bDed, bCoins, bOop, s).total;
                return (
                  <tr key={s} className="border-b border-gray-100">
                    <td className="py-2 pr-4">{money(s)}</td>
                    <td className="py-2 pr-4">{money(x)}</td>
                    <td className="py-2 pr-4">{money(y)}</td>
                    <td className="py-2 font-semibold">{x === y ? 'Same' : x < y ? 'A' : 'B'}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
