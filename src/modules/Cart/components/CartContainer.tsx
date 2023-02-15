import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

export const CartContainer = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  display: 'flex',
  width: '100%',
  maxHeight: '75vh',
  flexDirection: 'column',
  gap: theme.spacing(2),

  overflow: 'auto',
  '::-webkit-scrollbar': {
    width: 0,
  },

  '& .MuiDivider-root:last-child': {
    display: 'none',
  },
}))
