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
  },
  nameTextContainer: {
    borderRightStyle: "solid",
    borderBottomWStyle: "solid",
    borderBottomWidth: 1,
    borderRightWidth: 1,
    paddingBottom: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}))

export const AppBar = () => {
  const classes = useStyles()

  return (
    <MaterialAppBar
      className={classes.appBar}
      position="sticky"
      color="transparent"
      elevation={0}
    >
      <Toolbar className={classes.toolBar}>
        <Box className={classes.nameTextContainer}>
          <Typography variant="h5">JAAKKO{"\n"}NIEMENSIVU</Typography>
        </Box>
        <Button className={classes.button} color="inherit">
          Contact
        </Button>
      </Toolbar>
    </MaterialAppBar>
  )
}
