import { Box, IconButton, makeStyles } from "@material-ui/core"
import { GitHub, LinkedIn } from "@material-ui/icons"
import { AppBar } from "./AppBar"

export interface SocialMediasProps {}

const useStyles = makeStyles((theme) => ({
  container: {
    position: "sticky",
    display: "flex",
    flexDirection: "column",
    float: "right",
    top: "30%",
  },
  icon: {
    margin: theme.spacing(0.5),
    fontSize: 40,
  },
}))

export const SocialMedias: React.FC<SocialMediasProps> = (props) => {
  const classes = useStyles()

  return (
    <Box className={classes.container}>
      <IconButton>
        <LinkedIn className={classes.icon} />
      </IconButton>
      <IconButton>
        <GitHub className={classes.icon} />
      </IconButton>
    </Box>
  )
}
