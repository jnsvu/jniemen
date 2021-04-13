import { Container } from "@material-ui/core"
import { AppBar } from "./AppBar"
import { SocialMedias } from "./SocialMedias"

export interface PageProps {}

export const Page: React.FC<PageProps> = (props) => {
  const { children } = props

  return (
    <Container maxWidth={false} disableGutters>
      <AppBar />
      <SocialMedias />
      {children}
    </Container>
  )
}
