// app/api/recent-articles/route.ts
import { NextResponse } from 'next/server';
import { getAllNews } from '@/lib/news';

export const dynamic = 'force-static';

export async function GET() {
  try {
    // ✅ FIX: Removed .slice(0, 15) — now returns ALL articles
    const allArticles = getAllNews();

    // Sort newest first
    const sorted = allArticles.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return NextResponse.json({
      articles: sorted.map((a) => ({
        title: a.title,
        date: a.date,
        slug: a.slug,
        category: a.category,
        country: a.country,
        summary: a.summary ? a.summary.substring(0, 100) + '...' : '',
      })),
      total: sorted.length,        // ✅ Now shows 60, not 15
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Error fetching articles:', error);
    return NextResponse.json(
      { articles: [], total: 0, error: 'Failed to fetch articles' },
      { status: 500 }
    );
  }
} 