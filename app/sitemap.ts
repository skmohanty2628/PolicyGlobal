import { MetadataRoute } from 'next';
import { getAllNews, getAllDates } from '@/lib/news';
import { CATEGORIES, COUNTRIES } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://policyrix.com';

  const articles = getAllNews();
  const dates = getAllDates();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${base}/disclaimer`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${base}/privacy-policy`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
    { url: `${base}/terms`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
  ];

  const articlePages: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${base}/news/${a.date}/${a.slug.replace(/&/g, 'and')}`,
    lastModified: new Date(a.verified_at),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const dailyPages: MetadataRoute.Sitemap = dates.map((d) => ({
    url: `${base}/daily/${d}`,
    lastModified: new Date(d),
    changeFrequency: 'daily' as const,
    priority: 0.7,
  }));

  const categoryPages: MetadataRoute.Sitemap = CATEGORIES.map((c) => ({
    url: `${base}/category/${c.slug.replace(/&/g, 'and')}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.6,
  }));

  const countryPages: MetadataRoute.Sitemap = COUNTRIES.map((c) => ({
    url: `${base}/country/${c.slug.replace(/&/g, 'and')}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...articlePages, ...dailyPages, ...categoryPages, ...countryPages];
}