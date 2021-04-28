import nodemailer from "nodemailer"
import type { NextApiRequest, NextApiResponse } from "next"

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PW,
  },
})

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { topic, senderMail, name, message } = req.body

  if (!senderMail || !name || !message) {
    return res.status(403).send("Invalid request")
  }

  const mail = {
    from: senderMail,
    to: process.env.EMAIL_USERNAME,
    subject: `${topic || "New message from"} ${name} <${senderMail}>`,
    text: message,
  }

  await transporter.sendMail(mail)

  return res.json({ message: "Email sent" })
}
