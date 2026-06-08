import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ ok: false, reason: "no key" });
  }

  const { page, referrer, userAgent } = await req.json();

  const time = new Date().toLocaleString("en-US", {
    timeZone: "America/Chicago",
    dateStyle: "medium",
    timeStyle: "short",
  });

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "chavacodes4u@gmail.com",
    subject: `👀 Someone visited ${page} — chavacodes4u.com`,
    html: `
      <div style="font-family:sans-serif;max-width:480px;padding:24px;color:#111">
        <h2 style="margin:0 0 16px;font-size:18px">New visit on chavacodes4u.com</h2>
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          <tr><td style="padding:6px 0;color:#666;width:100px">Page</td><td style="padding:6px 0"><strong>${page}</strong></td></tr>
          <tr><td style="padding:6px 0;color:#666">Time</td><td style="padding:6px 0">${time} CT</td></tr>
          <tr><td style="padding:6px 0;color:#666">Referred from</td><td style="padding:6px 0">${referrer || "Direct / unknown"}</td></tr>
          <tr><td style="padding:6px 0;color:#666">Device</td><td style="padding:6px 0;font-size:12px;color:#444">${userAgent}</td></tr>
        </table>
      </div>
    `,
  });

  return NextResponse.json({ ok: true });
}
