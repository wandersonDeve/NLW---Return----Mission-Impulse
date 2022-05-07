import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.NODEMAILER_HOST,
  port: Number(process.env.NODEMAILER_PORT),
  secure: Number(process.env.NODEMAILER_PORT) == 465,
  // true for 465, false for other ports
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASSWORD,
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
