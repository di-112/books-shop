import { alpha, styled } from '@mui/material/styles'
import Card from '@mui/material/Card'

const StyledCard = styled(Card)(({ theme }) => ({
  width: 216,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',

  '&:hover': {
    boxShadow: `0 0 15px ${alpha(theme.palette.common.black, 0.35)}`,
  },

  '& .MuiCardMedia-media': {
    padding: theme.spacing(1),
    borderRadius: theme.spacing(2),
  },

  '& .MuiCardActions-spacing': {
    flexGrow: 1,
    alignItems: 'flex-end',
    padding: theme.spacing(2),
  },

  '& .MuiCardContent-root': {
    paddingBottom: 0,
  },
}))
export default StyledCard
