import { useMediaQuery, useTheme } from "@material-ui/core"
import { AppBar, AooBarProps } from "./AppBar"
import { Footer } from "./Footer"
import { SocialMedias } from "./SocialMedias"

export interface PageProps {
  appBarProps: Omit<AooBarProps, "isSmallScreen">
}

export const Page: React.FC<PageProps> = (props) => {
  const { appBarProps, children } = props
  const theme = useTheme()
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <div>
      <AppBar isSmallScreen={smallScreen} {...appBarProps} />
      {!smallScreen && <SocialMedias />}
      {children}
      <Footer />
    </div>
  )
}
