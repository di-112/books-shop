import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

const ContentWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  columnGap: theme.spacing(4),
  margin: '0 auto',
  minHeight: '100vh',
  padding: `calc(var(--header-height) + ${theme.spacing(2)}) ${theme.spacing(8)} ${theme.spacing(2)}`,
  [theme.breakpoints.down('md')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
}))

export default ContentWrapper
