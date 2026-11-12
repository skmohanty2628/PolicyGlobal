import upgraded from './upgraded-ids.json';

const UPGRADED = new Set<string>(upgraded as string[]);
// News older than this cutoff that was never upgraded into a deep, verified version stays readable
// but is kept out of search results and the sitemap, so Google judges the stronger pages first.
const CUTOFF = '2026-09-28';

export function isIndexable(a: { id: string; date: string }): boolean {
  return a.date >= CUTOFF || UPGRADED.has(a.id);
}
