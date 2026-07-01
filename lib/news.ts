import fs from 'fs';
import path from 'path';
export { CATEGORIES, COUNTRIES, formatDate, slugToLabel } from './constants';

export interface NewsArticle {
  id: string;
  date: string;
  title: string;
  slug: string;
  summary: string;
  description: string;
  category: string;
  country: string;
  source_name: string;
  source_url: string;
  image_url: string;
  image_alt: string;
  video_url: string;
  published_at: string;
  verified_at: string;
  verification_status: string;
  key_points: string[];
  why_it_matters: string;
  tags: string[];
  reading_time: string;
}

const NEWS_DIR = path.join(process.cwd(), 'content/news');

function readJsonFile(filePath: string): NewsArticle[] {
  try {
    const raw = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(raw) as NewsArticle[];
  } catch {
    return [];
  }
}

export function getAllNews(): NewsArticle[] {
  if (!fs.existsSync(NEWS_DIR)) return [];
  const files = fs
    .readdirSync(NEWS_DIR)
    .filter((f) => f.endsWith('.json'))
    .sort()
    .reverse();
  return files.flatMap((f) => readJsonFile(path.join(NEWS_DIR, f)));
}

export function getLatestNews(limit = 15): NewsArticle[] {
  return getAllNews().slice(0, limit);
}

export function getNewsByDate(date: string): NewsArticle[] {
  const filePath = path.join(NEWS_DIR, `${date}.json`);
  return readJsonFile(filePath);
}

export function getNewsBySlug(date: string, slug: string): NewsArticle | null {
  const articles = getNewsByDate(date);
  return articles.find((a) => a.slug === slug) ?? null;
}

// ✅ Bug 2 Fixed: properly normalizes & → and before slug comparison
export function getNewsByCategory(category: string): NewsArticle[] {
  const normalize = (s: string) =>
    s.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-');
  return getAllNews().filter(
    (a) => normalize(a.category) === normalize(category)
  );
}

export function getNewsByCountry(country: string): NewsArticle[] {
  return getAllNews().filter(
    (a) => a.country.toLowerCase().replace(/\s+/g, '-') ===
      country.toLowerCase().replace(/\s+/g, '-')
  );
}

export function getAllDates(): string[] {
  if (!fs.existsSync(NEWS_DIR)) return [];
  return fs
    .readdirSync(NEWS_DIR)
    .filter((f) => f.endsWith('.json'))
    .map((f) => f.replace('.json', ''))
    .sort()
    .reverse();
}

export function getRelatedNews(article: NewsArticle, limit = 4): NewsArticle[] {
  return getAllNews()
    .filter(
      (a) =>
        a.id !== article.id &&
        (a.category === article.category || a.country === article.country)
    )
    .slice(0, limit);
}