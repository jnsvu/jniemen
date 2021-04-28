import "../styles/globals.css"
import { CssBaseline, ThemeProvider } from "@material-ui/core"
import { theme } from "../styles/theme"
import { QueryClientProvider, QueryClient } from "react-query"
import { NextPage } from "next"

const queryClient = new QueryClient()

interface AppProps {
  Component: React.ElementType
  pageProps: NextPage
}

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
