export default function Explainer() {
  return (
    <section className="mt-10 space-y-4 text-slate-700 leading-relaxed">
      <h2 className="font-serif font-bold text-2xl mt-10 mb-3" style={{ color: '#0A1628' }}>What the calculator does</h2>
      <p>Lenders and budget planners often judge a mortgage by two ratios. The housing ratio compares your monthly housing cost with your monthly income before tax. The total debt ratio adds your other monthly debt payments. This tool applies both limits, takes the lower of the two results as your maximum monthly housing cost, subtracts property tax and insurance, and converts what is left into the loan it can repay at your interest rate and term. Adding the down payment gives a home price.</p>
      <h2 className="font-serif font-bold text-2xl mt-10 mb-3" style={{ color: '#0A1628' }}>About the 28% and 36% defaults</h2>
      <p>The defaults of 28% for housing and 36% for total debt are a long-used rule of thumb, not a law. Real lenders use their own limits, which vary by country, by loan type and by your credit history and savings, and some allow noticeably higher ratios. You can change both limits to match what a lender has told you, or lower them if you want more room in your budget.</p>
      <h2 className="font-serif font-bold text-2xl mt-10 mb-3" style={{ color: '#0A1628' }}>Why the rate matters so much</h2>
      <p>The same monthly payment supports a smaller loan when rates are higher. The table shows the loan and home price at your rate and at rates half a point and one point above and below it. This is useful when comparing a fixed rate with a variable or adjustable one, because a variable rate can rise after you buy.</p>
      <h2 className="font-serif font-bold text-2xl mt-10 mb-3" style={{ color: '#0A1628' }}>What the tool leaves out</h2>
      <p>A limit is the most a formula allows, not an amount you should borrow. The tool does not include closing costs, moving and repair costs, mortgage insurance unless you add it to the monthly costs, or income tax. It does not check your credit score or the rules of any loan programme. It also uses income before tax, so look at your actual take-home pay and spending before you decide. For a firm figure, ask a lender for a written pre-approval.</p>
      <p>This is an educational estimate, not advice. For the full explanation, read our guide: <a className="underline" href="/guides/how-much-house-can-you-afford-debt-to-income">How Much House Can You Afford?</a>.</p>
    </section>
  );
}
