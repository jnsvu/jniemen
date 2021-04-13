import {
  Container,
  Grid,
  makeStyles,
  Typography,
  FormControl,
} from "@material-ui/core"
import Head from "next/head"
import { EmailForm } from "../components/EmailForm"
import { Page } from "../components/Page"

const useStyles = makeStyles((theme) => ({
  aboutRowContainer: {
    display: "flex",
    flexDirection: "column",
  },
  aboutTextContainer: {
    display: "flex",
    flex: 1,
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
        <Container className={styles.aboutRowContainer}>
          <Grid container spacing={8} wrap="nowrap" justify="space-between">
            <Grid item xs={12}>
              <Typography variant="h4">About me</Typography>
              <Typography variant="body1">
                I'm a software and service engineering student in Aalto
                University. I have been doing software development for around
                four years now. I'd say that my speciality is frontend (web and
                mobile) development, but I have also worked on several backend
                projects. Currently, my preferred technologies are React / React
                Native and TypeScript, but I use other technologies on daily
                basis as well. In addition to software development, I'm also
                interested in other software related topics, including software
                architecture and UX design. I have worked in several diffent
                kinds of teams at school and work which have improved my
                teamwork and communication skills. I think these are as
                important as technical know-how while working in software teams.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <img src="https://media-exp1.licdn.com/dms/image/C5603AQHj475HyD5lZg/profile-displayphoto-shrink_800_800/0/1521934541280?e=1623888000&v=beta&t=wM4np69MORX43I_eV4aMd0THcSVrOIXJqZtrPZOkEuM" />
            </Grid>
          </Grid>
          <EmailForm />
        </Container>
      </Page>
    </>
  )
}
