// Search-result friendly versions of long editorial headlines/summaries.
// The full headline stays on the page (H1); only <title>/meta tags are shortened.
export function seoTitle(title: string, max = 60): string {
  const t = title.replace(/\s+/g, ' ').trim();
  if (t.length <= max) return t;
  // Prefer a natural break (comma / colon / dash) inside the limit.
  const head = t.slice(0, max + 1);
  const breaks = [head.lastIndexOf(', '), head.lastIndexOf(': '), head.lastIndexOf(' — '), head.lastIndexOf(' - ')];
  const best = Math.max(...breaks);
  if (best >= 35) return head.slice(0, best).trim();
  const cut = head.slice(0, head.lastIndexOf(' ')).trim();
  return cut.replace(/[,:;\-–—]$/, '').trim() + '…';
}

export function seoDescription(text: string, max = 155): string {
  const t = text.replace(/\s+/g, ' ').trim();
  if (t.length <= max) return t;
  const head = t.slice(0, max);
  const cut = head.slice(0, head.lastIndexOf(' ')).trim();
  return cut.replace(/[,:;\-–—]$/, '').trim() + '…';
}

// A short single line with no closing punctuation is treated as a sub-heading.
export function isSubheading(p: string): boolean {
  const t = p.trim();
  return t.length > 3 && t.length <= 90 && !/[.!?:;,]$/.test(t) && !t.includes('\n');
}
