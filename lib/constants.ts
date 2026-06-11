export const CATEGORIES = [
  { label: 'Insurance', slug: 'insurance' },
  { label: 'Personal Finance', slug: 'personal-finance' },
  { label: 'Banking', slug: 'banking' },
  { label: 'Markets', slug: 'markets' },
  { label: 'FinTech', slug: 'fintech' },
  { label: 'Regulation', slug: 'regulation' },
  { label: 'Economy', slug: 'economy' },
  { label: 'Healthcare Insurance', slug: 'healthcare-insurance' },
  { label: 'Auto Insurance', slug: 'auto-insurance' },
  { label: 'Life Insurance', slug: 'life-insurance' },
  { label: 'Loans & Mortgage', slug: 'loans-and-mortgage' }, // ✅ Fixed & → and
];

export const COUNTRIES = [
  { label: 'United States', slug: 'united-states' },
  { label: 'India', slug: 'india' },
  { label: 'United Kingdom', slug: 'united-kingdom' },
  { label: 'Canada', slug: 'canada' },
  { label: 'Australia', slug: 'australia' },
  { label: 'UAE', slug: 'uae' },
  { label: 'Singapore', slug: 'singapore' },
  { label: 'Germany', slug: 'germany' },
  { label: 'France', slug: 'france' },
  { label: 'Japan', slug: 'japan' },
  { label: 'South Korea', slug: 'south-korea' },
];

export function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  } catch {
    return dateStr;
  }
}

export function slugToLabel(slug: string): string {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}