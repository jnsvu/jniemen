import { makeStyles, Box, IconButton, Typography } from "@material-ui/core"
import Image from "next/image"
import { ArrowDownward } from "@material-ui/icons"

const useStyles = makeStyles((theme) => ({
  imageContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
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
    lineHeight: 2
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
    <Box className={styles.imageContainer}>
      <Image
        src="/../public/img/profile.jpeg"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
        className={styles.image}
      />
      <Box className={styles.imageOverlay} />
      <Box mt="auto" mx="auto" textAlign="center">
        <Typography className={styles.header} variant="h2">
          Full-stack mobile {"&"} web dev
        </Typography>
        <IconButton
          className={styles.arrowIconButton}
          onClick={onDownArrowPress}
        >
          <ArrowDownward className={styles.arrowIcon} />
        </IconButton>
      </Box>
    </Box>
  )
}
