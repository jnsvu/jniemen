import { Container } from "@material-ui/core"
import { AppBar } from "./AppBar"

export interface PageProps {}

export const Page: React.FC<PageProps> = (props) => {
  const { children } = props

  return (
    <Container maxWidth={false} disableGutters>
      <AppBar />
      {children}
    </Container>
  )
}
