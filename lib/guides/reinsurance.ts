import { Guide } from './types';

export const guide: Guide = {
  slug: 'how-reinsurance-works',
  title: 'How Reinsurance Works: Why Insurers Buy Insurance and Why It Affects Your Premium',
  description: 'A plain-English explanation of reinsurance, including treaty and facultative cover, proportional and excess-of-loss structures, catastrophe bonds and how reinsurance prices reach homeowners.',
  category: 'Insurance',
  readingMinutes: 8,
  published: '2026-11-09',
  updated: '2026-11-09',
  intro: `Insurers sell protection to households and businesses, but they also buy protection for themselves. That protection is called reinsurance. It is one of the least visible parts of the insurance system, yet it helps decide how much cover is available, how stable insurers are after a disaster and, eventually, what customers pay. This guide explains the basics in plain English.`,
  sections: [
    {
      heading: 'What reinsurance is',
      paragraphs: [
        `Reinsurance is insurance for insurers. An insurer that has written many policies pays a reinsurer a premium, and in return the reinsurer agrees to cover part of the insurer's losses under defined conditions. The original insurer is called the cedent or ceding company because it cedes, or hands over, part of its risk.`,
        `Policyholders usually do not deal with reinsurers directly. If you claim on your home policy, your own insurer pays you; any recovery from its reinsurers happens behind the scenes.`,
      ],
    },
    {
      heading: 'Why insurers buy it',
      paragraphs: [
        `There are four main reasons. First, to limit the impact of a single large loss. Second, to protect against an accumulation of many losses from one event, such as a hurricane hitting thousands of homes. Third, to add underwriting capacity, because buying reinsurance lets an insurer write more business than its capital alone would support. Fourth, to smooth results from year to year so that earnings and capital are more stable.`,
        `Regulators also look at reinsurance when they assess an insurer's capital strength, so the structure of the programme matters to solvency.`,
      ],
    },
    {
      heading: 'Treaty and facultative reinsurance',
      paragraphs: [
        `Treaty reinsurance covers a whole portfolio under an agreed contract, for example all of an insurer's home policies in a region. Facultative reinsurance covers a single risk, such as one large building, and is negotiated case by case.`,
      ],
    },
    {
      heading: 'Proportional and non-proportional structures',
      paragraphs: [
        `In proportional reinsurance, the insurer and reinsurer share premiums and losses in an agreed percentage. In a quota share, for instance, the reinsurer might take 30% of both. In non-proportional reinsurance, the reinsurer pays only when losses go above a threshold. The best-known form is excess of loss. An insurer might buy cover that pays for losses between 100 million and 300 million from one event, with the insurer keeping the first 100 million itself.`,
      ],
      bullets: [
        'Quota share: a fixed percentage of every policy is shared.',
        'Excess of loss per risk: protects against one very large claim.',
        'Catastrophe excess of loss: protects against a single event that causes many claims.',
        'Stop loss or aggregate cover: protects against a bad year in total.',
      ],
    },
    {
      heading: 'Catastrophe bonds and other capital',
      paragraphs: [
        `Traditional reinsurers are not the only source of capital. Catastrophe bonds, often called cat bonds, are securities that investors buy. If a defined disaster occurs, investors can lose some or all of their principal, and the money goes to the insurer. Other forms of alternative capital, such as sidecars and collateralized reinsurance, let institutional investors take insurance risk directly. These sources have grown over time and affect how reinsurance is priced.`,
      ],
    },
    {
      heading: 'How reinsurance prices reach you',
      paragraphs: [
        `Reinsurance is bought on a cycle, with many programmes renewing on January 1, with others at April, June and July. When catastrophe losses are high or capital is scarce, reinsurers raise prices and tighten terms. When capital is plentiful and losses are lower, prices can fall. Insurers factor the cost of their reinsurance into the premiums they charge, so a sharp change in reinsurance pricing can eventually show up in the rates offered to homeowners and businesses, especially in regions exposed to storms, floods and wildfire. The effect is not immediate or one-for-one, because insurers also consider their own claims experience, competition and regulation.`,
      ],
    },
    {
      heading: 'What to watch in the news',
      paragraphs: [
        `When you read about a reinsurance renewal, look at whether rates are rising or falling, whether terms such as attachment points and exclusions are changing, and how much catastrophe cover insurers are buying. Reports from reinsurers and brokers on renewals, and insurer comments about retention and reinsurance costs, are good indicators of the direction of the market.`,
      ],
    },
  ],
  takeaways: [
    'Reinsurance is insurance bought by insurers to manage large and accumulated losses.',
    'Treaty covers portfolios; facultative covers single risks.',
    'Proportional deals share premiums and losses; excess of loss pays above a threshold.',
    'Cat bonds and other alternative capital also supply reinsurance capacity.',
    'Reinsurance prices can feed through to consumer premiums over time, but not one-for-one.',
  ],
  faqs: [
    { q: 'Do I have a contract with the reinsurer?', a: `No. Your contract is with your own insurer, which remains responsible to you even if it recovers part of the loss from reinsurers.` },
    { q: 'Why do reinsurance renewals cluster on January 1?', a: `Many insurers and reinsurers run their financial years and capital planning on a calendar basis, so a large share of treaties are set to renew at the start of the year.` },
    { q: 'What happens if a reinsurer cannot pay?', a: `The original insurer still owes its policyholders, which is why insurers and regulators look closely at reinsurer credit quality and collateral.` },
  ],
};
