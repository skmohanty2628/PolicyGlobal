export default function Explainer() {
  return (
    <section className="mt-10 space-y-4 text-slate-700 leading-relaxed">
      <h2 className="font-serif font-bold text-2xl mt-10 mb-3" style={{ color: '#0A1628' }}> The method behind the numbers</h2>
      <p>This tool uses the needs-based approach that many planners prefer over a rule of thumb such as "ten times income". It adds up what your household would have to pay for or replace if your income stopped — several years of income, outstanding debts, the mortgage, children's education and final expenses — then subtracts what you already have: existing life cover and savings your family could realistically draw on. The remainder is the gap that a policy would need to fill.</p>
      <h2 className="font-serif font-bold text-2xl mt-10 mb-3" style={{ color: '#0A1628' }}> Choosing the number of years</h2>
      <p>The years box is the assumption that moves the result most. A common starting point is the number of years until your youngest child is independent, or until your partner could be expected to return to full earning capacity. If you are single with no dependants and no co-signed debt, your need may be close to just final expenses; if you have a young family and a large mortgage, it can be many times your salary.</p>
      <h2 className="font-serif font-bold text-2xl mt-10 mb-3" style={{ color: '#0A1628' }}> Term versus whole life</h2>
      <p>Most families whose need is temporary — a mortgage and dependent children — are served by level term insurance, which is far cheaper per dollar of cover than permanent policies. Permanent cover can make sense for lifelong needs such as providing for a dependent with special needs or estate-planning goals, but it costs more and the details vary widely, so compare quotes and read the illustration carefully. Whatever type you choose, make sure the beneficiary details are current.</p>
      <h2 className="font-serif font-bold text-2xl mt-10 mb-3" style={{ color: '#0A1628' }}> Things the calculator simplifies</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>It does not discount for investment growth or inflation; for long horizons you may want a margin on top of the estimate.</li>
        <li>It ignores employer or government survivor benefits, which can be significant in some countries.</li>
        <li>It treats savings as fully available, but retirement accounts may carry tax or penalties if drawn early.</li>
      </ul>
      <p>Use the result to start a conversation with a licensed adviser or to compare real quotes, not as a recommendation to buy a specific product.</p>
    </section>
  );
}
