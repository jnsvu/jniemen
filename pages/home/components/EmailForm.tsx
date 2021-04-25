import { useForm, Controller } from "react-hook-form"
import { TextField, Button, makeStyles, Grid } from "@material-ui/core"

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
  },
}))

export interface EmailFormProps {}

interface EmailFormFields {
  name: string
  email: string
  topic?: string
  message: string
}

export const EmailForm: React.FC<EmailFormProps> = (props) => {
  const { handleSubmit, control, reset } = useForm<EmailFormFields>()

  const styles = useStyles()

  const onSubmit = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Controller
            defaultValue=""
            name="name"
            render={({ field }) => (
              <TextField
                required
                fullWidth
                id="name"
                label="Name"
                variant="outlined"
              />
            )}
            control={control}
            rules={{
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "invalid email address",
              },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="email"
            render={({ field }) => (
              <TextField
                required
                fullWidth
                id="email"
                label="Email"
                variant="outlined"
              />
            )}
            control={control}
            defaultValue=""
            rules={{
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "invalid email address",
              },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="topic"
            render={({ field }) => (
              <TextField
                fullWidth
                id="topic"
                label="Topic"
                variant="outlined"
              />
            )}
            control={control}
            defaultValue=""
            rules={{
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "invalid email address",
              },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="topic"
            render={({ field }) => (
              <TextField
                fullWidth
                multiline
                rows={5}
                id="message"
                label="Message..."
                variant="outlined"
              />
            )}
            control={control}
            defaultValue=""
            rules={{
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "invalid email address",
              },
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Button size="large" variant="text">
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
