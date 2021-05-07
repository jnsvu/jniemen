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
  useScrollTrigger,
  Slide,
} from "@material-ui/core"
import { Menu } from "@material-ui/icons"
import { useEffect, useRef, useState } from "react"
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

export const AppBar: React.FC<AooBarProps> = ({ onAboutClick, onProjectsClick, onContactClick, isSmallScreen }) => {
  const classes = useStyles()
  const [showDrawer, setDrawerOpen] = useState(false)
  const drawerItemClickHandler = useRef<NodeJS.Timeout>()
  const trigger = useScrollTrigger()

  const menuItems = [
    { title: "About", onClick: onAboutClick },
    { title: "Projects", onClick: onProjectsClick },
    { title: "Contact", onClick: onContactClick },
  ]

  useEffect(() => {
    setDrawerOpen(false)
  }, [isSmallScreen])

  useEffect(() => {
    return drawerItemClickHandler.current && clearTimeout(drawerItemClickHandler.current)
  }, [])

  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
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
      </Slide>
      <Drawer variant="temporary" anchor="bottom" open={showDrawer} onClose={() => setDrawerOpen(false)}>
        <List onClick={() => setDrawerOpen(false)}>
          {menuItems.map((item, i) => (
            <ListItem
              onClick={() => {
                drawerItemClickHandler.current = setTimeout(item.onClick, 300)
              }}
              button
              key={"small-app-bar-menu-button-" + i}
              style={{ textAlign: "center" }}
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
