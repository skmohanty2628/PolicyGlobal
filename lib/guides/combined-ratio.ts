import { Guide } from './types';

export const guide: Guide = {
  slug: 'what-is-a-combined-ratio-insurance',
  title: 'What Is a Combined Ratio? How to Read an Insurer\'s Earnings in Plain English',
  description: 'The combined ratio is the most-quoted number in property and casualty insurance. Learn how it is calculated, what a good ratio looks like, and what it leaves out.',
  category: 'Insurance',
  readingMinutes: 8,
  published: '2026-11-09',
  updated: '2026-11-09',
  intro: `Open almost any earnings report from a property and casualty insurer and you will find a "combined ratio" near the top. Headlines say it "improved to 83.6%" or "rose above 100%", and analysts treat it as a quick test of whether the insurance side of the business is making money. This guide explains what the number measures, how to calculate it, how to read it alongside other figures, and where it can mislead.`,
  sections: [
    {
      heading: 'The short definition',
      paragraphs: [
        `The combined ratio compares what an insurer pays out and spends with the premiums it earns. It is usually written as a percentage. Below 100% means the insurer's claims and costs were smaller than its earned premiums, so the underwriting was profitable before investment income is counted. Above 100% means it paid out and spent more than it earned in premiums, an underwriting loss.`,
        `Because it is a ratio, it allows companies of different sizes to be compared. A small specialist insurer and a global group can both report a combined ratio, even though their premium volumes are very different.`,
      ],
    },
    {
      heading: 'How it is calculated',
      paragraphs: [
        `The combined ratio is the sum of two ratios. The loss ratio is claims and claim-handling costs divided by earned premiums. The expense ratio is the cost of acquiring and running the business, such as commissions, salaries and technology, divided by premiums, with the exact base varying between insurers and countries.`,
        `For example, if an insurer earns 1,000 in premiums, pays 600 in claims and incurs 300 in expenses, its loss ratio is 60%, its expense ratio is 30% and its combined ratio is 90%. The remaining 10 is an underwriting profit. If claims were 750 instead, the combined ratio would be 105% and the insurer would have an underwriting loss of 50.`,
      ],
      bullets: [
        'Loss ratio = claims and loss adjustment costs ÷ earned premiums',
        'Expense ratio = underwriting and operating expenses ÷ premiums',
        'Combined ratio = loss ratio + expense ratio',
        'Underwriting margin ≈ 100% − combined ratio',
      ],
    },
    {
      heading: 'What counts as a good combined ratio?',
      paragraphs: [
        `There is no single answer, because the right level depends on the line of business, the interest-rate environment and how much investment income the insurer expects to earn. A ratio comfortably below 100% is generally seen as healthy. Many insurers aim for the low-to-mid 90s over the long run, and some specialty or catastrophe-exposed businesses report much lower ratios in a quiet year and much higher ones in a bad year.`,
        `A ratio slightly above 100% is not automatically a failure. Insurers collect premiums before they pay claims and invest the money in the meantime, so an insurer can run a combined ratio a little above 100% and still earn an overall profit when investment returns are strong. The reverse also holds: a low ratio does not guarantee a good year if investment losses or other charges are large.`,
      ],
    },
    {
      heading: 'Catastrophes, reserves and one-offs',
      paragraphs: [
        `Two items regularly move the combined ratio without changing the long-term economics. The first is catastrophe losses from storms, floods, wildfires and earthquakes. A quarter with few major events flatters the ratio, and a quarter with a hurricane can push it up sharply. Insurers therefore often show the ratio both including and excluding catastrophes.`,
        `The second is prior-year reserve development. Insurers set aside reserves for claims that have been incurred but not yet fully paid. When earlier estimates prove too high, releasing the difference improves the current ratio; when they prove too low, strengthening reserves worsens it. Reading the "underlying" or "accident-year" ratio, where disclosed, helps separate this effect from the current quarter's performance.`,
      ],
    },
    {
      heading: 'Variations you will see',
      paragraphs: [
        `Companies use slightly different versions. Some report a combined operating ratio that excludes certain items. Under the newer international accounting standard for insurance contracts, IFRS 17, some insurers report a "combined insurance service ratio" or similar measure, which is built from the insurance service result rather than the traditional loss and expense split. The idea is similar, but the numbers are not always directly comparable with a US-style combined ratio.`,
        `Reinsurers, health insurers and life insurers use different headline measures. Health insurers often quote a medical care ratio, and life insurers focus on measures such as value of new business and solvency. The combined ratio is mainly a property and casualty metric.`,
      ],
    },
    {
      heading: 'How to read it next to other numbers',
      paragraphs: [
        `Look at the combined ratio alongside premium growth, because a falling ratio with shrinking premiums tells a different story from a falling ratio with growth. Compare it with the prior year and with catastrophe losses. Check the investment result, because net income combines underwriting and investment returns, and see whether the insurer has also given a return on equity or an operating earnings figure.`,
        `It is also worth checking whether a company's definition has changed. If it restates how a ratio is calculated, year-on-year comparisons may not be like for like.`,
      ],
    },
    {
      heading: 'Limits of the measure',
      paragraphs: [
        `The combined ratio says nothing about the size of the business, the quality of the investment portfolio or the strength of capital. It can be affected by timing, because premiums are earned over the life of a policy while claims can be reported later. And it is a backward-looking figure: a very good ratio in a soft period may not last if prices fall or claim costs rise.`,
      ],
    },
  ],
  takeaways: [
    'Below 100% means an underwriting profit; above 100% means an underwriting loss.',
    'The combined ratio is the loss ratio plus the expense ratio.',
    'Catastrophe losses and reserve changes can move it a lot from quarter to quarter.',
    'Compare it with premium growth, investment income and capital, not on its own.',
    'Definitions differ between companies and accounting standards, so check the footnotes.',
  ],
  faqs: [
    { q: 'Is a lower combined ratio always better?', a: `Generally yes for underwriting, but a very low ratio in one quarter may reflect an unusually quiet catastrophe period or reserve releases rather than a lasting improvement.` },
    { q: 'Can an insurer be profitable with a combined ratio above 100%?', a: `Yes, if investment income on premiums held before claims are paid is large enough to offset the underwriting loss.` },
    { q: 'What is the difference between the loss ratio and the combined ratio?', a: `The loss ratio only counts claims; the combined ratio adds the insurer's operating expenses to give a fuller picture.` },
  ],
};
