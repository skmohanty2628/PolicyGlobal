import { Guide } from './types';

export const guide: Guide = {
  slug: "apr-vs-interest-rate-difference",
  title: "APR vs Interest Rate: What Each Number Tells You About a Loan",
  description: "The difference between a loan's interest rate and its APR, with a worked example where the lower rate is the more expensive loan, and how APY differs for savings.",
  category: "Loans & Mortgage",
  readingMinutes: 8,
  published: '2026-11-13',
  updated: '2026-11-13',
  relatedTool: "loan-emi-calculator",
  intro: "Two loans are on offer. One has an interest rate of 8% and the other 7.5%. Most people would take the second without a further look, and in the example in this guide they would pay more. The reason is fees, and the number designed to expose them is the annual percentage rate, or APR. This guide explains what the interest rate and the APR each measure, works through a comparison with real arithmetic, and shows where the APR itself can mislead.",
  sections: [
    {
      heading: "What the interest rate measures",
      paragraphs: [
        "The interest rate is the price of borrowing the money, expressed as a yearly percentage of the amount you still owe. It decides your regular payment. On a loan of 20,000 repaid over five years at 8%, the monthly payment of principal and interest is about 405.53, and the interest over the whole term adds up to about 4,332.",
        "The interest rate says nothing about what else the lender charges. Arrangement or origination fees, processing fees and some compulsory add-ons are outside it.",
      ],
    },
    {
      heading: "What the APR measures",
      paragraphs: [
        "The APR expresses the yearly cost of the loan including the interest and the mandatory fees, as a single percentage. It answers the question: if all the required charges were turned into interest, what rate would I be paying on the money I actually received?",
        "If a loan has no fees, the APR and the interest rate are the same. The more a lender charges up front, the further the APR rises above the rate. Many countries require lenders to show an APR or a similar all-in rate in advertisements and loan documents so that borrowers can compare offers on one figure. Which fees must be included differs by country and by type of loan.",
      ],
      bullets: [
        "Interest rate: sets the payment",
        "APR: interest plus mandatory fees, as a yearly rate",
        "No fees: the two are equal",
        "Large fees: the APR is noticeably higher",
      ],
    },
    {
      heading: "A worked example: the lower rate that costs more",
      paragraphs: [
        "Loan A is 20,000 over five years at 8%, with a fee of 600 taken out of the money you receive. The payment is about 405.53 a month. You pay about 4,332 in interest plus the 600 fee, so the total cost is about 4,932. Because you only received 19,400 but repay as if you had borrowed 20,000, the APR works out at about 9.3%.",
        "Loan B is 20,000 over five years at 7.5%, with a fee of 1,000. The payment is lower, about 400.76 a month. Interest over the term is about 4,046, and with the fee the total cost is about 5,046. You received only 19,000, and the APR is about 9.7%.",
        "Loan B has the lower interest rate and the lower monthly payment, yet it costs about 114 more over five years and has the higher APR. The APR points to the cheaper loan when the interest rate does not.",
      ],
    },
    {
      heading: "Where the APR can mislead",
      paragraphs: [
        "The APR assumes you keep the loan for its full term. An upfront fee is paid in full on day one, so if you repay early it is spread over fewer years and the true yearly cost is higher than the APR suggested. In the example, if both loans were repaid in full after two years, Loan A would have cost about 3,274 and Loan B about 3,502. The gap widens from 114 to about 228, because Loan B's larger fee had less time to be offset by its lower rate.",
        "The reverse also holds. A loan with a higher rate and no fee can be the better choice for someone who expects to repay or refinance early, even if its APR is not the lowest for the full term.",
      ],
    },
    {
      heading: "Other limits of the APR",
      paragraphs: [
        "The APR does not include every possible cost. Late payment charges, optional insurance and early repayment charges are normally outside it. On a variable or adjustable-rate loan, the APR is calculated from the rate at the start, so it cannot show what the loan will cost if rates change.",
        "In some markets the advertised figure is a representative APR, which the lender must give to a set share of successful applicants and not to all of them. The rate you are offered after a credit check can be higher. Always compare the APR on the personal quote, not the one on the poster.",
      ],
    },
    {
      heading: "APR on credit cards",
      paragraphs: [
        "On a credit card, the APR is usually the interest rate itself, and annual fees are generally shown separately. Interest is commonly worked out daily or monthly and added to the balance, so the effective yearly cost of carrying a balance is higher than the quoted APR. A rate of 24% a year charged monthly is 2% a month, which compounds to about 26.8% over a year if nothing is repaid. If you clear the full statement balance every month, most cards charge no interest on purchases at all.",
      ],
    },
    {
      heading: "APY: the same idea for savings",
      paragraphs: [
        "For savings and deposits, the figure to compare is the annual percentage yield, called APY in the United States and AER in the United Kingdom. It shows what you earn in a year after compounding. A savings rate of 5% a year paid monthly gives an APY of about 5.12%. A simple way to keep the terms straight: when you borrow, look for the lowest APR, and when you save, look for the highest APY.",
      ],
    },
    {
      heading: "How to compare loan offers",
      paragraphs: [
        "A short routine avoids most mistakes.",
      ],
      bullets: [
        "Compare loans of the same amount and the same term",
        "Use the APR on your personal quote to rank them",
        "Check the total amount repayable, which should agree with the APR ranking",
        "Ask how long you expect to keep the loan, and recheck if you may repay early",
        "Read the list of fees that are not in the APR, including early repayment charges",
      ],
    },
  ],
  takeaways: [
    "The interest rate sets your payment; the APR adds mandatory fees to show the yearly cost.",
    "A lower interest rate with a higher fee can cost more, and the APR reveals it.",
    "The APR assumes the full term, so upfront fees hurt more if you repay early.",
    "APR rules and included fees differ by country and loan type.",
    "For savings, compare APY or AER, which include compounding.",
  ],
  faqs: [
    { q: "Is a lower APR always the better loan?", a: "For the same amount and term, held to the end, yes on cost. If you may repay early, or the loans have different terms or variable rates, check the total cost for your own plans." },
    { q: "Why is my APR higher than my interest rate?", a: "Because the loan has mandatory fees. The APR spreads them over the term and adds them to the interest." },
    { q: "Does the APR change during the loan?", a: "On a fixed-rate loan it does not. On a variable-rate loan the rate, and so the real yearly cost, can change after you sign." },
  ],
};
