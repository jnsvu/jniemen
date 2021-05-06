import {
  makeStyles,
  Box,
  Typography,
  Paper,
  SvgIconProps,
} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 0.25,
    minWidth: "25em",
    backgroundColor: theme.palette.primary[800],
    padding: theme.spacing(3),
    margin: theme.spacing(3),
  },
  icon: {
    marginRight: theme.spacing(1.5),
  },
  item: {
    marginBlock: theme.spacing(0.5),
  },
}))

export interface AboutMeCardProps {
  title: string
  items: string[]
  Icon: React.ComponentType<SvgIconProps>
}

export const AboutMeCard: React.FC<AboutMeCardProps> = ({
  title,
  items,
  Icon,
}) => {
  const styles = useStyles()

  return (
    <Paper variant="outlined" square className={styles.container}>
      <Box display="flex" justifyContent="center" alignItems="center" mb={3}>
        <Icon fontSize="large" className={styles.icon} />
        <Typography variant="h5" noWrap>
          {title}
        </Typography>
      </Box>
      <ul>
        {items.map((item) => (
          <li className={styles.item}>
            <Typography>{item}</Typography>
          </li>
        ))}
      </ul>
    </Paper>
  )
}
