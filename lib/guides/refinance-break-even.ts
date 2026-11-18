import { Guide } from './types';

export const guide: Guide = {
  slug: "when-to-refinance-mortgage-break-even",
  title: "When Does Refinancing a Mortgage Pay Off? The Break-Even Explained",
  description: "How to tell whether a mortgage refinance is worth it: the break-even formula, why the new term and the years you stay matter, worked examples, and the costs people forget.",
  category: "Loans & Mortgage",
  readingMinutes: 9,
  published: '2026-11-18',
  updated: '2026-11-18',
  relatedTool: "mortgage-refinance-break-even-calculator",
  intro: "When mortgage rates fall, lenders start advertising refinancing, and the pitch is always the same: a lower monthly payment. A lower payment is not the same as saving money. Refinancing has up-front costs, it usually restarts the clock on your loan, and its value depends on how long you keep the new mortgage. This guide explains the break-even calculation, the two corrections that make it honest, and works through examples you can check with our calculator.",
  sections: [
    {
      heading: "What refinancing actually does",
      paragraphs: [
        "A refinance is a new mortgage that pays off your old one. You choose a new rate and a new term, and you pay closing costs again: lender fees, an appraisal, title insurance, recording fees and sometimes points, which are fees paid to buy a lower rate. In the US these costs commonly come to 2% to 5% of the loan amount, though they vary widely by lender and state.",
        "Because the costs are paid now and the savings arrive month by month, every refinance is a simple investment. You spend money today to cut your payments in future. The question is how long it takes to get that money back, and whether you will keep the loan that long.",
      ],
    },
    {
      heading: "The simple break-even formula",
      paragraphs: [
        "The basic test divides closing costs by the monthly saving in principal and interest. The answer is the number of months before the refinance has paid for itself.",
        "Take a homeowner with a $300,000 balance at 7.5% and 28 years left. The monthly principal and interest payment is about $2,139. A new 30-year loan at 6.25% would cost about $1,847 a month, a saving of about $291. With $6,000 of closing costs paid in cash, the break-even is 6,000 divided by 291, or about 21 months. If the homeowner keeps the loan for more than 21 months, the refinance pays off on this measure.",
      ],
      bullets: [
        "Break-even months = closing costs / monthly payment saving",
        "Example: $6,000 / $291 = about 21 months",
      ],
    },
    {
      heading: "Correction one: count the years you will really stay",
      paragraphs: [
        "The break-even only helps if you compare it with how long you expect to keep the loan. People sell, move for work, or refinance again when rates fall further. The median time US homeowners stay in a home has lengthened in recent years, but many still move within five to ten years.",
        "On our example, if the homeowner keeps the new loan for 7 years, refinancing leaves them about $19,400 better off once payments, the balance still owed and closing costs are all counted. If they sell after 2 years, the gain is only about $1,400, barely more than a rounding error on a $300,000 debt. If they sold after one year, they would be behind.",
      ],
    },
    {
      heading: "Correction two: the new term changes the picture",
      paragraphs: [
        "The example above swaps a loan with 28 years left for a new 30-year loan. Part of the lower payment comes from stretching the debt over two extra years, not from the lower rate. That is why the calculator compares balances as well as payments: after 7 years, the new loan's balance is close to the old one's, but over the full term you make two more years of payments.",
        "Choosing a shorter new term avoids this. Refinancing the same $300,000 to 6.25% over 25 years gives a payment of about $1,979, a saving of only about $160 a month, so the simple break-even stretches to about 38 months. But because the debt is paid off faster, the net gain after 7 years is higher, about $22,150, and total interest over the life of the loan falls from about $419,000 to about $294,000. The simple break-even makes the shorter term look worse when it is actually the better deal for someone who stays.",
      ],
    },
    {
      heading: "Paying costs in cash or adding them to the loan",
      paragraphs: [
        "Many lenders let you add closing costs to the new balance. You then pay nothing at closing, but you pay interest on the costs for as long as you keep the loan. On our example, adding $6,000 to the loan raises the new payment to about $1,884, cutting the monthly saving to about $255 and moving break-even to about 24 months. The net gain after 7 years falls to about $16,900.",
        "A no-closing-cost refinance works in a similar way: the lender covers the fees in exchange for a higher rate. Treat it as a loan at that higher rate with zero costs and compare it on the same basis. For people who expect to move within a few years, no-cost offers can be the better choice because there is nothing to recover.",
      ],
    },
    {
      heading: "How big a rate drop is worth it?",
      paragraphs: [
        "A common rule of thumb says refinancing is worth considering when you can cut your rate by about 0.75 to 1 percentage point. The rule is crude, because it ignores your balance, your costs and how long you will stay, but it explains why small moves rarely work.",
        "Suppose a buyer took out $300,000 at 7.11% and now has 29 years left. Refinancing to 6.5% over 30 years with $6,000 of costs saves about $142 a month. Break-even is about 42 months, and after 5 years the net gain is only about $3,000. On a larger loan, the same rate drop saves proportionally more, which is why the rule of thumb is a starting point, not an answer.",
      ],
    },
    {
      heading: "Costs and details people forget",
      paragraphs: [
        "A refinance can change more than the rate. Check each of these before signing:",
      ],
      bullets: [
        "Escrow: your old lender refunds the escrow balance later, but the new loan often needs a fresh deposit at closing",
        "Mortgage insurance: removing it can add to the saving, while a new appraisal at a lower value could bring it back",
        "Prepayment penalties on the old loan, which are rare in the US but common in other countries",
        "Points: paying points lowers the rate but raises costs, so it only pays for people who stay a long time",
        "Cash-out refinances, which raise the balance and should be judged as new borrowing, not as a saving",
      ],
    },
    {
      heading: "How to shop for a refinance",
      paragraphs: [
        "Ask two or three lenders for a Loan Estimate on the same day, since rates change daily. Compare the rate, the total closing costs on page two and the annual percentage rate, which spreads the costs over the loan. Your current lender may offer a streamlined refinance with lower costs. Lock the rate once you have chosen, and check the Closing Disclosure against the Loan Estimate before closing.",
        "Then put the real numbers into our calculator, along with an honest estimate of how long you will keep the loan. If the net gain over that period is small, waiting may cost little and keeps the option open if rates fall further.",
      ],
    },
  ],
  takeaways: [
    "The simple break-even is closing costs divided by the monthly saving.",
    "Compare the break-even with how long you will really keep the loan, not with the loan's full term.",
    "A longer new term lowers the payment partly by stretching the debt; count the balance you still owe.",
    "Adding costs to the loan avoids cash at closing but reduces the saving and delays break-even.",
    "Small rate drops rarely pay off unless the loan is large and you stay for many years.",
  ],
  faqs: [
    { q: "How long does it take to break even on a refinance?", a: "Divide your closing costs by the monthly saving. On a $300,000 loan refinanced from 7.5% to 6.25% with $6,000 of costs, it takes about 21 months. Smaller rate drops or higher costs take longer." },
    { q: "Is it worth refinancing for 0.5%?", a: "Sometimes, if the loan is large, costs are low and you plan to stay for many years. On a typical loan, a half-point drop often takes three to four years to break even." },
    { q: "Does refinancing restart my mortgage?", a: "It replaces it with a new loan and a new term. Choosing a term no longer than the years left on your current loan avoids paying for extra years." },
    { q: "Should I roll closing costs into the new loan?", a: "It saves cash today but you pay interest on the costs and the monthly saving is smaller. It can make sense if you need to keep cash for emergencies." },
  ],
};
