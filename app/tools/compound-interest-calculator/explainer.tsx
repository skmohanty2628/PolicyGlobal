export default function Explainer() {
  return (
    <section className="mt-10 space-y-4 text-slate-700 leading-relaxed">
      <h2 className="font-serif font-bold text-2xl mt-10 mb-3" style={{ color: '#0A1628' }}>What compound interest is</h2>
      <p>Compound interest means earning a return on your earlier returns as well as on the money you put in. In the first years most of the balance is your own contributions. Later, growth makes up a larger share, which is why time matters more than almost any other input. The table under the result shows this shift by listing how much of the balance came from growth at each point.</p>
      <h2 className="font-serif font-bold text-2xl mt-10 mb-3" style={{ color: '#0A1628' }}>How the calculation works</h2>
      <p>The tool compounds monthly. Each month the balance grows by one twelfth of the annual rate, and then your monthly contribution is added. The result is the standard future value of a lump sum plus the future value of a series of equal monthly payments made at the end of each month. With a rate of zero, the balance is simply everything you paid in.</p>
      <p>The figure in today&apos;s money divides the final balance by the effect of inflation over the period, so you can judge what the balance could buy. The doubling time uses the same monthly compounding. It is close to the rule of 72, which divides 72 by the annual rate.</p>
      <h2 className="font-serif font-bold text-2xl mt-10 mb-3" style={{ color: '#0A1628' }}>Choosing a realistic rate</h2>
      <p>The rate is the biggest assumption. A savings account or fixed deposit pays a stated rate, which can change. Investments such as shares and bonds have no fixed rate, their returns vary from year to year, and they can lose money. No rate in this tool is a forecast or a promise. A sensible approach is to try a low, a middle and a high rate and plan around the low one.</p>
      <h2 className="font-serif font-bold text-2xl mt-10 mb-3" style={{ color: '#0A1628' }}>What the tool leaves out</h2>
      <p>The result ignores tax on interest or gains, account and fund fees, and changes in your contributions over time. Fees matter a great deal over long periods: you can see their effect by lowering the rate by the annual fee. The tool also assumes the same return every year, while real returns arrive unevenly.</p>
      <p>This is an educational estimate, not advice. For the full explanation, read our guide: <a className="underline" href="/guides/how-compound-interest-works">How Compound Interest Works</a>.</p>
    </section>
  );
}
