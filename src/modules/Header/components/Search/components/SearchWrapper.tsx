import { alpha, styled } from '@mui/material/styles'

const SearchWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: 'auto',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}))

export default SearchWrapper
