import {
  AppBar as MaterialAppBar,
  Box,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core"

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
    color: theme.palette.common.white,
  },
  nameTextContainer: {
    backgroundColor: "rgba(0,0,0,0.2)",
    padding: theme.spacing(2),
    borderBottomLeftRadius: theme.shape.borderRadius,
    borderBottomRightRadius: theme.shape.borderRadius,
  },
}))

interface AooBarProps {}

export const AppBar: React.FC<AooBarProps> = () => {
  const classes = useStyles()

  return (
    <MaterialAppBar
      className={classes.appBar}
      position="fixed"
      color="transparent"
      elevation={0}
    >
      <Toolbar className={classes.toolBar}>
        <Box className={classes.nameTextContainer}>
          <Typography variant="h5">JAAKKO NIEMENSIVU</Typography>
        </Box>
        <Box>
          <Button className={classes.button} color="inherit">
            About
          </Button>
          <Button className={classes.button} color="inherit">
            Projects
          </Button>
          <Button className={classes.button} color="inherit">
            Contact
          </Button>
        </Box>
      </Toolbar>
    </MaterialAppBar>
  )
}
