import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;background:#09090b;color:#fafafa;padding:32px;border-radius:12px">
          <h2 style="margin:0 0 24px;font-size:20px;color:#6366f1">New message from your portfolio</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr>
              <td style="padding:10px 0;color:#a1a1aa;font-size:13px;width:90px">Name</td>
              <td style="padding:10px 0;font-size:14px">${name}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#a1a1aa;font-size:13px">Email</td>
              <td style="padding:10px 0;font-size:14px"><a href="mailto:${email}" style="color:#6366f1">${email}</a></td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#a1a1aa;font-size:13px">Subject</td>
              <td style="padding:10px 0;font-size:14px">${subject}</td>
            </tr>
          </table>
          <hr style="border:none;border-top:1px solid #27272a;margin:20px 0"/>
          <p style="color:#a1a1aa;font-size:13px;margin:0 0 8px">Message</p>
          <p style="font-size:14px;line-height:1.7;white-space:pre-wrap;margin:0">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] failed to send email:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
