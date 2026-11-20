import { Guide } from './types';

export const guide: Guide = {
  slug: "real-return-on-savings-inflation-explained",
  title: "Real Return on Savings: Is Your Interest Actually Beating Inflation?",
  description: "How to work out the real return on a savings account or CD after inflation and tax, with the exact formula, worked examples and the mistakes that make cash lose value.",
  category: "Personal Finance",
  readingMinutes: 8,
  published: '2026-11-20',
  updated: '2026-11-20',
  relatedTool: "compound-interest-calculator",
  intro: "A savings account that pays 4% sounds like it is growing your money. Whether it really is depends on two things the headline rate ignores: inflation, which raises the price of everything you will later buy, and tax on the interest. The return left after both is your real return, and it is the only number that tells you whether your savings will buy more in future or less. This guide explains how to calculate it, with worked examples you can check in our compound interest calculator.",
  sections: [
    {
      heading: "Nominal return and real return",
      paragraphs: [
        "The nominal return is the rate the bank advertises. The real return is what that rate is worth after inflation. If your balance grows 4% in a year but prices also rise 4%, you can buy exactly what you could buy a year earlier. Your real return is zero, even though the number on your statement went up.",
        "Inflation is usually measured by a consumer price index, such as CPI in the US or UK. It is an average across a basket of goods and services, so your personal inflation rate may be higher or lower depending on what you spend on.",
      ],
    },
    {
      heading: "The formula",
      paragraphs: [
        "The quick approximation is to subtract inflation from the interest rate. A 5% account with 3% inflation gives roughly 2%. That is close enough for small numbers, but the exact formula is: real return = (1 + interest rate) / (1 + inflation rate) - 1.",
        "Using the exact formula, 5% interest and 3% inflation gives (1.05 / 1.03) - 1 = about 1.94%. With 4% interest and 3.6% inflation, the real return is (1.04 / 1.036) - 1 = about 0.39%. The approximation and the exact answer differ only slightly at these rates, but the gap grows when inflation is high.",
      ],
      bullets: [
        "Approximation: real return = interest rate - inflation",
        "Exact: real return = (1 + interest) / (1 + inflation) - 1",
        "Example: (1.05 / 1.03) - 1 = 1.94%",
      ],
    },
    {
      heading: "Don't forget tax",
      paragraphs: [
        "Interest on ordinary savings accounts and CDs is usually taxed as income. Tax comes off the nominal interest, not the real return, so it bites harder than it looks.",
        "Take a 4.5% savings account and a saver in a 22% tax bracket. After tax, the interest is 4.5% x (1 - 0.22) = 3.51%. With inflation at 3%, the after-tax real return is (1.0351 / 1.03) - 1 = about 0.5%. A rate that looked 1.5 points ahead of inflation is only half a point ahead once tax is counted. Tax-advantaged accounts, such as an ISA in the UK or a Roth IRA in the US for long-term money, keep more of the return.",
      ],
    },
    {
      heading: "Worked example: ten years of savings",
      paragraphs: [
        "Suppose you put $10,000 in an account paying 4% a year, compounded monthly, and leave it for 10 years while inflation averages 3%. The balance grows to about $14,908. In today's money, dividing by 1.03 to the power of 10, that is worth about $11,093. Your money grew by nearly $4,900 on paper, but your buying power grew by only about $1,100.",
        "Now suppose the same $10,000 sits in a checking account paying 0.5%. After 10 years it is about $10,513, but in today's money it is worth only about $7,822. You would have lost more than a fifth of your buying power while the balance appeared to rise. Money left in an account that pays almost nothing is the most common way savers lose value without noticing.",
        "You can reproduce these numbers in our compound interest calculator: enter the starting amount, set the monthly contribution to zero, and set the rate, years and inflation assumption. The value in today's money is the real result.",
      ],
    },
    {
      heading: "How fast inflation erodes cash",
      paragraphs: [
        "At 3% inflation, $10,000 kept as cash with no interest would buy only about $7,441 worth of today's goods after 10 years, a loss of about 26% of its value. The rule of 70 gives a quick estimate of how long it takes inflation to halve the value of money: divide 70 by the inflation rate. At 3%, that is about 23 years. At 5%, it is 14 years.",
      ],
    },
    {
      heading: "When a negative real return is acceptable",
      paragraphs: [
        "Not all savings need to beat inflation. An emergency fund exists to be safe and instantly available, and a small negative real return is the price of that safety. The aim there is to minimise the loss by using the best-paying easy-access account you can find, not to take risk.",
        "Money you will not need for many years is different. Over long periods, cash has often struggled to beat inflation after tax, which is why long-term savings for retirement are usually invested. Investing brings the risk of losses in the short term, so the right mix depends on when you need the money and how much risk you can accept.",
      ],
    },
    {
      heading: "Ways to improve your real return",
      paragraphs: [
        "Small changes add up over time. Consider the following:",
      ],
      bullets: [
        "Move cash out of accounts paying close to zero into high-yield savings or money market accounts",
        "Use fixed-term CDs or bonds for money you will not need for a set period, if they pay more",
        "Use tax-advantaged accounts where you are eligible, to keep more of the interest",
        "Consider inflation-protected savings such as US I bonds or TIPS, or UK index-linked products, for part of your savings",
        "Review rates at least once a year: introductory rates often fall after a few months",
      ],
    },
  ],
  takeaways: [
    "Real return = (1 + interest rate) / (1 + inflation) - 1; subtracting is a close approximation.",
    "Tax comes off the nominal interest, so after-tax real returns are often much smaller than they look.",
    "$10,000 at 4% for 10 years with 3% inflation grows to about $14,908 but is worth about $11,093 in today's money.",
    "Cash paying 0.5% loses about a fifth of its buying power over 10 years at 3% inflation.",
    "Emergency funds can accept a small negative real return; long-term money usually needs to beat inflation.",
  ],
  faqs: [
    { q: "What is a good real return on savings?", a: "Any positive real return after tax means your savings are gaining buying power. For easy-access cash, a small positive or slightly negative real return is common. Long-term investments aim for higher real returns, with more risk." },
    { q: "Can a real return be negative?", a: "Yes. If inflation is higher than your interest rate after tax, your money buys less over time even though the balance grows." },
    { q: "Which inflation rate should I use?", a: "The official CPI rate is the usual benchmark. If your spending is heavily on items rising faster, such as rent, energy or insurance, your personal inflation rate may be higher." },
    { q: "Is the approximation good enough?", a: "For everyday rates of a few percent, subtracting inflation from the interest rate is within a few hundredths of a point. Use the exact formula when inflation or interest rates are high." },
  ],
};
