import { Box, Collapse, IconButton, makeStyles } from "@material-ui/core"
import { GitHub, LinkedIn } from "@material-ui/icons"

export interface SocialMediasProps {}

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top: "20%",
    right: 0,
    zIndex: theme.zIndex.appBar,
  },
  iconContainer: {
    display: "flex",
    flexDirection: "column",
    pointerEvents: "auto",
  },
  icon: {
    margin: theme.spacing(0.25),
    fontSize: 30,
    color: theme.palette.common.white,
  },
}))

export const SocialMediaIcons: React.FC = () => {
  const styles = useStyles()

  return (
    <>
      <IconButton href={"https://www.linkedin.com/in/jaakko-niemensivu-213b10154/"} target="_blank">
        <LinkedIn className={styles.icon} />
      </IconButton>
      <IconButton href={"https://github.com/sniib/"} target="_blank">
        <GitHub className={styles.icon} />
      </IconButton>
    </>
  )
}

export const SocialMedias: React.FC<SocialMediasProps> = () => {
  const styles = useStyles()

  return (
    <Box className={styles.root}>
      <Collapse in mountOnEnter>
        <Box className={styles.iconContainer}>
          <SocialMediaIcons />
        </Box>
      </Collapse>
    </Box>
  )
}
