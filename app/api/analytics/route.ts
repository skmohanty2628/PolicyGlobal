// app/api/analytics/route.ts
import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export const dynamic = 'force-dynamic';

export async function GET() {
  const propertyId = process.env.GA4_PROPERTY_ID;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;

  if (!propertyId || !privateKey || !clientEmail) {
    return NextResponse.json({ connected: false, reason: 'GA4_PROPERTY_ID not configured' });
  }

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: { type: 'service_account', private_key: privateKey, client_email: clientEmail },
      scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
    });

    const client = await auth.getClient();
    const tokenResponse = await (client as any).getAccessToken();
    const accessToken = tokenResponse.token;

    const base = `https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}`;
    const headers = { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' };

    const [trafficRes, pagesRes, countriesRes, channelsRes] = await Promise.all([
      fetch(`${base}:runReport`, {
        method: 'POST', headers,
        body: JSON.stringify({
          dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
          metrics: [{ name: 'sessions' }, { name: 'screenPageViews' }, { name: 'activeUsers' }],
        }),
      }),
      fetch(`${base}:runReport`, {
        method: 'POST', headers,
        body: JSON.stringify({
          dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
          dimensions: [{ name: 'pagePath' }, { name: 'pageTitle' }],
          metrics: [{ name: 'screenPageViews' }],
          orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
          limit: 10,
        }),
      }),
      fetch(`${base}:runReport`, {
        method: 'POST', headers,
        body: JSON.stringify({
          dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
          dimensions: [{ name: 'country' }],
          metrics: [{ name: 'activeUsers' }],
          orderBys: [{ metric: { metricName: 'activeUsers' }, desc: true }],
          limit: 6,
        }),
      }),
      fetch(`${base}:runReport`, {
        method: 'POST', headers,
        body: JSON.stringify({
          dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
          dimensions: [{ name: 'sessionDefaultChannelGroup' }],
          metrics: [{ name: 'sessions' }],
          orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
          limit: 6,
        }),
      }),
    ]);

    const [traffic, pages, countries, channels] = await Promise.all([
      trafficRes.json(), pagesRes.json(), countriesRes.json(), channelsRes.json(),
    ]);

    const totals = traffic.totals?.[0]?.metricValues || [];
    const totalSessions = parseInt(totals[0]?.value || '0');
    const totalViews    = parseInt(totals[1]?.value || '0');
    const activeUsers   = parseInt(totals[2]?.value || '0');

    const topPages = (pages.rows || []).map((r: any) => ({
      path:  r.dimensionValues?.[0]?.value || '/',
      title: r.dimensionValues?.[1]?.value || 'Unknown',
      views: parseInt(r.metricValues?.[0]?.value || '0'),
    }));

    const rawCountries = (countries.rows || []).map((r: any) => ({
      name:  r.dimensionValues?.[0]?.value || 'Unknown',
      users: parseInt(r.metricValues?.[0]?.value || '0'),
    }));
    const maxUsers = rawCountries[0]?.users || 1;
    const topCountries = rawCountries.map((c: any) => ({
      ...c, percentage: Math.round((c.users / maxUsers) * 100),
    }));

    const rawChannels = (channels.rows || []).map((r: any) => ({
      name:     r.dimensionValues?.[0]?.value || 'Unknown',
      sessions: parseInt(r.metricValues?.[0]?.value || '0'),
    }));
    const maxCh = rawChannels[0]?.sessions || 1;
    const trafficSources = rawChannels.map((s: any) => ({
      ...s, percentage: Math.round((s.sessions / maxCh) * 100),
    }));

    const organicSessions = rawChannels.find((s: any) =>
      s.name.toLowerCase().includes('organic')
    )?.sessions || 0;
    const organicShare = totalSessions > 0
      ? Math.round((organicSessions / totalSessions) * 100) : 0;

    return NextResponse.json({
      connected: true,
      totalSessions, totalViews, activeUsers, organicShare,
      topPage:    topPages[0]     || { path: '/', title: 'Home', views: 0 },
      topCountry: topCountries[0] || { name: 'Unknown', users: 0, percentage: 100 },
      bestChannel: trafficSources[0] || { name: 'Organic Search', sessions: 0, percentage: 100 },
      topPages, topCountries, trafficSources,
    });
  } catch (error) {
    console.error('Analytics error:', error);
    return NextResponse.json({
      connected: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}