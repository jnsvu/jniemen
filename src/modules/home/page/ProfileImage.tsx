import { makeStyles, Box, IconButton, Typography } from "@material-ui/core"
import Image from "next/image"
import { ArrowDownward } from "@material-ui/icons"
import Typist from "react-typist"
import Div100vh from "react-div-100vh"

const useStyles = makeStyles((theme) => ({
  imageContainer: {
    display: "flex",
    flexDirection: "column",
  },
  image: {
    position: "fixed",
    overflow: "hidden",
    zIndex: -2,
  },
  imageOverlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
    zIndex: -1,
  },
  arrowIconButton: {
    borderRadius: 30,
    backgroundColor: "rgba(0,0,0,.3)",
    marginBottom: theme.spacing(3),
    "&:hover": { transform: "scale3d(1.2, 1.2, 1)" },
  },
  arrowIcon: {
    fontSize: 60,
  },
  header: {
    fontFamily: "Monospace",
    marginBottom: theme.spacing(6),
  },
}))

export interface ProfileImageProps {
  onDownArrowPress(): void
}

export const ProfileImage: React.FC<ProfileImageProps> = ({
  onDownArrowPress,
}) => {
  const styles = useStyles()

  return (
    <Div100vh className={styles.imageContainer}>
      <Image
        src="/img/profile.jpeg"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
        className={styles.image}
      />
      <Box className={styles.imageOverlay} />
      <Box mt="auto" mx="auto" textAlign="center">
        <Typist avgTypingDelay={75} startDelay={750} cursor={{ show: false }}>
          <Typography className={styles.header} variant="h2">
            {"<"}Full-stack mobile {"&"} web dev{">"}
            <Typist.Backspace count={1} delay={1000} />
            <Typist.Delay ms={500} />
            {"/>"}
          </Typography>
        </Typist>
        <IconButton
          className={styles.arrowIconButton}
          onClick={onDownArrowPress}
        >
          <ArrowDownward className={styles.arrowIcon} />
        </IconButton>
      </Box>
    </Div100vh>
  )
}
