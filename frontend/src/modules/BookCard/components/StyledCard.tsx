import { alpha, styled } from '@mui/material/styles'
import Card from '@mui/material/Card'

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  position: 'relative',
  maxWidth: 700,

  '&:hover': {
    boxShadow: `0 0 15px ${alpha(theme.palette.common.black, 0.35)}`,
  },

  margin: '0 auto',

  '& img': {
    flex: '0 0 180px',
    overflow: 'hidden',
    maxHeight: 260,
    alignSelf: 'center',
  },

  '& .MuiCardMedia-media': {
    padding: theme.spacing(1),
    borderRadius: theme.spacing(2),
  },

  '& .MuiCardActions-spacing': {
    flexGrow: 1,
    alignItems: 'flex-end',
    padding: theme.spacing(2),
    position: 'absolute',
    right: 0,
    bottom: 0,
  },

  '& .MuiCardContent-root': {
    paddingBottom: theme.spacing(6),
  },

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    width: 215,

    '& img': {
      width: 180,
      flex: '0 0 auto',
    },

    '& .MuiCardContent-root': {
      paddingBottom: theme.spacing(1),
    },

    '& .MuiCardActions-spacing': {
      position: 'relative',
      padding: theme.spacing(1),
    },
  },
}))

export default StyledCard
