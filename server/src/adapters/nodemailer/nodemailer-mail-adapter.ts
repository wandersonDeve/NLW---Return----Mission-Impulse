import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: process.env.MAIL_PORT == 465,
  // true for 465, false for other ports
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transporter.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Wanderson Santos <email>",
      subject,
      html: body,
    });
  }
}
