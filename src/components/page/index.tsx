import { AppBar, AooBarProps } from "./AppBar"
import { Footer } from "./Footer"
import { SocialMedias } from "./SocialMedias"

export interface PageProps {
  appBarProps: AooBarProps
}

export const Page: React.FC<PageProps> = (props) => {
  const { appBarProps, children } = props

  return (
    <div>
      <AppBar {...appBarProps} />
      <SocialMedias />
      {children}
      <Footer />
    </div>
  )
}
