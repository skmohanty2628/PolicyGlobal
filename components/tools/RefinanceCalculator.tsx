'use client';
import { useState } from 'react';
import { Card, NumField, Result, money } from './ui';

const pmt = (L: number, r: number, n: number) => { const m = r / 1200; return m === 0 ? L / n : (L * m) / (1 - Math.pow(1 + m, -n)); };
const bal = (L: number, r: number, n: number, k: number) => {
  const m = r / 1200; const p = pmt(L, r, n);
  const b = m === 0 ? L - p * k : L * Math.pow(1 + m, k) - p * ((Math.pow(1 + m, k) - 1) / m);
  return Math.max(0, b);
};

export default function RefinanceCalculator() {
  const [balance, setBalance] = useState(300000);
  const [oldRate, setOldRate] = useState(7.5);
  const [oldYears, setOldYears] = useState(28);
  const [newRate, setNewRate] = useState(6.25);
  const [newYears, setNewYears] = useState(30);
  const [costs, setCosts] = useState(6000);
  const [stay, setStay] = useState(7);
  const [roll, setRoll] = useState(false);

  const n0 = Math.max(1, Math.round(oldYears * 12));
  const n1 = Math.max(1, Math.round(newYears * 12));
  const newLoan = balance + (roll ? costs : 0);
  const p0 = pmt(balance, oldRate, n0);
  const p1 = pmt(newLoan, newRate, n1);
  const saving = p0 - p1;
  const breakEven = saving > 0 ? costs / saving : Infinity;

  // Net benefit if the loan is repaid (sale or payoff) after y years:
  // (old payments + old balance left) - (new payments + new balance left) - cash costs
  const net = (y: number) => {
    const k0 = Math.min(Math.round(y * 12), n0);
    const k1 = Math.min(Math.round(y * 12), n1);
    return (p0 * k0 + bal(balance, oldRate, n0, k0)) - (p1 * k1 + bal(newLoan, newRate, n1, k1)) - (roll ? 0 : costs);
  };
  const intOld = p0 * n0 - balance;
  const intNew = p1 * n1 - newLoan;

  return (
    <div className="space-y-6">
      <Card>
        <div className="grid grid-cols-2 gap-4">
          <NumField label="Current loan balance" value={balance} onChange={setBalance} step={1000} suffix="$" />
          <NumField label="Current interest rate" value={oldRate} onChange={setOldRate} step={0.125} suffix="%" />
          <NumField label="Years left on current loan" value={oldYears} onChange={setOldYears} step={1} suffix="yrs" />
          <NumField label="New interest rate" value={newRate} onChange={setNewRate} step={0.125} suffix="%" />
          <NumField label="New loan term" value={newYears} onChange={setNewYears} step={5} suffix="yrs" />
          <NumField label="Closing costs" value={costs} onChange={setCosts} step={250} suffix="$" hint="Lender fees, appraisal, title, points. Often 2% to 5% of the loan" />
          <NumField label="Years you expect to keep the loan" value={stay} onChange={setStay} step={1} suffix="yrs" hint="Until you sell, move or refinance again" />
          <label className="block">
            <span className="block text-xs font-semibold text-slate-600 mb-1">How you pay closing costs</span>
            <select value={roll ? 'roll' : 'cash'} onChange={(e) => setRoll(e.target.value === 'roll')}
              className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold-400">
              <option value="cash">Pay in cash at closing</option>
              <option value="roll">Add them to the new loan</option>
            </select>
          </label>
        </div>
      </Card>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="sm:col-span-3"><Result big label="Break-even point" value={isFinite(breakEven) ? `${Math.ceil(breakEven)} months (${(breakEven / 12).toFixed(1)} years)` : 'Never: the payment does not fall'} /></div>
        <Result label="Current monthly payment" value={money(p0)} />
        <Result label="New monthly payment" value={money(p1)} />
        <Result label="Monthly saving" value={money(saving)} />
      </div>
      <p className="text-sm rounded-lg p-3 border text-slate-700 bg-slate-50 border-slate-200">
        If you keep the new loan for {stay} years, refinancing leaves you about <strong>{money(net(stay))}</strong> {net(stay) >= 0 ? 'better off' : 'worse off'}, counting payments, the balance still owed and closing costs.
        {newYears > oldYears ? ` The new loan runs ${newYears - oldYears} years longer than what is left on your current one, so part of the lower payment comes from stretching the debt.` : ''}
      </p>
      <Card>
        <p className="font-serif font-bold mb-3" style={{ color: '#0A1628' }}>Gain or loss by how long you keep the loan</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-slate-500 border-b border-gray-200">
                <th className="py-2 pr-4 font-semibold">Years kept</th>
                <th className="py-2 font-semibold">Net gain (loss) from refinancing</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 5, 7, 10].map((y) => (
                <tr key={y} className="border-b border-gray-100">
                  <td className="py-2 pr-4">{y}</td>
                  <td className="py-2">{money(net(y))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500 mt-3">Interest over the full term: {money(intOld)} on the current loan versus {money(intNew)} on the new one, principal and interest only.</p>
      </Card>
    </div>
  );
}
