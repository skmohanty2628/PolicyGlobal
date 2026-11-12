import { Guide } from './types';

export const guide: Guide = {
  slug: "how-much-home-insurance-do-you-need-replacement-cost",
  title: "How Much Home Insurance Do You Need? Replacement Cost vs Market Value",
  description: "How to set the right amount of home insurance: why rebuild cost differs from market value, replacement cost versus actual cash value, underinsurance and common gaps.",
  category: "Insurance",
  readingMinutes: 8,
  published: '2026-11-12',
  updated: '2026-11-12',
  relatedTool: "deductible-break-even-calculator",
  intro: "Many homeowners insure their house for what they paid for it, or for what it would sell for today. Neither figure is what an insurer needs. Home insurance pays to repair or rebuild the building, so the right amount is the cost of rebuilding it, which can be well above or below the market price. This guide explains how to set the main coverage amounts, the difference between replacement cost and actual cash value, and the gaps that surprise people at claim time.",
  sections: [
    {
      heading: "Market value and rebuild cost are different things",
      paragraphs: [
        "Market value is what a buyer would pay for the property. It includes the land and reflects location, schools and demand. Rebuild cost is what a builder would charge to construct the same house again on the same plot, including materials, labour, demolition and debris removal, and professional fees.",
        "Land is not destroyed by a fire, so it does not need to be insured. In an expensive city, a home's market value may be far higher than its rebuild cost because most of the value is in the land. In a rural area with low land prices, rebuilding can cost more than the house would sell for. Insuring to market value can therefore leave you over-insured in one place and badly under-insured in another.",
      ],
    },
    {
      heading: "The main parts of a home policy",
      paragraphs: [
        "Names vary by country, but most policies are built from the same blocks. Each has its own limit, and each needs a sensible amount.",
      ],
      bullets: [
        "Dwelling or buildings cover: the structure of the home itself",
        "Other structures: garages, sheds and fences",
        "Contents or personal property: furniture, clothes, electronics",
        "Loss of use or alternative accommodation: living costs while the home is repaired",
        "Liability: injury or damage you are legally responsible for",
      ],
    },
    {
      heading: "Replacement cost versus actual cash value",
      paragraphs: [
        "Replacement cost cover pays what it costs to repair or replace damaged property with new materials or items of similar kind and quality, without a deduction for age. Actual cash value cover pays the replacement cost minus depreciation, which is the loss in value from age and wear.",
        "The difference can be large. Suppose a roof would cost 20,000 to replace and is 15 years into an expected 25-year life. On an actual cash value basis, the insurer may treat 60% of its life as used and pay 8,000 before the deductible. On a replacement cost basis, the claim would be for 20,000 before the deductible. Policies with replacement cost cover cost more, and some pay the depreciated amount first and the rest once the repair is done. Check which basis applies to the building and which to the contents, because they can differ.",
      ],
    },
    {
      heading: "How underinsurance reduces even small claims",
      paragraphs: [
        "If the insured amount is below the true rebuild cost, the problem is not limited to a total loss. Many policies contain a coinsurance or average clause. In the United States, a common version requires the dwelling limit to be at least 80% of replacement cost for partial losses to be paid in full. In the United Kingdom and some other markets, insurers may apply 'average' and reduce any claim in proportion to the underinsurance.",
        "A simple illustration of proportional reduction: a home that would cost 400,000 to rebuild is insured for 200,000, which is half. A kitchen fire causes 40,000 of damage. Under a strict average clause the insurer could pay half, or 20,000, less the deductible. Exact formulas differ between policies, but the lesson is the same: setting the limit too low to save premium can cut every claim.",
      ],
    },
    {
      heading: "How to estimate rebuild cost",
      paragraphs: [
        "The best figure comes from a professional rebuild valuation by a surveyor or appraiser. Insurers and industry bodies also provide rebuild cost calculators based on floor area, construction type and location. A rough check is to multiply the floor area by a local construction cost per square metre or square foot, obtained from local builders, and add an allowance for demolition and fees.",
        "Review the figure every year and after any extension or major renovation. Construction costs can rise faster than general inflation, especially after a large disaster, when many owners need builders at once. Some policies add inflation protection or an extended replacement cost margin above the limit, and these features are worth asking about.",
      ],
    },
    {
      heading: "Contents and high-value items",
      paragraphs: [
        "For contents, a room-by-room inventory with photos gives a more reliable total than a guess, and it speeds up any claim. Most policies set lower sub-limits for categories such as jewellery, watches, art, cash and bicycles. Valuable items often need to be listed separately, sometimes with a valuation, to be covered in full.",
      ],
    },
    {
      heading: "Gaps that standard policies often leave",
      paragraphs: [
        "Standard home policies commonly exclude some of the most expensive events. Flood and earthquake are excluded in many markets, including standard US homeowners policies, and need separate cover. Gradual damage, wear and tear, and poor maintenance are not insured anywhere. Sewer or drain backup and building-code upgrade costs often require an added option. Read the exclusions list with your own location in mind: the risks that matter to you depend on where the house stands.",
      ],
    },
    {
      heading: "A short annual checklist",
      paragraphs: [
        "Ten minutes once a year keeps the cover in line with the house.",
      ],
      bullets: [
        "Is the dwelling limit based on a current rebuild estimate, not the market price?",
        "Is the building on a replacement cost basis? Are the contents?",
        "Have renovations or large purchases been reported to the insurer?",
        "Are flood, earthquake or backup risks relevant, and are they covered?",
        "Could you pay the deductible, including any separate storm deductible?",
      ],
    },
  ],
  takeaways: [
    "Insure the building for its rebuild cost, not its market value or purchase price.",
    "Replacement cost cover pays for new; actual cash value deducts depreciation.",
    "Underinsurance can reduce partial claims as well as total losses.",
    "Update the rebuild estimate every year and after renovations.",
    "Flood and earthquake often need separate cover, so check the exclusions.",
  ],
  faqs: [
    { q: "Should the insured amount include the land?", a: "No. Land is not damaged by insured events such as fire, so only the cost of rebuilding the structure is insured." },
    { q: "My mortgage is smaller than the rebuild cost. Can I insure only the loan amount?", a: "You can meet the lender's minimum that way, but you would be underinsured. The lender's requirement protects the lender, not your own stake in the home." },
    { q: "How often should I update the cover?", a: "At every renewal, and straight after an extension, renovation or major purchase." },
  ],
};
