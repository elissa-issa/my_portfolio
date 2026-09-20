import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export async function POST(req: Request) {
  const user = process.env.CONTACT_EMAIL_USER;
  const pass = process.env.CONTACT_EMAIL_APP_PASSWORD;
  const to = process.env.CONTACT_EMAIL_TO || user;

  if (!user || !pass || !to) {
    console.error(
      "Contact form: set CONTACT_EMAIL_USER and CONTACT_EMAIL_APP_PASSWORD in .env"
    );
    return new NextResponse("Email service is not configured", { status: 500 });
  }

  try {
    const { name, email, message, social } = await req.json();

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return new NextResponse("Invalid request", { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    const socialLine =
      typeof social === "string" && social ? social : "Not provided";

    await transporter.sendMail({
      from: `"Portfolio Contact" <${user}>`,
      to,
      // Replying in Gmail goes straight to the visitor.
      replyTo: `"${name.replace(/["\r\n]/g, "")}" <${email.replace(/[\r\n]/g, "")}>`,
      subject: `New portfolio message from ${name.replace(/[\r\n]/g, " ")}`,
      text: `Name: ${name}\nEmail: ${email}\nSocial: ${socialLine}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${escapeHtml(name)}</p>
<p><strong>Email:</strong> ${escapeHtml(email)}</p>
<p><strong>Social:</strong> ${escapeHtml(socialLine)}</p>
<p><strong>Message:</strong></p>
<p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>`,
    });

    return NextResponse.json("Success!");
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
