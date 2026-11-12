export default function Explainer() {
  return (
    <section className="mt-10 space-y-4 text-slate-700 leading-relaxed">
      <h2 className="font-serif font-bold text-2xl mt-10 mb-3" style={{ color: '#0A1628' }}>Why the premium alone misleads</h2>
      <p>The monthly premium is the price of having the plan. It is not the price of using it. A plan with a low premium usually has a higher deductible, so you pay more of the first bills yourself. A plan with a higher premium usually starts paying sooner. Which one costs less over a year depends on how much care you use, and that is what this calculator works out.</p>
      <h2 className="font-serif font-bold text-2xl mt-10 mb-3" style={{ color: '#0A1628' }}>How the calculation works</h2>
      <p>For each plan the tool adds twelve monthly premiums to your share of the medical bills. Your share is the bills up to the deductible, plus your coinsurance percentage of the bills above it, and it stops at the out-of-pocket maximum. In a healthy year with no bills, the total is just the premiums. In a very bad year, the total is the premiums plus the out-of-pocket maximum, which is the most a plan can cost you for covered, in-network care.</p>
      <p>The table shows the total at several levels of care, and the tool reports the bill level at which the cheaper plan changes. Below that level one plan wins, and above it the other does.</p>
      <h2 className="font-serif font-bold text-2xl mt-10 mb-3" style={{ color: '#0A1628' }}>How to choose your numbers</h2>
      <p>Take the four figures from each plan&apos;s official summary of benefits. For expected bills, think of the full price of care before insurance, not what you paid last year. Run it at least twice: once for a normal year and once for a year with a hospital stay. If the same plan wins both times, the choice is easy. If the winner changes, decide whether you would prefer a lower cost in a normal year or more protection in a bad one, and whether you could pay the higher deductible from savings.</p>
      <h2 className="font-serif font-bold text-2xl mt-10 mb-3" style={{ color: '#0A1628' }}>What the tool leaves out</h2>
      <p>This is a simplified model. It does not include fixed copays for doctor visits or prescriptions, services that are covered before the deductible, separate drug deductibles, family deductibles, out-of-network care, employer contributions to a health savings account, or tax effects. Premiums do not count toward the out-of-pocket maximum, and care that a plan does not cover does not either. Plan rules differ by country and by insurer, so use the result to narrow the choice, then read the plan documents.</p>
      <p>This is an educational estimate, not advice. For the full explanation, read our guide: <a className="underline" href="/guides/how-to-compare-health-insurance-plans-by-total-cost">How to Compare Health Insurance Plans by Total Cost</a>.</p>
    </section>
  );
}
