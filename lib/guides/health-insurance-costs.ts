import { Guide } from './types';

export const guide: Guide = {
  slug: 'deductible-copay-coinsurance-explained',
  title: 'Deductible, Copay, Coinsurance and Out-of-Pocket Maximum: How Health Insurance Costs Really Work',
  description: 'A plain-English guide to the four numbers that decide what you pay for health care, with worked examples and a checklist for comparing plans.',
  category: 'Healthcare Insurance',
  readingMinutes: 8,
  published: '2026-10-12',
  updated: '2026-10-12',
  relatedTool: 'deductible-break-even-calculator',
  intro: `Most people choose a health plan by looking at the monthly premium and stop there. The premium is only one of five numbers that decide what a year of care will cost you. The other four — the deductible, the copayment, the coinsurance and the out-of-pocket maximum — decide what happens on the day you actually need a doctor, a scan or a hospital bed. This guide explains each one in plain English, walks through two worked examples and ends with a checklist you can use to compare plans before open enrolment closes.`,
  sections: [
    {
      heading: 'The premium: the price of having the plan',
      paragraphs: [
        `The premium is what you pay every month (or what you and your employer pay together) simply to keep the coverage active. You owe it whether you see a doctor once or fifty times. Premiums are the most visible number, which is why they dominate comparison websites, but they say nothing about how much of each bill the insurer will actually pay.`,
        `As a rule, plans with lower premiums push more cost onto you when you use care, and plans with higher premiums take more of it on themselves. Neither is better in the abstract. The right trade-off depends on how much care you expect to use and how much cash you could comfortably find in a bad year.`,
      ],
    },
    {
      heading: 'The deductible: what you pay first',
      paragraphs: [
        `The deductible is the amount of covered care you must pay for yourself each plan year before the insurer starts sharing the cost. If your deductible is 2,000 and you have a 1,200 bill for an imaging scan, you pay the full 1,200 (at the rate your insurer has negotiated with the provider) and 800 of your deductible remains. Once the deductible is met, coinsurance or copays take over for the rest of the year.`,
        `Two details catch people out. First, many plans pay for certain services before the deductible — preventive visits are the most common example — so a high deductible does not mean everything is out of pocket. Second, in family plans there is often both an individual deductible and a larger family deductible, and the rules about how they interact differ between plans.`,
      ],
    },
    {
      heading: 'The copayment: a fixed fee per visit',
      paragraphs: [
        `A copayment, or copay, is a flat amount you pay for a specific service, such as 30 for a primary-care visit or 15 for a generic prescription. Copays are predictable, which makes them easy to budget for. On some plans copays apply from the first visit; on others they only apply after the deductible has been met. The plan summary will say which.`,
      ],
    },
    {
      heading: 'Coinsurance: a percentage split after the deductible',
      paragraphs: [
        `Coinsurance is the percentage of an allowed charge you pay once the deductible is satisfied. With 20% coinsurance, you pay 20 of every 100 of allowed charges and the insurer pays 80. Coinsurance is where large bills become frightening because the percentage applies to a large number: 20% of a 50,000 hospital stay is 10,000. That is why the next number matters so much.`,
      ],
    },
    {
      heading: 'The out-of-pocket maximum: your ceiling',
      paragraphs: [
        `The out-of-pocket maximum is the most you can be required to pay for covered, in-network care in one plan year. Deductibles, copays and coinsurance all count towards it; premiums do not, and neither do charges for services the plan does not cover or for out-of-network care on most plans. After you reach the maximum, the plan pays 100% of covered in-network costs until the year ends.`,
        `For anyone worried about a catastrophic illness or accident, the out-of-pocket maximum is the single most important number on the plan summary. It is your worst case for the year, apart from premiums and uncovered services.`,
      ],
    },
    {
      heading: 'A worked example: two plans, two kinds of year',
      paragraphs: [
        `Imagine Plan A has a 300 monthly premium, a 500 deductible, 10% coinsurance and a 4,000 out-of-pocket maximum. Plan B has a 220 monthly premium, a 3,500 deductible, 20% coinsurance and a 7,000 out-of-pocket maximum. Annual premiums are 3,600 for Plan A and 2,640 for Plan B.`,
        `In a quiet year with only 400 of covered care, you pay 400 under either plan, so Plan B is 960 cheaper overall. In a bad year with 40,000 of covered in-network bills, Plan A caps your cost-sharing at 4,000 for a total of 7,600, while Plan B caps it at 7,000 for a total of 9,640. Plan A's extra premium of 960 buys a cap that is 3,000 lower, so it wins in a bad year by about 2,040 and loses in a quiet year by 960. The decision is really a bet on how much care you will need — combined with how well you could absorb the bad outcome.`,
      ],
    },
    {
      heading: 'In-network, out-of-network and "allowed amounts"',
      paragraphs: [
        `Insurers negotiate prices with providers in their network. The negotiated price is called the allowed amount, and your deductible and coinsurance are calculated on it, not on the hospital's list price. Going out of network can mean higher allowed amounts, separate (higher) deductibles and out-of-pocket limits, and in some systems balance billing for the difference between the provider's charge and what the plan will pay. Always check that the doctors and hospitals you use are in the network for the specific plan, not just the insurer.`,
      ],
    },
    {
      heading: 'High-deductible plans and tax-advantaged savings',
      paragraphs: [
        `In the United States, plans that meet particular deductible and out-of-pocket thresholds can be paired with a health savings account, which lets you set aside pre-tax money for medical expenses and carry unused funds forward. Other countries have similar tools, or rely on public systems with different cost-sharing. If you are considering a high-deductible plan mainly to lower the premium, check whether you could actually fund the deductible from savings, because the savings only help if the cash is there when a bill arrives.`,
      ],
    },
  ],
  takeaways: [
    `The premium is the price of the plan; the deductible, copay and coinsurance decide the price of care.`,
    `The out-of-pocket maximum is your worst-case cost-sharing for covered in-network care in a year.`,
    `Compare plans using a quiet-year and a bad-year scenario, not just the premium.`,
    `Check that your doctors, hospital and regular prescriptions are covered under the exact plan you are choosing.`,
  ],
  faqs: [
    { q: 'Do premiums count towards my deductible?', a: `No. Premiums are the cost of keeping the plan active and do not count towards the deductible or the out-of-pocket maximum.` },
    { q: 'Is a lower deductible always better?', a: `Not necessarily. A lower deductible usually comes with a higher premium, so it only pays off if you use enough care to recover the difference.` },
    { q: 'What is the difference between a copay and coinsurance?', a: `A copay is a fixed amount per service; coinsurance is a percentage of the allowed charge, usually applied after the deductible.` },
    { q: 'Does the out-of-pocket maximum cover everything?', a: `No. It generally covers only covered, in-network services, and excludes premiums, balance bills and services the plan does not cover.` },
  ],
};
