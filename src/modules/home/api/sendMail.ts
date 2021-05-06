import { useMutation, UseMutationOptions } from "react-query"

interface SendMailParams {
  senderMail: string
  name: string
  message: string
  topic: string
}

export const sendMail = async (params: SendMailParams) => {
  return fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params),
  }).then((res) => res.json())
}
