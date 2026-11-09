import { Guide } from './types';

export const guide: Guide = {
  slug: 'how-to-read-life-insurer-results-vnb-embedded-value-solvency',
  title: 'How to Read a Life Insurer\'s Results: VNB, Embedded Value, Solvency and Persistency Explained',
  description: 'Life insurers report value of new business, embedded value, annualised premium equivalent, solvency and persistency. This guide explains each in plain English.',
  category: 'Life Insurance',
  readingMinutes: 8,
  published: '2026-11-09',
  updated: '2026-11-09',
  intro: `Life insurer results can look like alphabet soup: APE, VNB, IEV, solvency, persistency, core earnings. Profit under accounting rules tells only part of the story for a business that sells policies lasting decades. This guide explains the main measures that appear in results from companies in India, Singapore, the United Kingdom, the United States and elsewhere, and how to read them together.`,
  sections: [
    {
      heading: 'Why life insurers report more than profit',
      paragraphs: [
        `A life insurer collects premiums over many years and promises benefits that may be paid decades later. Accounting profit in a single quarter can swing with investment markets, interest rates and accounting assumptions, and it does not fully capture the value of policies just sold. That is why companies also report measures of new business, embedded value and capital strength.`,
      ],
    },
    {
      heading: 'Premium: gross written premium, new business and renewal',
      paragraphs: [
        `Gross written premium is the total premium booked in a period. It is usually split into new business premium, from policies sold in the period, and renewal premium, from policies already in force. Growth in renewal premium reflects the existing book staying in place, while new business growth reflects sales.`,
      ],
    },
    {
      heading: 'Annualised premium equivalent (APE)',
      paragraphs: [
        `Insurers sell both regular-premium policies, where the customer pays each year, and single-premium policies, where the customer pays once. To compare them, many insurers report annualised premium equivalent. It counts regular premiums at their annual amount and single premiums at a fraction, often one-tenth, of the amount paid. APE is a measure of sales volume that puts different product types on a common footing.`,
      ],
    },
    {
      heading: 'Value of new business (VNB) and the VNB margin',
      paragraphs: [
        `Value of new business is an actuarial estimate of the value that policies sold in the period are expected to create for shareholders, after allowing for the cost of capital and expected claims and expenses. The VNB margin divides VNB by APE, and shows how much value is created for each unit of sales. A rising margin can reflect a better product mix, but because VNB depends on assumptions about interest rates, lapses and costs, readers should note any change in the assumptions the company discloses.`,
      ],
    },
    {
      heading: 'Embedded value',
      paragraphs: [
        `Embedded value, sometimes called Indian embedded value or EV in some markets, estimates the value of the existing business plus the shareholders' net assets, excluding the value of future new sales. Changes in embedded value over time, often reported as operating return on embedded value, show how much value the business is creating after allowing for dividends and capital movements.`,
      ],
    },
    {
      heading: 'Solvency ratio',
      paragraphs: [
        `The solvency ratio compares the capital an insurer has with the capital its regulator requires. A ratio of 1.5 means the company holds 150% of the required amount. Different regimes calculate it differently, so a ratio in one country is not directly comparable with a ratio in another, but a ratio well above the regulatory minimum signals a capital cushion.`,
      ],
    },
    {
      heading: 'Persistency',
      paragraphs: [
        `Persistency measures the share of policies still in force after a given period, such as 13 months or 61 months. High persistency means customers keep paying, which supports future profits. Low persistency means policies lapse early, which can hurt margins because acquisition costs are not recovered.`,
      ],
    },
    {
      heading: 'Putting it together',
      paragraphs: [
        `A useful way to read a life insurer's quarter is to ask five questions. Is premium growth coming from new sales or renewals? Is APE growing and is the VNB margin stable? Is embedded value rising? Is the solvency ratio comfortably above the minimum? And is persistency holding? Then check whether reported profit moved because of investment gains or accounting items rather than the underlying business.`,
      ],
    },
  ],
  takeaways: [
    'Life insurers use APE, VNB and embedded value because quarterly profit alone understates long-term value.',
    'VNB margin is VNB divided by APE and depends on assumptions.',
    'Solvency ratios are regulator-specific, so compare them with the local minimum.',
    'Persistency shows whether customers keep their policies.',
    'Read premium growth, margins, capital and persistency together.',
  ],
  faqs: [
    { q: 'Is a higher VNB always better?', a: `Higher VNB means more estimated value from new sales, but it depends on assumptions, so look at the margin and at any assumption changes the company discloses.` },
    { q: 'Why do life insurers report APE?', a: `It lets regular-premium and single-premium sales be compared on the same basis.` },
    { q: 'What is a good solvency ratio?', a: `It depends on the regulator, but a ratio comfortably above the required minimum, for example above 1.5 where that is the requirement, indicates a buffer.` },
  ],
};
