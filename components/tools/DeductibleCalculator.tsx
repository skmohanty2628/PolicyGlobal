'use client';
import { useState } from 'react';
import { Card, NumField, Result, money } from './ui';

export default function DeductibleCalculator() {
  const [lowPrem, setLowPrem] = useState(1800);
  const [lowDed, setLowDed] = useState(500);
  const [highPrem, setHighPrem] = useState(1500);
  const [highDed, setHighDed] = useState(1500);
  const [claimsPer10, setClaimsPer10] = useState(1);
  const [emergency, setEmergency] = useState(3000);

  const premiumSaving = Math.max(0, lowPrem - highPrem);
  const extraDed = Math.max(0, highDed - lowDed);
  const breakEvenYears = premiumSaving > 0 ? extraDed / premiumSaving : Infinity;
  const claimsPerYear = claimsPer10 / 10;
  const expLow = lowPrem + claimsPerYear * lowDed;
  const expHigh = highPrem + claimsPerYear * highDed;
  const cheaper = expHigh < expLow ? 'high' : 'low';
  const diff = Math.abs(expLow - expHigh);
  const canAfford = emergency >= highDed;

  return (
    <div className="space-y-6">
      <Card>
        <div className="grid grid-cols-2 gap-4">
          <NumField label="Annual premium — lower deductible" value={lowPrem} onChange={setLowPrem} step={50} suffix="$" />
          <NumField label="Lower deductible" value={lowDed} onChange={setLowDed} step={100} suffix="$" />
          <NumField label="Annual premium — higher deductible" value={highPrem} onChange={setHighPrem} step={50} suffix="$" />
          <NumField label="Higher deductible" value={highDed} onChange={setHighDed} step={100} suffix="$" />
          <NumField label="Claims you expect per 10 years" value={claimsPer10} onChange={setClaimsPer10} step={0.5} hint="Be honest: 1 means one claim every decade" />
          <NumField label="Cash you could pay tomorrow" value={emergency} onChange={setEmergency} step={500} suffix="$" />
        </div>
      </Card>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="sm:col-span-3">
          <Result big label="Cheaper option on your numbers"
            value={`${cheaper === 'high' ? 'Higher' : 'Lower'} deductible (saves ~${money(diff)}/yr)`} />
        </div>
        <Result label="Premium saved per year (high ded.)" value={money(premiumSaving)} />
        <Result label="Extra you pay if you claim" value={money(extraDed)} />
        <Result label="Break-even" value={isFinite(breakEvenYears) ? `${breakEvenYears.toFixed(1)} claim-free years` : '—'} />
      </div>
      <p className={`text-sm rounded-lg p-3 border ${canAfford ? 'text-green-700 bg-green-50 border-green-200' : 'text-amber-800 bg-amber-50 border-amber-200'}`}>
        {canAfford
          ? 'You could cover the higher deductible from cash on hand, so the cheaper-premium option is financially workable.'
          : 'Careful: you could not cover the higher deductible from the cash you listed. A cheaper premium is no bargain if a claim forces you into debt.'}
      </p>
    </div>
  );
}
