import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      fullName,
      role,
      schoolName,
      municipality,
      studentCount,
      schoolType,
      primaryNeed,
      notes,
      timestamp,
    } = body;

    const resendKey = process.env.RESEND_API_KEY;

    // If no API key configured — log and return success (POC mode)
    if (!resendKey || resendKey === "re_placeholder") {
      console.log("📩 New quote request (POC mode — no email sent):", body);
      return NextResponse.json({ ok: true, mode: "poc" });
    }

    const resend = new Resend(resendKey);

    await resend.emails.send({
      from: "מרחב יוצר <onboarding@resend.dev>",
      to: ["tewanda6@gmail.com"],
      subject: "פנייה חדשה - מרחב יוצר",
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #FAF3E0; padding: 24px; border-radius: 16px;">
          <div style="background: #3E2723; color: white; padding: 20px 24px; border-radius: 12px; margin-bottom: 24px;">
            <h1 style="margin: 0; font-size: 22px;">📩 פנייה חדשה — מרחב יוצר</h1>
            <p style="margin: 6px 0 0; color: #BCAAA4; font-size: 14px;">${timestamp}</p>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            ${[
              ["שם מלא", fullName],
              ["תפקיד", role],
              ["שם בית הספר", schoolName],
              ["רשות מקומית", municipality],
              ["מספר תלמידים", studentCount || "לא צוין"],
              ["סוג מסגרת", schoolType],
              ["צורך מרכזי", primaryNeed],
              ["הערות", notes || "—"],
            ]
              .map(
                ([label, value]) => `
              <tr style="border-bottom: 1px solid #D7CCC8;">
                <td style="padding: 10px 12px; font-weight: bold; color: #4E342E; background: #EFEBE9; width: 40%;">${label}</td>
                <td style="padding: 10px 12px; color: #3E2723;">${value}</td>
              </tr>`
              )
              .join("")}
          </table>

          <div style="margin-top: 24px; background: #FFF8E1; border: 1px solid #FFE082; border-radius: 12px; padding: 16px;">
            <p style="margin: 0; color: #795548; font-size: 13px;">
              📌 לפתיחת שיחה עם הלקוח — השב לאימייל זה ישירות.
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Quote API error:", error);
    return NextResponse.json({ ok: false, error: "Internal error" }, { status: 500 });
  }
}
