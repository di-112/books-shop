import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

export const CartContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  gap: theme.spacing(2),

  overflow: 'auto',
  '::-webkit-scrollbar': {
    width: 0,
  },

  '& .MuiDivider-root:last-child ': {
    display: 'none',
  },
}))
