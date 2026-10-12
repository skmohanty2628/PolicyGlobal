import { Guide } from './types';

export const guide: Guide = {
  slug: 'how-to-file-an-insurance-claim',
  title: 'How to File an Insurance Claim and What to Do if It Is Denied',
  description: 'A step-by-step guide to documenting a loss, filing a claim, dealing with adjusters and appealing a denial or low settlement offer.',
  category: 'Insurance',
  readingMinutes: 7,
  published: '2026-10-12',
  updated: '2026-10-12',
  intro: `People pay insurance premiums for years and often meet their insurer for the first time on one of the worst days of their year — after a crash, a fire, a burst pipe or a hospital admission. How you handle the first few days can influence how smoothly the claim goes. This guide sets out a practical sequence for filing a claim, what to expect from the process, and what options you have if the answer is no or the offer is too low.`,
  sections: [
    {
      heading: 'Step 1: Make everyone safe and limit further damage',
      paragraphs: [
        `Your first priority is safety: call emergency services if anyone is hurt or in danger. Once it is safe, take reasonable steps to prevent more damage — shutting off water, covering a broken window, moving belongings to a dry place. Most policies expect you to protect the property from further loss, and reasonable emergency repair costs are often reimbursable. Keep receipts and avoid permanent repairs until the insurer has seen the damage unless it agrees otherwise.`,
      ],
    },
    {
      heading: 'Step 2: Document everything',
      paragraphs: [
        `Take clear photographs and video of damage from several angles before anything is moved. For a car accident, record the location, the other driver's details, witness contacts and the police report number. For property or theft claims, begin a list of damaged or missing items with their approximate age, purchase price and any receipts, serial numbers or photos that prove ownership. Good evidence shortens the process and reduces disputes about value.`,
      ],
    },
    {
      heading: 'Step 3: Notify your insurer promptly',
      paragraphs: [
        `Policies set notification deadlines, sometimes described as "prompt" or "as soon as practicable" and sometimes with a fixed number of days. Report the claim in writing or through the insurer's app and keep a record of the date, time and the name of anyone you speak to. Ask for the claim number. Report even if you are unsure the loss is covered; the insurer decides coverage after reviewing the policy, and late notice can itself become a reason to dispute a claim.`,
      ],
    },
    {
      heading: 'Step 4: Understand how the claim is evaluated',
      paragraphs: [
        `An adjuster will review your policy, the cause of loss and the extent of damage, often by inspecting the property or vehicle. They will check whether the loss falls within the policy's covered perils, whether any exclusions apply, and what the deductible and limits are. Two terms matter in property claims: actual cash value, which deducts depreciation, and replacement cost, which pays the cost to replace with new. Your policy declaration page shows which basis applies.`,
        `You are entitled to ask the adjuster to explain how a figure was calculated. If you disagree with the estimate, get your own quote from a qualified contractor or repair shop and submit it with supporting documents.`,
      ],
    },
    {
      heading: 'Step 5: Read the settlement offer before accepting',
      paragraphs: [
        `Compare the offer against your documentation. Check that all damaged items are included, that labour and materials reflect current local prices and that the deductible has been applied correctly. In liability or injury claims, be especially cautious about signing a release, because it typically ends your right to claim further for that event even if later costs turn out higher.`,
      ],
    },
    {
      heading: 'If your claim is denied or underpaid',
      paragraphs: [`A denial is not always the end. Work through these steps in order.`],
      bullets: [
        `Ask for the denial in writing, with the specific policy provisions the insurer relied on.`,
        `Read those provisions yourself and compare them to the facts. Errors about dates, causes or coverage are common and can often be corrected with extra evidence.`,
        `Use the insurer's internal appeal process and send supporting documents, such as expert reports, repair estimates and photos, within any stated deadline.`,
        `Keep a log of all communication and send important messages in writing.`,
        `If the appeal fails, complain to your insurance regulator or ombudsman. In the US this is the state department of insurance; in the UK, the Financial Ombudsman Service; in India, the insurance ombudsman and IRDAI's grievance channels; other countries have equivalents. Regulators can often review complaints at no cost.`,
        `For large or complex disputes, consider a licensed public adjuster or an attorney who handles insurance cases, and ask about fees up front.`,
      ],
    },
    {
      heading: 'Common reasons claims are rejected',
      paragraphs: [
        `Typical grounds include a loss that falls under an exclusion (for example flood damage under a standard homeowners policy), a lapse in premium payment, late notification, incomplete or inaccurate information on the application, a lack of maintenance that contributed to the loss, or an amount above the policy limit. Understanding these in advance is a good reason to read your policy's exclusions section when you buy, not after a loss.`,
      ],
    },
    {
      heading: 'Prevention beats appeals',
      paragraphs: [
        `Once a year, review your cover: confirm that the sums insured match current rebuilding or replacement costs, that your contact details are right and that any new valuable items are scheduled. Keep an inventory with photos stored in the cloud. These ten minutes can make a future claim far easier.`,
      ],
    },
  ],
  takeaways: [
    `Protect against further damage, document everything and notify the insurer promptly.`,
    `Understand actual cash value versus replacement cost before agreeing to a settlement.`,
    `If a claim is denied, ask for the reasons in writing and use the appeal and regulator routes.`,
    `Review your cover once a year so a future claim is straightforward.`,
  ],
  faqs: [
    { q: 'How long does an insurer have to respond?', a: `Time limits vary by country, state and policy type. Your insurer should be able to tell you the applicable deadlines, and your regulator publishes them.` },
    { q: 'Will filing a claim raise my premium?', a: `It can, depending on the type of claim, your insurer and local rules, but unreported losses can create bigger problems later.` },
    { q: 'Can I use my own contractor?', a: `Generally yes, though the insurer may need to inspect the damage first and may only pay what it considers reasonable.` },
  ],
};
