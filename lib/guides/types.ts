export interface Guide {
  slug: string;
  title: string;
  description: string;
  category: string;
  readingMinutes: number;
  published: string; // YYYY-MM-DD
  updated: string;
  intro: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  takeaways: string[];
  faqs: { q: string; a: string }[];
  relatedTool?: string; // tool slug
}
