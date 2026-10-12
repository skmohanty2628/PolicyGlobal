import { getLatestNews } from '@/lib/news';

const SITE = 'https://policyrix.com';
const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const revalidate = 3600;

export async function GET() {
  const items = getLatestNews(40)
    .map((a) => {
      const url = `${SITE}/news/${a.date}/${a.slug.replace(/&/g, 'and')}`;
      return `<item><title>${esc(a.title)}</title><link>${esc(url)}</link><guid isPermaLink="true">${esc(url)}</guid><pubDate>${new Date(a.published_at).toUTCString()}</pubDate><category>${esc(a.category)}</category><description>${esc(a.summary)}</description></item>`;
    })
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel><title>PolicyRix</title><link>${SITE}</link><description>Global insurance and finance news</description><language>en</language>
${items}
</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
