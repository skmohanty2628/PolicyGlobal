// app/news-sitemap.xml/route.ts
// Google News Sitemap — separate from the regular sitemap.xml.
// Google News ONLY wants articles published in the last 48 hours in this file.
// Reference: https://developers.google.com/search/docs/crawling-indexing/sitemaps/news-sitemap

import { getAllNews } from '@/lib/news';

const SITE_URL = 'https://policyrix.com';
const PUBLICATION_NAME = 'PolicyRix'; // ⚠️ must exactly match the name entered in Publisher Center

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const all = getAllNews();

  const cutoff = Date.now() - 48 * 60 * 60 * 1000;
  const recent = all.filter((a) => {
    const t = new Date(a.published_at).getTime();
    return !Number.isNaN(t) && t >= cutoff;
  });

  const urls = recent
    .map((a) => {
      const loc = `${SITE_URL}/news/${a.date}/${a.slug.replace(/&/g, 'and')}`;
      return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <news:news>
      <news:publication>
        <news:name>${escapeXml(PUBLICATION_NAME)}</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${new Date(a.published_at).toISOString()}</news:publication_date>
      <news:title>${escapeXml(a.title)}</news:title>
    </news:news>
  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=300, s-maxage=300', // 5 min — this file needs to stay fresh
    },
  });
}