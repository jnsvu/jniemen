import {
  Box,
  Container,
  Divider,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core"
import { EmailForm } from "./EmailForm"
import { ProfileImage } from "./ProfileImage"
import { Page } from "../../../components/Page"
import { MutableRefObject, useRef } from "react"
import { Email, School } from "@material-ui/icons"
import Head from "next/head"
import { NextPage } from "next"

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    flexGrow: 1,
    backgroundColor: theme.palette.primary[900],
    paddingTop: theme.spacing(6),
  },
  informationBlock: {
    width: "25em",
    backgroundColor: theme.palette.primary[800],
    padding: theme.spacing(3),
    margin: theme.spacing(3),
  },
  aboutTextContainer: {
    display: "flex",
    flex: 1,
  },
}))

export const HomePage: NextPage = () => {
  const styles = useStyles()
  const aboutContainerRef = useRef<HTMLDivElement | null>(null)
  const projectsContainerRef = useRef<HTMLDivElement | null>(null)
  const contactContainerRef = useRef<HTMLDivElement | null>(null)

  const scrollIntoView = (
    ref: MutableRefObject<HTMLDivElement | HTMLElement>
  ) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <>
      <Head>
        <title>JN</title>
        <meta name="description" content="orld spec and API" />
      </Head>
      <Page
        appBarProps={{
          onAboutClick: () => scrollIntoView(aboutContainerRef),
          onProjectsClick: () => scrollIntoView(projectsContainerRef),
          onContactClick: () => scrollIntoView(contactContainerRef),
        }}
      >
        <ProfileImage
          onDownArrowPress={() => scrollIntoView(aboutContainerRef)}
        />
        <Container
          ref={aboutContainerRef}
          className={styles.container}
          maxWidth={false}
        >
          <Typography align="center" variant="h4">
            About me
          </Typography>
          <Box display="flex" flexDirection="column">
            <Box display="flex" justifyContent="space-evenly" flexWrap="wrap">
              <Paper
                variant="outlined"
                square
                className={styles.informationBlock}
              >
                <Box display="flex" justifyContent="center">
                  <School fontSize="large" style={{ marginRight: 10 }} />
                  <Typography variant="h5">Education</Typography>
                </Box>
              </Paper>
              <Paper
                variant="outlined"
                square
                className={styles.informationBlock}
              >
                <Box display="flex" justifyContent="center">
                  <School fontSize="large" style={{ marginRight: 10 }} />
                  <Typography variant="h5">Experience</Typography>
                </Box>
              </Paper>
              <Paper
                variant="outlined"
                square
                className={styles.informationBlock}
              >
                <Box display="flex" justifyContent="center">
                  <School fontSize="large" style={{ marginRight: 10 }} />
                  <Typography variant="h5">Freetime</Typography>
                </Box>
              </Paper>
            </Box>
          </Box>
          <Divider />
        </Container>
        <Container
          ref={projectsContainerRef}
          className={styles.container}
          maxWidth={false}
        >
          <Typography align="center" variant="h4">
            Projects I have worked on
          </Typography>
          <Box textAlign="center" p={12}>
            <Typography color="textSecondary" variant="subtitle2">
              To be added soon
            </Typography>
          </Box>
        </Container>
        <Container ref={contactContainerRef}>
          <Box
            my={3}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Email />
            <Box ml={2}>
              <Typography variant="h5">Send me mail</Typography>
            </Box>
          </Box>
          <EmailForm />
        </Container>
      </Page>
    </>
  )
}
