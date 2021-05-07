import { Box, Container, Divider, Typography } from "@material-ui/core"
import { EmailForm } from "./EmailForm"
import { ProfileImage } from "./ProfileImage"
import { Page } from "../../../components/page"
import { MutableRefObject, useRef } from "react"
import { Email, School, SportsTennis, Star } from "@material-ui/icons"
import Head from "next/head"
import { NextPage } from "next"
import { makeStyles } from "@material-ui/core/styles"
import { AboutMeCard } from "./AboutMeCard"

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    flexGrow: 1,
    backgroundColor: theme.palette.primary[900],
    paddingTop: theme.spacing(6),
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

  const scrollIntoView = (ref: MutableRefObject<HTMLDivElement | HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <>
      <Head>
        <title>jaakkons</title>
        <meta name="description" content="orld spec and API" />
      </Head>
      <Page
        appBarProps={{
          onAboutClick: () => scrollIntoView(aboutContainerRef),
          onProjectsClick: () => scrollIntoView(projectsContainerRef),
          onContactClick: () => scrollIntoView(contactContainerRef),
        }}
      >
        <ProfileImage onDownArrowPress={() => scrollIntoView(aboutContainerRef)} />
        <Container ref={aboutContainerRef} className={styles.container} maxWidth={false}>
          <Typography align="center" variant="h4">
            About me
          </Typography>
          <Box display="flex" flexDirection="column">
            <Box display="flex" justifyContent="space-evenly" flexWrap="wrap">
              <AboutMeCard
                title="Education"
                Icon={School}
                items={[
                  "2nd year MSc. student in Aalto University",
                  "Major in Software & Service Engineering",
                  "Minor in Security & Cloud Computing",
                  "Computer Science BSc. 2016-2019",
                ]}
                fadeTime={1500}
              />
              <AboutMeCard
                title="Experience"
                items={["4+ years of mobile & web development", "3+ years as a member of a agile team"]}
                Icon={Star}
                fadeTime={3000}
              />
              <AboutMeCard
                title="Free time"
                items={["Gym, tennis & other sports", "Programming projects", "🍺"]}
                Icon={SportsTennis}
                fadeTime={4500}
              />
            </Box>
          </Box>
          <Divider />
        </Container>
        <Container ref={projectsContainerRef} className={styles.container} maxWidth={false}>
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
          <Box my={3} display="flex" alignItems="center" justifyContent="center">
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
