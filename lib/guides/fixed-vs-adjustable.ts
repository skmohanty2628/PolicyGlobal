import { Guide } from './types';

export const guide: Guide = {
  slug: "fixed-vs-adjustable-rate-mortgage",
  title: "Fixed vs Adjustable-Rate Mortgages: How Each Works and Who They Suit",
  description: "How fixed-rate and adjustable or variable-rate mortgages work, what caps and margins mean, a worked payment example, and how to decide between them.",
  category: "Loans & Mortgage",
  readingMinutes: 8,
  published: '2026-11-12',
  updated: '2026-11-12',
  relatedTool: "loan-emi-calculator",
  intro: "Choosing a mortgage is partly a choice about who carries the risk of interest rates changing. With a fixed rate, the lender carries it and you pay for that certainty. With an adjustable or variable rate, you carry it and are usually paid with a lower rate at the start. Neither is better in general. This guide explains how each type works, the terms to look for in the paperwork, and the questions that settle which one suits you.",
  sections: [
    {
      heading: "How a fixed-rate mortgage works",
      paragraphs: [
        "The interest rate is set at the start and does not change for the fixed period. In some countries, such as the United States, the rate can be fixed for the whole life of the loan, commonly 15 or 30 years. In others, including the United Kingdom, Canada and Australia, the rate is typically fixed for a shorter period such as two to five years, after which the loan moves to a variable rate or is refinanced.",
        "The benefit is a payment of principal and interest that you can plan around. The cost is that the fixed rate is often higher than the starting rate on a comparable adjustable loan, and leaving a fixed deal early can trigger a prepayment or break charge in some markets.",
      ],
    },
    {
      heading: "How an adjustable or variable rate works",
      paragraphs: [
        "The rate changes over time. In a classic adjustable-rate mortgage, the rate equals a published benchmark index plus a fixed margin set by the lender. When the index moves, the rate is reset on a schedule. Many such loans are hybrids: the rate is fixed for an initial period and then adjusts at set intervals. A loan described as 5/1, for example, is fixed for five years and then adjusts once a year.",
        "In other markets, a variable or tracker rate follows the central bank's policy rate or the lender's own standard rate, and can change whenever that rate does. In India, most floating-rate home loans are linked to an external benchmark such as the repo rate.",
      ],
      bullets: [
        "Index: the benchmark the rate follows",
        "Margin: the fixed amount the lender adds to the index",
        "Adjustment period: how often the rate can change",
        "Caps: limits on how far the rate can move",
      ],
    },
    {
      heading: "Caps: the limits on change",
      paragraphs: [
        "Many adjustable loans include caps. An initial cap limits the first change after the fixed period. A periodic cap limits each later change. A lifetime cap sets the highest rate the loan can ever reach. A loan with caps written as 2/2/5 can rise by up to two points at the first reset, up to two points at each later reset, and by no more than five points above the starting rate in total.",
        "Not every variable loan has caps, particularly outside the United States. If there is no cap, the worst case is open-ended, and you should test your budget against a rate several points higher.",
      ],
    },
    {
      heading: "A worked example",
      paragraphs: [
        "Take a loan of 300,000 over 30 years. At a fixed rate of 6.5%, the monthly payment of principal and interest is about 1,896 for the whole term.",
        "An adjustable loan starting at 5.75% costs about 1,751 a month, which is 145 less. Over the first five years that saves about 8,700 in payments. After five years, the balance is about 278,300 with 25 years left. If the rate then resets to 7.75%, the payment rises to about 2,102, which is roughly 350 more than before and about 206 more than the fixed loan. If the rate instead fell to 4.75%, the payment would drop to about 1,587.",
        "The example shows the trade. The adjustable loan is cheaper at first and may be cheaper or dearer later. The fixed loan costs more at first and removes the uncertainty.",
      ],
    },
    {
      heading: "Questions that decide it",
      paragraphs: [
        "How long will you keep the loan? If you expect to sell or refinance before the first adjustment, the lower starting rate of a hybrid loan may simply be a saving. If you plan to stay for decades, the fixed rate's certainty is worth more.",
        "Could you afford the worst case? Work out the payment at the lifetime cap, or at a rate several points higher if there is no cap. If that payment would break your budget, the adjustable loan is a risk you cannot carry.",
        "How big is the discount? When fixed and adjustable rates are close together, you are paid little for taking the risk. When the gap is wide, the case for adjustable is stronger.",
      ],
    },
    {
      heading: "Common misunderstandings",
      paragraphs: [
        "A fixed rate does not fix your whole housing payment. Property tax and insurance can still rise. A low starting rate is not a forecast that rates will stay low. And an adjustable loan is not automatically reckless: for a borrower with spare income and a short time horizon, it can be the cheaper and reasonable choice.",
      ],
    },
    {
      heading: "What to read in the offer",
      paragraphs: [
        "Before signing, find these items in the loan documents.",
      ],
      bullets: [
        "The index and the margin, or the reference rate the loan follows",
        "When the first adjustment happens and how often after that",
        "All caps, and the maximum possible payment",
        "Any prepayment or break charges, and when they apply",
        "Whether you can switch to a fixed rate later and at what cost",
      ],
    },
  ],
  takeaways: [
    "A fixed rate buys certainty; an adjustable rate usually starts lower and can rise or fall.",
    "Adjustable rates are an index plus a margin, often with caps on each change and over the life of the loan.",
    "Fixed periods differ by country: whole-term in some, a few years in others.",
    "Test your budget at the highest rate the loan allows before choosing adjustable.",
    "The shorter you will keep the loan, the more a lower starting rate is worth.",
  ],
  faqs: [
    { q: "Is an adjustable-rate mortgage always cheaper at the start?", a: "Usually but not always. The gap depends on market conditions, and sometimes fixed and adjustable rates are close." },
    { q: "Can I switch from adjustable to fixed later?", a: "Often yes, by refinancing or using a conversion option, but costs and the rates on offer at that time will apply." },
    { q: "What does 5/1 mean?", a: "The rate is fixed for the first five years and can then adjust once every year." },
  ],
};
