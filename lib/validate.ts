import { NewsArticle } from './news';

const REQUIRED_FIELDS: (keyof NewsArticle)[] = [
  'id', 'date', 'title', 'slug', 'summary', 'description',
  'category', 'country', 'source_name', 'source_url', 'image_url',
  'published_at', 'verified_at', 'verification_status', 'key_points', 'why_it_matters',
];

export function validateArticle(article: Partial<NewsArticle>, index: number): string[] {
  const errors: string[] = [];
  for (const field of REQUIRED_FIELDS) {
    const value = article[field];
    if (value === undefined || value === null || value === '') {
      errors.push(`Article[${index}] (${article.id ?? '?'}): missing required field "${field}"`);
    }
    if (field === 'key_points' && (!Array.isArray(value) || (value as string[]).length === 0)) {
      errors.push(`Article[${index}] (${article.id ?? '?'}): "key_points" must be a non-empty array`);
    }
  }
  return errors;
}

export function validateNewsFile(articles: Partial<NewsArticle>[]): void {
  const allErrors: string[] = [];
  articles.forEach((a, i) => {
    allErrors.push(...validateArticle(a, i));
  });
  if (allErrors.length > 0) {
    throw new Error(`\n❌ JSON Validation Failed:\n${allErrors.join('\n')}`);
  }
}
