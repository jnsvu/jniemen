import {
  Box,
  Container,
  Divider,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core"
import { EmailForm } from "./components/EmailForm"
import { Page } from "../../components/Page"
import { ProfileImage } from "./components/ProfileImage"
import { useRef } from "react"
import { Email, School } from "@material-ui/icons"
import Image from "next/image"

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    flexGrow: 1,
    backgroundColor: theme.palette.primary[700],
    paddingTop: theme.spacing(6),
  },
  informationBlock: {
    width: "25em",
    backgroundColor: theme.palette.primary[600],
    padding: theme.spacing(3),
    margin: theme.spacing(3),
  },
  aboutTextContainer: {
    display: "flex",
    flex: 1,
  },
  homeServImageContainer: {},
  homeServImage: {},
}))

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = (props) => {
  const styles = useStyles()
  const informationContainerRef = useRef<HTMLDivElement | null>(null)

  const scrollIntoInformationView = () =>
    informationContainerRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })

  return (
    <Page>
      <ProfileImage onDownArrowPress={scrollIntoInformationView} />
      <Container
        ref={informationContainerRef}
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
              <ul>
                <li>
                  <Typography>Aalto University</Typography>
                </li>
                <li>
                  <Typography>Software {"&"} Service Engineering</Typography>
                </li>
              </ul>
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
              <Typography> Software {"&"} Service Engineering</Typography>
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
              <ul>
                <li>
                  <Typography>Gym {"&"} tennis</Typography>
                </li>
                <li>
                  <Typography>Software projects</Typography>
                </li>
              </ul>
            </Paper>
          </Box>
        </Box>
        <Box my={4} mx={10} >
          <Divider />
        </Box>
        <Typography align="center" variant="h4">
          Projects I have worked on
        </Typography>
        <Box className={styles.homeServImageContainer}>
          <Image
            src="/../public/img/homeserv_app.png"
            width={300}
            height={600}
            objectFit="contain"
            quality={100}
            className={styles.homeServImage}
          />
        </Box>
      </Container>
      <Container>
        <Box my={3} display="flex" alignItems="center" justifyContent="center">
          <Email />
          <Box ml={2}>
            <Typography variant="h5">Send me mail</Typography>
          </Box>
        </Box>
        <EmailForm />
      </Container>
    </Page>
  )
}

export default HomePage
