export default function Explainer() {
  return (
    <section className="mt-10 space-y-4 text-slate-700 leading-relaxed">
      <h2 className="font-serif font-bold text-2xl mt-10 mb-3" style={{ color: '#0A1628' }}>What the calculator does</h2>
      <p>Refinancing replaces your current mortgage with a new one, usually at a lower rate. It costs money up front, so the real question is how long the lower payment takes to repay those costs. The calculator works out both monthly payments with the standard repayment formula, divides your closing costs by the monthly saving to find the break-even point, and then compares the two loans over the number of years you expect to keep the new one.</p>
      <h2 className="font-serif font-bold text-2xl mt-10 mb-3" style={{ color: '#0A1628' }}>Why the net gain matters more than the break-even</h2>
      <p>The simple break-even ignores two things: a longer new term pays off principal more slowly, and the balance you still owe when you sell or move counts too. The net gain figure adds up every payment on each loan, adds the balance still owed at the end, and subtracts your closing costs if you paid them in cash. With the defaults, a $300,000 balance at 7.5% with 28 years left, refinanced to 6.25% over 30 years for $6,000, saves about $291 a month, breaks even in 21 months and leaves you about $19,400 ahead after 7 years.</p>
      <h2 className="font-serif font-bold text-2xl mt-10 mb-3" style={{ color: '#0A1628' }}>Paying costs in cash or adding them to the loan</h2>
      <p>Adding closing costs to the new loan means no cash at closing, but you pay interest on them and the monthly saving is smaller. On the default example the saving falls to about $255 a month and break-even moves to about 24 months. A no-closing-cost offer works in a similar way: the lender recovers its costs through a higher rate, so compare it as a higher rate with zero costs.</p>
      <h2 className="font-serif font-bold text-2xl mt-10 mb-3" style={{ color: '#0A1628' }}>What the tool leaves out</h2>
      <p>The payments are principal and interest only. Property tax, insurance and mortgage insurance usually stay the same after a refinance, but check, because removing or adding mortgage insurance can change the answer. The tool does not include tax effects, prepayment penalties, cash-out amounts or changes in the value of your home. Use the Loan Estimate a lender gives you for the exact rate and costs.</p>
      <p>This is an educational estimate, not advice. For the full explanation, read our guide: <a className="underline" href="/guides/when-to-refinance-mortgage-break-even">When Does Refinancing a Mortgage Pay Off?</a>.</p>
    </section>
  );
}
