import { AppBar } from "./AppBar"
import { Footer } from "./Footer"
import { SocialMedias } from "./SocialMedias"

export interface PageProps {}

export const Page: React.FC<PageProps> = (props) => {
  const { children } = props

  return (
    <div>
      <AppBar />
      <SocialMedias />
      {children}
      <Footer />
    </div>
  )
}
