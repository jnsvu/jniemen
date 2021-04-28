import { useForm } from "react-hook-form"
import { TextField, Button, Grid } from "@material-ui/core"
import { emailPattern } from "../../../utils/validate"

interface EmailFormFields {
  name: string
  email: string
  topic: string
  message: string
}

interface EmailFormProps {
  onSubmit(data: EmailFormFields): void
}

export const EmailForm: React.FC<EmailFormProps> = ({ onSubmit }) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<EmailFormFields>()

  const _onSubmit = (data: EmailFormFields) => onSubmit(data)

  return (
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
