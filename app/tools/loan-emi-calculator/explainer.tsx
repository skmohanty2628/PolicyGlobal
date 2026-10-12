export default function Explainer() {
  return (
    <section className="mt-10 space-y-4 text-slate-700 leading-relaxed">
      <h2 className="font-serif font-bold text-2xl mt-10 mb-3" style={{ color: '#0A1628' }}> How this calculator works</h2>
      <p>For a standard fixed-rate loan the payment is constant and is calculated so that, after the final instalment, the balance is exactly zero. Each month the lender charges interest on whatever you still owe (the annual rate divided by twelve, multiplied by the remaining balance) and the rest of your payment reduces the principal. Because the balance is highest at the start, early payments are mostly interest; late payments are mostly principal. The year-by-year table makes that shift visible.</p>
      <h2 className="font-serif font-bold text-2xl mt-10 mb-3" style={{ color: '#0A1628' }}> Why the term matters more than most people expect</h2>
      <p>Stretching a loan lowers the monthly payment but raises the total cost. On a 350,000 loan at 6.75%, a 30-year term costs roughly 40% less per month than a 10-year term yet adds well over 300,000 in lifetime interest. A 15-year term usually carries a lower rate than a 30-year term as well, so shortening the term compounds the saving. The right answer is the shortest term whose payment still leaves a comfortable buffer in your budget.</p>
      <h2 className="font-serif font-bold text-2xl mt-10 mb-3" style={{ color: '#0A1628' }}> Using the extra-payment box</h2>
      <p>Adding even a modest amount each month goes straight to principal, which reduces the interest charged on every later month. Enter a figure and the calculator re-runs the full schedule to show the interest saved and the time cut from the loan. Before you commit, check that your lender applies extra money to principal (not to future instalments) and that there is no prepayment penalty, which is more common on some commercial and overseas loans than on US home mortgages.</p>
      <h2 className="font-serif font-bold text-2xl mt-10 mb-3" style={{ color: '#0A1628' }}> What this estimate leaves out</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Property tax, home insurance and mortgage insurance, which are often collected in the same monthly bill.</li>
        <li>Fees such as origination, appraisal and closing costs, which change the true cost of borrowing (the APR captures some of them).</li>
        <li>Variable or adjustable rates, where the payment can change after an initial period.</li>
        <li>Currency: figures are shown in dollars, but the maths is identical for any currency, so you can use it for rupee, pound or euro loans by entering your own amounts.</li>
      </ul>
      <p>Treat the output as a planning figure, then ask your lender for an official loan estimate before making a decision. For background on how rate moves reach borrowers, see our latest coverage in the <a className="underline" href="/category/loans-and-mortgage">Loans &amp; Mortgage</a> section.</p>
    </section>
  );
}
