import {
  Snackbar,
  SnackbarProps,
  Typography,
  makeStyles,
  Box,
} from "@material-ui/core"
import { CheckCircleOutline, ErrorOutline } from "@material-ui/icons"
import clsx from "clsx"

const useStyles = makeStyles((theme) => ({
  baseSnackbar: {
    paddingInline: theme.spacing(2),
    paddingBlock: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
  },
  successSnackbar: {
    backgroundColor: theme.palette.success.main,
  },
  errorSnackbar: {
    backgroundColor: theme.palette.error.main,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
}))

interface NotificationProps extends SnackbarProps {
  variant: "error" | "success"
}

const resolveIcon = (v: NotificationProps["variant"]) => {
  return v === "success"
    ? CheckCircleOutline
    : v === "error"
    ? ErrorOutline
    : undefined
}

export const Notification: React.FC<NotificationProps> = (props) => {
  const styles = useStyles()
  const { message, variant, ...snackbarProps } = props
  const Icon = resolveIcon(variant)

  return (
    <Snackbar
      className={clsx(styles.baseSnackbar, {
        [styles.successSnackbar]: variant === "success",
        [styles.errorSnackbar]: variant === "error",
      })}
      {...snackbarProps}
    >
      <Box display="flex" flexDirection="row" alignItems="center">
        {Icon && <Icon fontSize="large" className={styles.icon} />}
        <Typography variant="subtitle1">{message}</Typography>
      </Box>
    </Snackbar>
  )
}
