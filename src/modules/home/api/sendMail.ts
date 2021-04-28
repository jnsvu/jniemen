interface SendMailParams {
  senderMail: string
  name: string
  message: string
  topic: string
}

export const sendMail = (params: SendMailParams) => {
  return fetch(process.env.API_URL + "/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params),
  }).then((res) => {
    throw new Error("jee")
    res.json()
  })
}
