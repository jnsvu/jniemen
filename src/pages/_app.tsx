import "../styles/globals.css"
import { CssBaseline, MuiThemeProvider } from "@material-ui/core"
import { theme } from "../styles/theme"

function MyApp({ Component, pageProps }) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </MuiThemeProvider>
  )
}

export default MyApp
