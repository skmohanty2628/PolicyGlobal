import { Guide } from './types';
import { guide as g1 } from './health-insurance-costs';
import { guide as g2 } from './term-vs-whole-life';
import { guide as g3 } from './rates-to-mortgages';
import { guide as g4 } from './auto-premiums';
import { guide as g5 } from './claims';
import { guide as g6 } from './combined-ratio';
import { guide as g7 } from './reinsurance';
import { guide as g8 } from './life-insurer-metrics';

export type { Guide };
export const GUIDES: Guide[] = [g1, g2, g3, g4, g5, g6, g7, g8];

export const getGuide = (slug: string) => GUIDES.find((g) => g.slug === slug) ?? null;
export const guideWords = (g: Guide) =>
  [g.intro, ...g.sections.flatMap((s) => [...s.paragraphs, ...(s.bullets ?? [])]), ...g.takeaways, ...g.faqs.flatMap((f) => [f.q, f.a])]
    .join(' ').split(/\s+/).length;
