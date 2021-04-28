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
  const { senderMail, name, message } = req.body

  if (!senderMail || !name || !message) {
    return res.status(403).send("Invalid request")
  }

  const mail = {
    from: senderMail,
    to: process.env.EMAIL_USERNAME,
    subject: `Message from ${name} <${senderMail}>`,
    text: message,
  }

  await transporter.sendMail(mail)
}

const mailer = ({ senderMail, name, text, recipientMail }) => {
  const from =
    name && senderMail ? `${name} <${senderMail}>` : `${name || senderMail}`
  const message = {
    from: senderMail,
    to: recipientMail,
    subject: `New message from ${from}`,
    text,
    replyTo: from,
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    )
  })
}
