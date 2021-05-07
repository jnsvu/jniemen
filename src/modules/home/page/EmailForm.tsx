import { useForm } from "react-hook-form"
import { TextField, Button, Grid, CircularProgress, makeStyles, Box } from "@material-ui/core"
import { emailPattern } from "../../../utils/validate"
import { useMutation } from "react-query"
import { Notification } from "../../../components"
import { useState } from "react"
import { sendMail } from "../api/sendMail"

const useStyles = makeStyles((theme) => ({
  buttonProgress: {
    position: "absolute",
    color: theme.palette.primary[100],
  },
}))

interface EmailFormFields {
  name: string
  email: string
  topic: string
  message: string
}

export const EmailForm: React.FC = () => {
  const styles = useStyles()
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<EmailFormFields>()
  const [showErrorNotification, setErrorNotification] = useState(false)
  const [showSuccessNotification, setSuccessNotification] = useState(false)

  const { mutate, isLoading } = useMutation(sendMail, {
    onSuccess: () => {
      setSuccessNotification(true)
    },
    onError: (e) => {
      setErrorNotification(true)
    },
    onSettled: () => {
      reset()
    },
  })

  const _onSubmit = (data: EmailFormFields) => {
    const { message, name, email, topic } = data
    mutate({ message, name, senderMail: email, topic })
  }

  return (
    <>
      <form onSubmit={handleSubmit(_onSubmit)} onReset={() => reset()}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              {...register("name", { maxLength: 50 })}
              fullWidth
              error={!!errors.name}
              helperText={errors.name?.message}
              required
              name="name"
              placeholder="Name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...register("email", {
                maxLength: 50,
                pattern: {
                  value: emailPattern,
                  message: "Invalid email",
                },
              })}
              fullWidth
              required
              error={!!errors.email}
              helperText={errors.email?.message}
              name="email"
              placeholder="Email"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...register("topic", { maxLength: 50 })}
              fullWidth
              required
              error={!!errors.topic}
              helperText={errors.topic?.message}
              name="topic"
              placeholder="Topic"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...register("message", { maxLength: 400 })}
              fullWidth
              required
              error={!!errors.message}
              helperText={errors.message?.message}
              name="message"
              placeholder="Message"
              variant="outlined"
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={6}>
            <Button size="large" variant="text" type="reset">
              Clear
            </Button>
          </Grid>
          <Grid container item xs={6} justify="flex-end">
            <Box display="flex" alignItems="center" justifyContent="center">
              <Button size="large" variant="contained" color="secondary" type="submit" disabled={isLoading}>
                Send
              </Button>
              {isLoading && <CircularProgress size={24} className={styles.buttonProgress} />}
            </Box>
          </Grid>
        </Grid>
      </form>
      <Notification
        variant="error"
        open={showErrorNotification}
        autoHideDuration={5000}
        onClose={() => setErrorNotification(false)}
        message="Failed to send email. Please try again later."
      />
      <Notification
        variant="success"
        open={showSuccessNotification}
        autoHideDuration={4000}
        onClose={() => setSuccessNotification(false)}
        message="Email sent."
      />
    </>
  )
}
