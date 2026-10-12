'use client';
import { useState } from 'react';
import { Card, NumField, Result, money } from './ui';

export default function LifeCalculator() {
  const [income, setIncome] = useState(75000);
  const [years, setYears] = useState(10);
  const [debts, setDebts] = useState(15000);
  const [mortgage, setMortgage] = useState(250000);
  const [kids, setKids] = useState(2);
  const [perChild, setPerChild] = useState(60000);
  const [final, setFinal] = useState(15000);
  const [existing, setExisting] = useState(100000);
  const [savings, setSavings] = useState(30000);

  const replace = income * years;
  const education = kids * perChild;
  const needs = replace + debts + mortgage + education + final;
  const resources = existing + savings;
  const gap = Math.max(0, needs - resources);
  const multiple = income > 0 ? gap / income : 0;

  const rows: [string, number][] = [
    [`Income replacement (${years} years)`, replace],
    ['Non-mortgage debts', debts],
    ['Mortgage balance', mortgage],
    [`Education (${kids} child${kids === 1 ? '' : 'ren'})`, education],
    ['Final expenses', final],
  ];

  return (
    <div className="space-y-6">
      <Card>
        <div className="grid grid-cols-2 gap-4">
          <NumField label="Annual income to replace" value={income} onChange={setIncome} step={1000} suffix="$" />
          <NumField label="Years your family needs support" value={years} onChange={setYears} suffix="years" />
          <NumField label="Non-mortgage debts" value={debts} onChange={setDebts} step={1000} suffix="$" />
          <NumField label="Mortgage balance" value={mortgage} onChange={setMortgage} step={5000} suffix="$" />
          <NumField label="Children to fund education for" value={kids} onChange={setKids} />
          <NumField label="Education cost per child" value={perChild} onChange={setPerChild} step={5000} suffix="$" />
          <NumField label="Final expenses" value={final} onChange={setFinal} step={1000} suffix="$" />
          <NumField label="Existing life cover" value={existing} onChange={setExisting} step={10000} suffix="$" />
          <NumField label="Savings & investments you could draw on" value={savings} onChange={setSavings} step={5000} suffix="$" />
        </div>
      </Card>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="sm:col-span-3"><Result big label="Estimated cover gap" value={money(gap)} /></div>
        <Result label="Total financial need" value={money(needs)} />
        <Result label="Resources already in place" value={money(resources)} />
        <Result label="Gap as multiple of income" value={`${multiple.toFixed(1)}×`} />
      </div>
      <Card>
        <h3 className="font-serif font-bold text-lg mb-3" style={{ color: '#0A1628' }}>Where the need comes from</h3>
        <ul className="space-y-3">
          {rows.map(([label, v]) => (
            <li key={label}>
              <div className="flex justify-between text-sm"><span className="text-slate-600">{label}</span><span className="font-mono">{money(v)}</span></div>
              <div className="h-2 rounded-full bg-gray-100 mt-1 overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${needs ? (v / needs) * 100 : 0}%`, background: 'linear-gradient(90deg,#C9A84C,#E0B84A)' }} />
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
