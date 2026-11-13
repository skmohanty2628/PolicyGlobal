import { GUIDES } from './guides';
import { TOOLS } from './tools';

// Which guides and tools help a reader of each news category.
const MAP: Record<string, { guides: string[]; tools: string[] }> = {
  'Insurance': { guides: ['what-is-a-combined-ratio-insurance', 'how-much-home-insurance-do-you-need-replacement-cost'], tools: ['deductible-break-even-calculator'] },
  'Auto Insurance': { guides: ['what-is-a-combined-ratio-insurance'], tools: ['deductible-break-even-calculator'] },
  'Healthcare Insurance': { guides: ['how-to-compare-health-insurance-plans-by-total-cost'], tools: ['health-plan-cost-comparison-calculator'] },
  'Life Insurance': { guides: [], tools: ['life-insurance-needs-calculator'] },
  'Loans & Mortgage': { guides: ['apr-vs-interest-rate-difference', 'how-much-house-can-you-afford-debt-to-income', 'fixed-vs-adjustable-rate-mortgage'], tools: ['mortgage-affordability-calculator', 'loan-emi-calculator'] },
  'Banking': { guides: ['apr-vs-interest-rate-difference', 'fixed-vs-adjustable-rate-mortgage', 'how-compound-interest-works'], tools: ['loan-emi-calculator'] },
  'Economy': { guides: ['how-compound-interest-works', 'fixed-vs-adjustable-rate-mortgage'], tools: ['compound-interest-calculator'] },
  'Personal Finance': { guides: ['how-compound-interest-works'], tools: ['compound-interest-calculator'] },
  'Markets': { guides: ['how-compound-interest-works'], tools: ['compound-interest-calculator'] },
};

export function relatedLearning(category: string) {
  const m = MAP[category] ?? { guides: ['how-compound-interest-works'], tools: ['compound-interest-calculator'] };
  const byCat = GUIDES.filter((g) => g.category === category).map((g) => g.slug);
  const guideSlugs = Array.from(new Set([...m.guides, ...byCat])).slice(0, 3);
  return {
    guides: guideSlugs.map((s) => GUIDES.find((g) => g.slug === s)).filter(Boolean) as typeof GUIDES,
    tools: m.tools.map((s) => TOOLS.find((t) => t.slug === s)).filter(Boolean) as typeof TOOLS,
  };
}
