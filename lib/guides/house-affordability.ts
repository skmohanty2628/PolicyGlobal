import { Guide } from './types';

export const guide: Guide = {
  slug: "how-much-house-can-you-afford-debt-to-income",
  title: "How Much House Can You Afford? Debt-to-Income Ratios Explained",
  description: "How lenders and budgets size a mortgage: the housing and total debt-to-income ratios, a worked example, why interest rates change the answer, and the costs people forget.",
  category: "Loans & Mortgage",
  readingMinutes: 8,
  published: '2026-11-12',
  updated: '2026-11-12',
  relatedTool: "mortgage-affordability-calculator",
  intro: "The question of how much house you can afford has two answers. One is the most a lender will let you borrow. The other is the most you can borrow and still live comfortably. Both start from the same idea, the debt-to-income ratio, which compares your monthly payments with your monthly income. This guide explains the two ratios, works through an example, and lists the costs that the ratios do not capture.",
  sections: [
    {
      heading: "The two ratios",
      paragraphs: [
        "The housing ratio, sometimes called the front-end ratio, is your total monthly housing cost divided by your gross monthly income, which is income before tax. Housing cost here means the loan payment of principal and interest, plus property tax and home insurance, and any mortgage insurance or homeowners association fees.",
        "The total debt ratio, or back-end ratio, adds your other monthly debt payments, such as car loans, student loans and minimum card payments, to the housing cost before dividing by income. Everyday spending such as food and utilities is not included in either ratio.",
      ],
      bullets: [
        "Housing ratio = monthly housing cost / gross monthly income",
        "Total debt ratio = (housing cost + other debt payments) / gross monthly income",
      ],
    },
    {
      heading: "The 28/36 guideline",
      paragraphs: [
        "A long-standing rule of thumb says housing should take no more than 28% of gross income and total debts no more than 36%. It is a guideline, not a law. Actual limits depend on the country, the lender and the type of loan, and many lenders accept higher ratios for borrowers with strong credit or large savings. The guideline is still useful as a conservative starting point for your own budget.",
      ],
    },
    {
      heading: "A worked example",
      paragraphs: [
        "Suppose a household earns 90,000 a year before tax, which is 7,500 a month. It pays 450 a month on other debts, has 40,000 for a down payment, and expects property tax and insurance of 450 a month. The mortgage is a 30-year fixed loan at 6.5%.",
        "The housing limit is 28% of 7,500, or 2,100 a month. The total debt limit is 36% of 7,500, or 2,700, minus the 450 of other debts, leaving 2,250. The lower figure applies, so the maximum housing cost is 2,100. Taking off 450 for tax and insurance leaves 1,650 for principal and interest.",
        "At 6.5% over 30 years, a payment of 1,650 supports a loan of about 261,000. Adding the 40,000 down payment gives a home price of about 301,000.",
      ],
    },
    {
      heading: "How interest rates change the answer",
      paragraphs: [
        "The loan a payment can support falls as rates rise. With the same 1,650 payment, the loan is about 275,000 at 6% and about 248,000 at 7%. One percentage point in either direction moves the affordable price by tens of thousands. This is why buyers who are stretched at today's rate should be careful with variable or adjustable loans, where the rate can increase later.",
      ],
    },
    {
      heading: "How other debts reduce the result",
      paragraphs: [
        "In the example the housing ratio set the limit. If the same household paid 900 a month on other debts, the total debt limit would be 2,700 minus 900, or 1,800, and that would become the binding figure. The amount for principal and interest would drop to 1,350 and the loan to about 214,000. Paying down a car loan or card balance before applying can raise borrowing capacity more than a small pay rise does.",
      ],
    },
    {
      heading: "The down payment",
      paragraphs: [
        "A larger down payment raises the price you can afford one for one, and it reduces the loan and the interest paid over time. In many markets, a down payment below 20% of the price leads the lender to require mortgage insurance, which adds a monthly cost and so reduces the loan you qualify for. Rules and thresholds differ by country and loan type, so ask the lender how it applies them.",
      ],
    },
    {
      heading: "Costs the ratios do not show",
      paragraphs: [
        "Passing the ratio test does not mean the home is comfortable to own. Several real costs sit outside the formula.",
      ],
      bullets: [
        "Closing costs, legal fees and taxes on the purchase",
        "Moving, furniture and immediate repairs",
        "Ongoing maintenance, often budgeted at around 1% of the home's value a year as a rough guide",
        "Utilities, which are usually higher than in a rented flat",
        "An emergency fund that should survive the purchase",
      ],
    },
    {
      heading: "Lender maximum versus your comfort level",
      paragraphs: [
        "Lenders work from gross income, but you pay the mortgage from take-home pay. They also do not know your childcare costs, your retirement saving or how secure your job is. A practical test is to live for a few months on the budget the new payment would leave and save the difference. If that is hard, the price is too high for you, whatever the formula allows.",
        "For a firm number, ask a lender for a written pre-approval, which is based on your documents and credit record. An online estimate, including ours, is only a starting point.",
      ],
    },
  ],
  takeaways: [
    "Affordability is measured by two ratios: housing cost and total debt, each against gross income.",
    "The 28/36 guideline is a cautious rule of thumb, not a legal limit.",
    "The lower of the two limits sets your maximum monthly housing cost.",
    "A one-point change in the interest rate moves the affordable loan by a large amount.",
    "Budget for closing costs, maintenance and an emergency fund outside the ratios.",
  ],
  faqs: [
    { q: "Is debt-to-income based on income before or after tax?", a: "Lenders normally use gross income, which is before tax. Your own budget should use take-home pay." },
    { q: "Do utilities and groceries count as debt?", a: "No. The ratios count housing costs and contractual debt payments only, which is one reason they can overstate what is comfortable." },
    { q: "Can I borrow more than the 28/36 guideline suggests?", a: "Often yes, because many lenders allow higher ratios. Whether you should depends on the rest of your budget." },
  ],
};
