// app/api/reindex/route.ts
// Auto-triggered after each deployment to notify search engines about new articles

import { NextRequest, NextResponse } from 'next/server';
import { notifyGoogleBatch } from '@/lib/indexing';
import { getAllNews } from '@/lib/news';

const BASE_URL = 'https://policyrix.com';

export async function POST(req: NextRequest) {
  // Protect this endpoint with a secret token
  const authHeader = req.headers.get('authorization');
  const secret = process.env.REINDEX_SECRET;

  if (!secret || authHeader !== `Bearer ${secret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const articles = getAllNews();

    // Get today's date and last 2 days (for catching articles that might have been missed)
    const now = new Date();
    const today = now.toISOString().split('T')[0];
    const yesterday = new Date(now.getTime() - 86400000).toISOString().split('T')[0];
    const twoDaysAgo = new Date(now.getTime() - 172800000).toISOString().split('T')[0];

    // Only notify for articles from today, yesterday, and 2 days ago
    const recentArticles = articles.filter(
      (a) => a.date === today || a.date === yesterday || a.date === twoDaysAgo
    );

    if (recentArticles.length === 0) {
      return NextResponse.json({
        message: 'No recent articles to index',
        count: 0,
        timestamp: new Date().toISOString(),
      });
    }

    // Build URLs for all recent articles
    const urls = [
      `${BASE_URL}`, // Homepage
      `${BASE_URL}/daily/${today}`, // Today's daily page
    ];

    // Add all recent article URLs
    recentArticles.forEach((article) => {
      urls.push(`${BASE_URL}/news/${article.date}/${article.slug}`);
    });

    console.log(`🔄 [Reindex] Notifying about ${urls.length} URLs...`);

    const results = await notifyGoogleBatch(urls);
    const successful = results.filter((r) => r.success).length;
    const failed = results.filter((r) => !r.success);

    console.log(`✅ [Reindex] Complete: ${successful}/${urls.length} successful`);

    return NextResponse.json({
      message: `Indexed ${successful}/${urls.length} URLs`,
      successful,
      failed: failed.length,
      articlesProcessed: recentArticles.length,
      failedUrls: failed.slice(0, 10), // Return first 10 failures
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    console.error('❌ [Reindex] Error:', err);
    return NextResponse.json(
      { error: String(err), timestamp: new Date().toISOString() },
      { status: 500 }
    );
  }
}

// Allow GET for monitoring/testing
export async function GET(req: NextRequest) {
  const authHeader = req.headers.get('authorization');
  const secret = process.env.REINDEX_SECRET;

  if (!secret || authHeader !== `Bearer ${secret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  return NextResponse.json({
    status: '✅ Reindex endpoint is live',
    endpoint: '/api/reindex',
    method: 'POST',
    required_header: 'Authorization: Bearer YOUR_REINDEX_SECRET',
    timestamp: new Date().toISOString(),
  });
}