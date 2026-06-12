import { NextResponse } from 'next/server';
import { getAllNews } from '@/lib/news';

export async function GET() {
  try {
    const articles = getAllNews().slice(0, 15);
    
    return NextResponse.json({
      articles: articles.map((a) => ({
        title: a.title,
        date: a.date,
        slug: a.slug,
        category: a.category,
        country: a.country,
        summary: a.summary.substring(0, 100) + '...',
      })),
      total: articles.length,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Error fetching articles:', error);
    return NextResponse.json(
      { articles: [], error: 'Failed to fetch articles' },
      { status: 500 }
    );
  }
}