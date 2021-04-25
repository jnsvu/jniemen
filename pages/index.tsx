import { makeStyles } from "@material-ui/core"
import Head from "next/head"

import HomePage from "./home"

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    flexGrow: 1,
  },
  aboutTextContainer: {
    display: "flex",
    flex: 1,
  },
  imageContainer: {},
  image: {
    position: "fixed",
    overflow: "hidden",
    zIndex: -1,
  },
  imageOverlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.15)",
    zIndex: -1,
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
      </Head>
      <HomePage />
    </>
  )
}
