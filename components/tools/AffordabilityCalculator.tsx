'use client';
import { useState } from 'react';
import { Card, NumField, Result, money } from './ui';

export default function AffordabilityCalculator() {
  const [income, setIncome] = useState(90000);
  const [debts, setDebts] = useState(450);
  const [down, setDown] = useState(40000);
  const [rate, setRate] = useState(6.5);
  const [years, setYears] = useState(30);
  const [taxIns, setTaxIns] = useState(450);
  const [front, setFront] = useState(28);
  const [back, setBack] = useState(36);

  const monthlyIncome = income / 12;
  const housingCap = (front / 100) * monthlyIncome;
  const totalCap = (back / 100) * monthlyIncome - debts;
  const maxHousing = Math.max(0, Math.min(housingCap, totalCap));
  const maxPI = Math.max(0, maxHousing - taxIns);
  const n = Math.max(1, Math.round(years * 12));
  const r = rate / 100 / 12;
  const loan = r === 0 ? maxPI * n : maxPI * ((1 - Math.pow(1 + r, -n)) / r);
  const price = loan + down;
  const binding = housingCap <= totalCap ? 'housing ratio' : 'total debt ratio';
  const downPct = price > 0 ? (down / price) * 100 : 0;
  const pmt = (L: number, rp: number) => { const m = rp / 100 / 12; return m === 0 ? L / n : (L * m) / (1 - Math.pow(1 + m, -n)); };
  const loanAt = (rp: number) => { const m = rp / 100 / 12; return m === 0 ? maxPI * n : maxPI * ((1 - Math.pow(1 + m, -n)) / m); };

  return (
    <div className="space-y-6">
      <Card>
        <div className="grid grid-cols-2 gap-4">
          <NumField label="Household income before tax (per year)" value={income} onChange={setIncome} step={1000} suffix="$" />
          <NumField label="Other monthly debt payments" value={debts} onChange={setDebts} step={50} suffix="$" hint="Car loan, student loan, card minimums" />
          <NumField label="Down payment" value={down} onChange={setDown} step={1000} suffix="$" />
          <NumField label="Mortgage interest rate" value={rate} onChange={setRate} step={0.125} suffix="%" />
          <NumField label="Loan term" value={years} onChange={setYears} step={5} suffix="yrs" />
          <NumField label="Property tax + home insurance (per month)" value={taxIns} onChange={setTaxIns} step={25} suffix="$" hint="Add HOA or mortgage insurance if they apply" />
          <NumField label="Housing ratio limit" value={front} onChange={setFront} step={1} suffix="%" hint="Share of income for housing costs. 28% is a common guideline" />
          <NumField label="Total debt ratio limit" value={back} onChange={setBack} step={1} suffix="%" hint="Housing plus other debts. 36% is a common guideline" />
        </div>
      </Card>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="sm:col-span-3"><Result big label="Home price these limits support" value={money(price)} /></div>
        <Result label="Loan amount" value={money(loan)} />
        <Result label="Max monthly housing cost" value={money(maxHousing)} />
        <Result label="Principal and interest part" value={money(maxPI)} />
      </div>
      <p className="text-sm rounded-lg p-3 border text-slate-700 bg-slate-50 border-slate-200">
        Your limit is set by the <strong>{binding}</strong>. The down payment is {downPct.toFixed(1)}% of the price.
        {downPct < 20 && price > 0 ? ' Below 20%, many lenders add mortgage insurance, which lowers what you can borrow; add it to the monthly costs above.' : ''}
        {maxPI === 0 ? ' On these numbers there is no room for a mortgage payment after other debts, taxes and insurance.' : ''}
      </p>
      <Card>
        <p className="font-serif font-bold mb-3" style={{ color: '#0A1628' }}>How the interest rate changes the answer</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-slate-500 border-b border-gray-200">
                <th className="py-2 pr-4 font-semibold">Rate</th>
                <th className="py-2 pr-4 font-semibold">Loan you could carry</th>
                <th className="py-2 font-semibold">Home price</th>
              </tr>
            </thead>
            <tbody>
              {[-1, -0.5, 0, 0.5, 1].map((d) => {
                const rp = Math.max(0, rate + d);
                const L = loanAt(rp);
                return (
                  <tr key={d} className="border-b border-gray-100">
                    <td className="py-2 pr-4">{rp.toFixed(2)}%{d === 0 ? ' (yours)' : ''}</td>
                    <td className="py-2 pr-4">{money(L)}</td>
                    <td className="py-2">{money(L + down)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500 mt-3">Check: a loan of {money(loan)} at {rate}% over {years} years costs {money(pmt(loan, rate))} a month in principal and interest.</p>
      </Card>
    </div>
  );
}
