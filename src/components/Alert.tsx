import {
  Snackbar,
  SnackbarProps,
  Typography,
  makeStyles,
} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  snackbar: {
    backgroundColor: theme.palette.error.dark,
    paddingInline: theme.spacing(2),
    paddingBlock: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
  },
}))

interface AlertProps extends SnackbarProps {}

export const Alert: React.FC<AlertProps> = (props) => {
  const styles = useStyles()
  const { message, ...snackbarProps } = props

  return (
    <Snackbar className={styles.snackbar} {...snackbarProps}>
      <Typography variant="subtitle1">{message}</Typography>
    </Snackbar>
  )
}
