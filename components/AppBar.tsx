import {
  AppBar as MaterialAppBar,
  Box,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core"
import { GitHub, LinkedIn } from "@material-ui/icons"

const useStyles = makeStyles((theme) => ({
  appBarIcon: {
    marginRight: theme.spacing(2),
  },
  button: {
    marginLeft: theme.spacing(15),
  },
  appBar: {
    padding: "0px 10% 0px 10%",
  },
  appBarContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
  },
}))

export function AppBar() {
  const classes = useStyles()

  return (
    <MaterialAppBar className={classes.appBar} position="static" color="transparent" elevation={0}>
      <Toolbar className={classes.toolBar}>
        <Typography variant="h5">JAAKKO NIEMENSIVU</Typography>
        <Button className={classes.button} color="inherit">
          Submit a tree
        </Button>
        <Button className={classes.button} color="inherit">
          Statistics
        </Button>
        <Button className={classes.button} color="inherit">
          About
        </Button>
        <Box>
          <GitHub />
          <LinkedIn />
        </Box>
      </Toolbar>
    </MaterialAppBar>
  )
}
