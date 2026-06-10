import { NextRequest, NextResponse } from 'next/server';

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FROM_EMAIL = 'PolicyGlobal <hello@policyglobal.com>';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://policy-global.vercel.app';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required.' }, { status: 400 });
    }

    if (!RESEND_API_KEY) {
      return NextResponse.json({ error: 'Email service not configured.' }, { status: 500 });
    }

    const emailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [email],
        subject: "You're subscribed to PolicyGlobal Daily Brief",
        html: `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/></head>
<body style="margin:0;padding:0;background:#F0F2F5;font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#F0F2F5;padding:40px 20px;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
<tr>
  <td style="background:linear-gradient(135deg,#0A1628,#162444);border-radius:16px 16px 0 0;padding:36px 40px;text-align:center;">
    <div style="font-size:22px;font-weight:700;color:#ffffff;margin-bottom:6px;">PolicyGlobal</div>
    <p style="color:#C9A84C;font-size:11px;letter-spacing:3px;text-transform:uppercase;margin:0;">Insurance &amp; Finance Intelligence</p>
  </td>
</tr>
<tr>
  <td style="background:#ffffff;padding:40px;border-left:1px solid #E2E8F0;border-right:1px solid #E2E8F0;">
    <h1 style="font-size:26px;font-weight:700;color:#0A1628;margin:0 0 16px;">You are subscribed!</h1>
    <p style="font-size:15px;color:#475569;line-height:1.7;margin:0 0 24px;">
      Welcome to <strong>The PolicyGlobal Daily Brief</strong>. You will receive the top verified
      insurance and finance stories from around the world, curated by our editorial desk and sourced
      from Reuters, Bloomberg, FCA, RBI, and other trusted publishers.
    </p>
    <div style="background:#F8F9FA;border-left:4px solid #C9A84C;padding:20px 24px;margin-bottom:28px;">
      <p style="font-size:12px;color:#C9A84C;font-weight:700;text-transform:uppercase;letter-spacing:2px;margin:0 0 10px;">What to expect</p>
      <ul style="margin:0;padding:0 0 0 18px;color:#475569;font-size:14px;line-height:2;">
        <li>Top insurance and finance stories, verified daily</li>
        <li>Coverage across US, India, UK, EU, and Asia-Pacific</li>
        <li>No clickbait. No spam. Unsubscribe anytime.</li>
      </ul>
    </div>
    <div style="text-align:center;margin-bottom:28px;">
      <a href="${SITE_URL}" style="display:inline-block;background:linear-gradient(135deg,#C9A84C,#E0B84A);color:#0A1628;font-weight:700;font-size:15px;text-decoration:none;padding:14px 32px;border-radius:50px;">Read Today's Brief</a>
    </div>
    <p style="font-size:12px;color:#94A3B8;text-align:center;line-height:1.6;margin:0;">
      This newsletter is for informational purposes only and does not constitute financial advice.
    </p>
  </td>
</tr>
<tr>
  <td style="background:#0A1628;border-radius:0 0 16px 16px;padding:24px 40px;text-align:center;">
    <p style="color:#475569;font-size:12px;margin:0 0 6px;">PolicyGlobal - Independent - Verified - Informational</p>
    <p style="color:#334155;font-size:11px;margin:0;">
      You subscribed at ${SITE_URL}. 
      <a href="${SITE_URL}/disclaimer" style="color:#C9A84C;">Disclaimer</a> - 
      <a href="${SITE_URL}/privacy-policy" style="color:#C9A84C;">Privacy</a>
    </p>
  </td>
</tr>
</table>
</td></tr>
</table>
</body>
</html>`,
      }),
    });

    if (!emailRes.ok) {
      const errBody = await emailRes.json().catch(() => ({}));
      console.error('Resend error:', errBody);
      return NextResponse.json({ error: 'Failed to send. Please try again.' }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (err) {
    console.error('Subscribe error:', err);
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}