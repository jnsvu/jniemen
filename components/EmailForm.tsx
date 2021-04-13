import { useForm, Controller } from "react-hook-form"
import { TextField, FormControl, Button } from "@material-ui/core"

export interface EmailFormProps {}

export const EmailForm: React.FC<EmailFormProps> = (props) => {
  const { handleSubmit, control, reset } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl fullWidth variant="outlined">
        <Controller
          name="email"
          render={({ field }) => (
            <TextField id="email" variant="outlined" label="Email" />
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
      </FormControl>
      <FormControl fullWidth variant="outlined">
        <Controller
          name="password"
          render={() => (
            <TextField
              id="password"
              type="password"
              helperText={"helper"}
              variant="outlined"
              label="Password"
              /// error={true}
            />
          )}
          control={control}
          defaultValue=""
          rules={{
            required: "Required",
          }}
        />
      </FormControl>
      <Button variant="contained" color="primary" type="submit">
        Login
      </Button>
    </form>
  )
}
