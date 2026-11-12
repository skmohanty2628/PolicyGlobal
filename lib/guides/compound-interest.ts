import { Guide } from './types';

export const guide: Guide = {
  slug: "how-compound-interest-works",
  title: "How Compound Interest Works: The Maths Behind Savings, Investments and Debt",
  description: "Compound interest explained with clear examples: the formula, the rule of 72, why time and fees matter, and how the same maths works against you on debt.",
  category: "Personal Finance",
  readingMinutes: 8,
  published: '2026-11-12',
  updated: '2026-11-12',
  relatedTool: "compound-interest-calculator",
  intro: "Compound interest is the reason a small amount saved early can end up larger than a big amount saved late, and the reason an unpaid credit card balance grows so quickly. The idea is simple: interest is added to the balance, and from then on that interest earns interest too. This guide explains the maths in plain language, shows worked examples, and covers the two things that quietly change the result: fees and inflation.",
  sections: [
    {
      heading: "Simple interest and compound interest",
      paragraphs: [
        "With simple interest, you earn interest only on the original amount. Put 1,000 away at 5% simple interest and you earn 50 every year, so after 10 years you have 1,500.",
        "With compound interest, each year's interest is added to the balance and earns interest itself. The same 1,000 at 5% compounded once a year becomes 1,050 after one year, 1,102.50 after two, and about 1,629 after ten. The extra 129 is interest earned on interest. The gap is small at first and widens every year.",
      ],
    },
    {
      heading: "The formula",
      paragraphs: [
        "For a single lump sum, the future value equals the starting amount multiplied by one plus the rate per period, raised to the number of periods. If interest is added monthly, the rate per period is the annual rate divided by twelve and the number of periods is the number of months.",
        "How often interest is added makes a modest difference. At 5%, 1,000 grows to about 1,629 in ten years with yearly compounding and about 1,647 with monthly compounding. To compare products that compound at different intervals, look at the annual percentage yield or effective annual rate, which already includes the effect of compounding.",
      ],
      bullets: [
        "Future value = starting amount x (1 + rate per period) ^ number of periods",
        "More frequent compounding gives slightly more growth at the same stated rate",
        "Effective annual rate lets you compare products fairly",
      ],
    },
    {
      heading: "Why time matters more than the amount",
      paragraphs: [
        "Because growth builds on itself, the number of years is the most powerful input. Consider 200 saved every month at 6% a year, compounded monthly. After 10 years you have paid in 24,000 and the balance is about 32,800. After 20 years you have paid in 48,000 and have about 92,400. After 30 years you have paid in 72,000 and have about 200,900.",
        "Each ten-year block adds the same 24,000 of contributions, yet the balance grows by about 32,800, then about 59,600, then about 108,500. In the last decade, most of the increase comes from growth on money already there, not from new saving.",
      ],
    },
    {
      heading: "The rule of 72",
      paragraphs: [
        "A quick way to estimate doubling time is to divide 72 by the annual rate. At 6%, money doubles in about 12 years. At 3%, it takes about 24 years, and at 9%, about 8 years. The rule is an approximation that works well for rates between roughly 4% and 12%.",
        "The same rule works for anything that compounds, including prices. With inflation of 3% a year, the cost of living doubles in about 24 years.",
      ],
    },
    {
      heading: "Fees compound too",
      paragraphs: [
        "A yearly fee is taken from the balance, so it reduces the amount that goes on to grow. In the example above, 200 a month for 30 years at 6% reaches about 200,900. If a 1% annual fee cuts the net return to 5%, the result is about 166,500. A fee that sounds small has removed about 34,000, around 17% of the final balance.",
        "That is why the cost of a fund, pension or savings product deserves as much attention as its expected return. The return is uncertain. The fee is not.",
      ],
    },
    {
      heading: "Inflation and real returns",
      paragraphs: [
        "A balance in the future will not buy what the same number buys today. To see growth in real terms, subtract inflation from the return as a rough guide. A 6% return with 2.5% inflation is a real return of about 3.5%. Savings that earn less than inflation lose purchasing power even though the balance rises.",
      ],
    },
    {
      heading: "When compounding works against you",
      paragraphs: [
        "The same maths applies to debt. If a credit card charges 20% a year and nothing is repaid, the rule of 72 says the balance doubles in under four years. Paying only a small minimum each month means most of the payment covers interest, so the debt falls very slowly.",
        "For this reason, paying off high-interest debt is usually the best guaranteed return available. Clearing a 20% debt saves 20% a year with certainty, which no savings account offers.",
      ],
    },
    {
      heading: "What compounding cannot promise",
      paragraphs: [
        "The examples assume the same rate every year. Savings accounts can change their rates, and investments such as shares rise and fall, sometimes sharply, and can lose money. A projection is an illustration of the maths, not a forecast. It is sensible to test a lower rate as well as a hopeful one, and to avoid plans that only work if returns are high.",
      ],
    },
  ],
  takeaways: [
    "Compound interest is interest earned on earlier interest as well as on what you put in.",
    "Time is the strongest input: later years add far more than early ones.",
    "The rule of 72 estimates doubling time: 72 divided by the annual rate.",
    "A 1% yearly fee can remove a large share of a long-term balance.",
    "The same maths makes high-interest debt grow quickly, so clear it first.",
  ],
  faqs: [
    { q: "How often is interest compounded?", a: "It depends on the product. Daily, monthly, quarterly and yearly are all common. The effective annual rate or annual percentage yield shows the result after compounding." },
    { q: "Is compound interest guaranteed?", a: "Only where the rate is fixed by contract, such as a fixed deposit for its term. Investment returns vary and are not guaranteed." },
    { q: "Does compounding help with small amounts?", a: "Yes. The percentage growth is the same for any amount, and starting early matters more than starting large." },
  ],
};
