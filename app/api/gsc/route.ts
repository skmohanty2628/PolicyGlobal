// app/api/gsc/route.ts
import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';

// ✅ FIX: force-dynamic prevents this from running at BUILD TIME
// Without this, Next.js tries to call the GSC API during `next build` → error
export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    // Validate environment variables
    const projectId   = process.env.GOOGLE_PROJECT_ID;
    const privateKeyId = process.env.GOOGLE_PRIVATE_KEY_ID;
    const privateKey  = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    const clientId    = process.env.GOOGLE_CLIENT_ID;

    // ✅ FIX: Return empty data (not error 500) when credentials are missing
    if (!projectId || !privateKey || !clientEmail) {
      return NextResponse.json({
        success: false,
        message: 'GSC credentials not configured',
        clicks: 0,
        impressions: 0,
        ctr: '0.00',
        position: '0.00',
        queries: [],
      });
    }

    // Create auth client
    const auth = new google.auth.GoogleAuth({
      credentials: {
        type: 'service_account',
        project_id: projectId,
        private_key_id: privateKeyId,
        private_key: privateKey,
        client_email: clientEmail,
        client_id: clientId,
      } as any,
      scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
    });

    const webmasters = google.webmasters('v3');

    // Last 30 days
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const startDate = thirtyDaysAgo.toISOString().split('T')[0];
    const endDate   = new Date().toISOString().split('T')[0];

    const response = await webmasters.searchanalytics.query({
      siteUrl: 'https://policyrix.com/',
      auth: auth as any,
      requestBody: {
        startDate,
        endDate,
        dimensions: ['query'],
        rowLimit: 10,
      },
    });

    // Calculate totals
    let totalClicks = 0;
    let totalImpressions = 0;
    let totalCtr = 0;
    let totalPosition = 0;
    let rowCount = 0;

    if (response.data.rows && response.data.rows.length > 0) {
      response.data.rows.forEach((row: any) => {
        totalClicks      += row.clicks      || 0;
        totalImpressions += row.impressions || 0;
        totalCtr         += row.ctr         || 0;
        totalPosition    += row.position    || 0;
        rowCount++;
      });
    }

    const avgCtr      = rowCount > 0 ? ((totalCtr / rowCount) * 100).toFixed(2) : '0.00';
    const avgPosition = rowCount > 0 ? (totalPosition / rowCount).toFixed(2)     : '0.00';

    return NextResponse.json({
      success: true,
      clicks:      totalClicks,
      impressions: totalImpressions,
      ctr:         avgCtr,
      position:    avgPosition,
      queries:     response.data.rows || [],
      period:      `${startDate} to ${endDate}`,
    });

  } catch (error) {
    console.error('GSC API Error:', error);

    // ✅ FIX: Return 200 with empty data instead of crashing the build
    return NextResponse.json({
      success: false,
      clicks: 0,
      impressions: 0,
      ctr: '0.00',
      position: '0.00',
      queries: [],
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}