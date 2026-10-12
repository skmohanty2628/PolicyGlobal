import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const TO = process.env.CONTACT_TO_EMAIL || 'hello@policyrix.com';
const FROM = 'PolicyRix Contact <hello@policyrix.com>';

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export async function POST(req: NextRequest) {
  try {
    const { name, email, topic, message, website } = await req.json();

    // Honeypot: real users never fill the hidden "website" field.
    if (website) return NextResponse.json({ success: true });

    if (!name || !email || !message || !String(email).includes('@')) {
      return NextResponse.json({ error: 'Name, a valid email and a message are required.' }, { status: 400 });
    }
    if (String(message).length > 5000) {
      return NextResponse.json({ error: 'Message is too long.' }, { status: 400 });
    }
    if (!RESEND_API_KEY) {
      return NextResponse.json({ error: 'Email service not configured.' }, { status: 500 });
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: String(email),
        subject: `[PolicyRix contact] ${String(topic || 'General').slice(0, 80)} — ${String(name).slice(0, 80)}`,
        html: `<p><strong>From:</strong> ${esc(String(name))} &lt;${esc(String(email))}&gt;</p>
               <p><strong>Topic:</strong> ${esc(String(topic || 'General'))}</p>
               <p style="white-space:pre-wrap">${esc(String(message))}</p>`,
      }),
    });

    if (!res.ok) {
      console.error('Contact email failed', await res.text().catch(() => ''));
      return NextResponse.json({ error: 'Could not send your message. Please email us directly.' }, { status: 502 });
    }
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}
