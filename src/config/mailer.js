import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const sendContactEmail = async ({ name, email, subject, message, lang }) => {
  const isEn = lang === 'en';

  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_TO,
    replyTo: email,
    subject: `[Portfolio] ${subject || (isEn ? 'New message' : 'Nouveau message')} — ${name}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:auto;padding:32px;background:#f4f7f9;border-radius:12px">
        <div style="background:#00cfe0;border-radius:8px;padding:16px 24px;margin-bottom:24px">
          <h2 style="margin:0;color:#0a0a0a;font-size:18px">
            ${isEn ? '📩 New contact message' : '📩 Nouveau message de contact'}
          </h2>
        </div>
        <table style="width:100%;border-collapse:collapse;margin-bottom:20px">
          <tr><td style="padding:8px 0;color:#555;width:90px"><b>${isEn ? 'From' : 'De'}</b></td>
              <td style="padding:8px 0;color:#1e2832">${name}</td></tr>
          <tr><td style="padding:8px 0;color:#555"><b>Email</b></td>
              <td style="padding:8px 0"><a href="mailto:${email}" style="color:#00b4c8">${email}</a></td></tr>
          <tr><td style="padding:8px 0;color:#555"><b>${isEn ? 'Subject' : 'Sujet'}</b></td>
              <td style="padding:8px 0;color:#1e2832">${subject || '—'}</td></tr>
        </table>
        <div style="background:#fff;border-radius:8px;padding:20px;border-left:3px solid #00cfe0">
          <p style="color:#333;line-height:1.7;margin:0;white-space:pre-wrap">${message}</p>
        </div>
        <p style="margin-top:24px;font-size:12px;color:#999;text-align:center">
          ${isEn ? 'Sent from your portfolio' : 'Envoyé depuis votre portfolio'} · Bernard Kpedzi
        </p>
      </div>
    `,
  });
};
