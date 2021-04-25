import { useForm } from "react-hook-form"
import { TextField, Button, Grid } from "@material-ui/core"
import { emailPattern } from "../validate"

interface EmailFormProps {}

interface EmailFormFields {
  name: string
  email: string
  topic: string
  message: string
}

export const EmailForm: React.FC<EmailFormProps> = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<EmailFormFields>()
  const onSubmit = (data: EmailFormFields) => console.log(data)
  console.log(errors)

  return (
    <form onSubmit={handleSubmit(onSubmit)} onReset={() => reset()}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            {...register("name", { maxLength: 50 })}
            fullWidth
            error={!!errors.name}
            helperText={errors.name?.message}
            required
            name="name"
            label="Name"
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
            label="Email"
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
            label="Topic"
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
            label="Message"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <Button size="large" variant="text" type="reset">
            Clear
          </Button>
        </Grid>
        <Grid container item xs={6} justify="flex-end">
          <Button
            size="large"
            variant="contained"
            color="secondary"
            type="submit"
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}
