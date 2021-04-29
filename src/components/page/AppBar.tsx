import {
  AppBar as MuiAppBar,
  AppBarProps as MuiAppBarProps,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core"
import { Menu } from "@material-ui/icons"
import { useEffect, useState } from "react"
import { SocialMediaIcons } from "./SocialMedias"

const useStyles = makeStyles((theme) => ({
  button: {
    marginLeft: theme.spacing(15),
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

export interface AooBarProps extends MuiAppBarProps {
  onAboutClick(): void
  onProjectsClick(): void
  onContactClick(): void
  isSmallScreen: boolean
}

export const AppBar: React.FC<AooBarProps> = ({
  onAboutClick,
  onProjectsClick,
  onContactClick,
  isSmallScreen,
}) => {
  const classes = useStyles()
  const [showDrawer, setDrawerOpen] = useState(false)

  const menuItems = [
    { title: "About", onClick: onAboutClick },
    { title: "Projects", onClick: onProjectsClick },
    { title: "Contact", onClick: onContactClick },
  ]

  useEffect(() => {
    setDrawerOpen(false)
  }, [isSmallScreen])

  return (
    <>
      <MuiAppBar position="fixed" color="transparent" elevation={0}>
        <Toolbar className={classes.toolBar}>
          <Box className={classes.nameTextContainer}>
            <Typography variant="h5">JAAKKO NIEMENSIVU</Typography>
          </Box>
          <Box>
            {isSmallScreen ? (
              <IconButton onClick={() => setDrawerOpen(true)}>
                <Menu />
              </IconButton>
            ) : (
              <>
                {menuItems.map((item, i) => (
                  <Button
                    key={"app-bar-menu-button-" + i}
                    onClick={item.onClick}
                    className={classes.button}
                    color="inherit"
                  >
                    {item.title}
                  </Button>
                ))}
              </>
            )}
          </Box>
        </Toolbar>
      </MuiAppBar>
      <Drawer
        variant="temporary"
        anchor="right"
        open={showDrawer}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ style: { width: 200 } }}
      >
        <List onClick={() => setDrawerOpen(false)}>
          {menuItems.map((item, i) => (
            <ListItem
              onClick={() => item.onClick()}
              button
              key={"small-app-bar-menu-button-" + i}
            >
              <ListItemText primary={item.title} />
            </ListItem>
          ))}
        </List>
        <Box textAlign="center" mt="auto" mb={2}>
          <SocialMediaIcons />
        </Box>
      </Drawer>
    </>
  )
}
