import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    // Validate environment variables
    const projectId = process.env.GOOGLE_PROJECT_ID;
    const privateKeyId = process.env.GOOGLE_PRIVATE_KEY_ID;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    const clientId = process.env.GOOGLE_CLIENT_ID;

    if (!projectId || !privateKey || !clientEmail) {
      return NextResponse.json(
        { error: 'Missing Google Cloud credentials in environment variables' },
        { status: 500 }
      );
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
        auth_uri: 'https://accounts.google.com/o/oauth2/auth',
        token_uri: 'https://oauth2.googleapis.com/token',
        auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
      },
      scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
    });

    const webmasters = google.webmasters('v3');

    // Get last 30 days data
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const startDate = thirtyDaysAgo.toISOString().split('T')[0];
    const endDate = new Date().toISOString().split('T')[0];

    // Query GSC data
    const response = await webmasters.searchanalytics.query({
      siteUrl: 'https://policyrix.com/',
      auth,
      requestBody: {
        startDate: startDate,
        endDate: endDate,
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
      response.data.rows.forEach((row) => {
        totalClicks += row.clicks || 0;
        totalImpressions += row.impressions || 0;
        totalCtr += row.ctr || 0;
        totalPosition += row.position || 0;
        rowCount++;
      });
    }

    const avgCtr = rowCount > 0 ? (totalCtr / rowCount * 100).toFixed(2) : '0';
    const avgPosition = rowCount > 0 ? (totalPosition / rowCount).toFixed(2) : '0';

    return NextResponse.json({
      success: true,
      clicks: totalClicks,
      impressions: totalImpressions,
      ctr: avgCtr,
      position: avgPosition,
      queries: response.data.rows || [],
      period: `${startDate} to ${endDate}`,
    });
  } catch (error) {
    console.error('GSC API Error:', error);
    return NextResponse.json(
      {
        error: 'Failed to fetch GSC data',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}