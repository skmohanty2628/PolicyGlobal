import { Guide } from './types';

export const guide: Guide = {
  slug: 'term-vs-whole-life-insurance',
  title: 'Term vs Whole Life Insurance: How to Choose the Right Cover',
  description: 'What term, whole and universal life insurance actually do, what they cost relative to each other, and a simple way to decide which fits your situation.',
  category: 'Life Insurance',
  readingMinutes: 7,
  published: '2026-10-12',
  updated: '2026-10-12',
  relatedTool: 'life-insurance-needs-calculator',
  intro: `Life insurance is one of the few financial products where the cheapest option is often the right one — and also one where the most expensive option is sold most aggressively. The reason is that term and permanent policies solve different problems. Term insurance replaces income for a limited period. Permanent insurance, such as whole life, is a lifelong contract that also builds a cash value. Knowing which problem you are solving is more important than comparing brands.`,
  sections: [
    {
      heading: 'What term life insurance does',
      paragraphs: [
        `Term life pays a fixed death benefit if you die within a set period — commonly 10, 20 or 30 years — and pays nothing if you outlive the term. Premiums are usually level for the whole term, and the policy has no savings component. Because the insurer is only covering a limited window and most term policies never pay out, the price per dollar of cover is low, especially for younger and healthier applicants.`,
        `Term is designed for temporary but serious financial responsibilities: a mortgage, children who depend on your income, a business loan you have guaranteed. The sensible length is the longest of those obligations. A 30-year term for a 30-year mortgage, or a 20-year term to cover the years until your children are independent, are typical matches.`,
      ],
    },
    {
      heading: 'What whole life insurance does',
      paragraphs: [
        `Whole life covers you for your entire life as long as premiums are paid. Part of each premium goes towards the cost of insurance and expenses; the rest builds a cash value that grows at a rate set by the insurer, and some policies from mutual insurers also pay dividends. You can borrow against the cash value or surrender the policy for it, though loans reduce the death benefit if unpaid and early surrender often returns less than you paid in.`,
        `Because the insurer is guaranteed to pay out eventually and is also funding a savings feature, premiums are many times higher than for term cover of the same size. People commonly buy whole life for needs that do not expire: leaving an inheritance, providing for a dependent adult, funding estate taxes, or supplementing retirement planning once other tax-advantaged accounts are used.`,
      ],
    },
    {
      heading: 'Universal and variable policies in brief',
      paragraphs: [
        `Universal life is a permanent policy with flexible premiums and a cash value that earns interest tied to the insurer's declared rate or an index. Variable universal life lets the cash value be invested in sub-accounts, so returns, and risk, depend on markets. These products are more complex, with charges that can be hard to compare, and a policy that is underfunded can lapse. If you are offered one, ask for the guaranteed (not just projected) figures and an in-force illustration showing what happens if returns are lower than assumed.`,
      ],
    },
    {
      heading: 'A quick cost comparison',
      paragraphs: [
        `Exact prices depend on age, health, smoking status and country, but the shape is consistent. For a healthy non-smoker in their 30s, a 20-year level term policy for a sizeable amount can cost a modest monthly sum, while a whole life policy with the same death benefit can cost many times as much. The gap is the price of lifelong coverage and the cash value feature.`,
        `The "buy term and invest the difference" argument follows from this: if you can invest the savings reliably, you may end up with more wealth than the cash value would provide. The counter-argument is that many people do not invest the difference consistently, and permanent insurance forces the discipline. Both points are fair; what matters is your honest behaviour and whether you actually need lifelong cover.`,
      ],
    },
    {
      heading: 'How to decide',
      paragraphs: [`A practical sequence works for most households.`],
      bullets: [
        `Estimate the gap first. Add the income your family would need, debts, mortgage and education costs, then subtract existing cover and savings. Our life insurance needs calculator does this in a minute.`,
        `If the need ends when the mortgage is paid and the children are independent, price term cover for that length of time.`,
        `If part of the need is permanent — a dependent with lifelong needs, a large estate, a business succession plan — consider adding a smaller permanent policy for that portion only.`,
        `Check what you already have through an employer, but remember that group cover usually ends if you leave the job.`,
        `Get quotes from several insurers or an independent broker, and compare both price and financial strength ratings.`,
      ],
    },
    {
      heading: 'Features worth understanding before you buy',
      paragraphs: [
        `Convertibility lets you switch a term policy to a permanent one later without a new medical exam, which is valuable if your health changes. Riders add optional benefits such as waiver of premium if you become disabled, or accelerated benefits if you are terminally ill. The contestability period — usually the first two years — allows the insurer to investigate claims for inaccuracies on the application, which is why you must answer health questions completely and truthfully. Misstatements can lead to a reduced or denied claim.`,
      ],
    },
  ],
  takeaways: [
    `Term insurance covers a temporary need cheaply; whole life covers a permanent need at a much higher cost.`,
    `Size the cover from your actual financial obligations, not from a fixed multiple of income.`,
    `Choose a term at least as long as your longest major obligation, and look for convertibility.`,
    `Always answer application questions fully; mistakes can jeopardise a claim.`,
  ],
  faqs: [
    { q: 'What happens if I outlive my term policy?', a: `The cover ends and no benefit is paid. Some policies can be renewed or converted, usually at a higher price.` },
    { q: 'Is the cash value in whole life mine to keep?', a: `You can access it through loans or surrender, but surrendering ends the cover, and early on the cash value is often lower than the premiums paid.` },
    { q: 'Should I buy life insurance for a child?', a: `Usually only if there is a specific reason. The main need for life insurance is to replace income for people who depend on someone's earnings.` },
    { q: 'Do I need a medical exam?', a: `Many insurers offer simplified or no-exam products, typically at higher prices or lower limits than fully underwritten policies.` },
  ],
};
