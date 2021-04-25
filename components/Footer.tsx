import { Box, Typography } from "@material-ui/core"

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <Box textAlign="center" pt={8} pb={4}>
      <Typography>
        Copyright © {new Date().getFullYear()} Jaakko Niemensivu
      </Typography>
    </Box>
  )
}
