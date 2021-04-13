import { Box, Container, makeStyles, Typography } from "@material-ui/core"
import Head from "next/head"
import { Page } from "../components/Page"

const useStyles = makeStyles((theme) => ({
  aboutContainer: {
    display: "flex",
    flex: 0.5,
    backgroundColor: "red",
    flexDirection: "row"
  },
}))

export default function IndexPage() {
  const styles = useStyles()

  return (
    <>
      <Head>
        <title>JN</title>
        <meta
          name="description"
          content="Next.js + SWR codebase containing realworld examples (CRUD, auth, advanced patterns, etc) that adheres to the realworld spec and API"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <Page>
        <Container className={styles.aboutContainer} >
          <Box >
            <Typography variant="h4">About me</Typography>
            <Typography variant="body1">
              I'm a software and service engineering student in Aalto
              University. I have been doing software development for around four
              years now. I'd say that my speciality is frontend (web and mobile)
              development, but I have also worked on several backend projects.
              Currently, my preferred technologies are React / React Native and
              TypeScript, but I use other technologies on daily basis as well.
              In addition to software development, I'm also interested in other
              software related topics, including software architecture and UX
              design. I have worked in several diffent kinds of teams at school
              and work which have improved my teamwork and communication skills.
              I think these are as important as technical know-how while working
              in software teams.
            </Typography>
          </Box>
          <Box className={styles.aboutContainer}>
            <Typography variant="h4">About me</Typography>
            <Typography variant="body1">
              I'm a software and service engineering student in Aalto
            </Typography>
          </Box>
        </Container>
      </Page>
    </>
  )
}
