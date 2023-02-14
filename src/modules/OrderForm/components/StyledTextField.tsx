import { styled } from '@mui/material/styles'
import { TextField } from '@mui/material'

export const StyledTextField = styled(TextField)(({ theme }) => ({

  flexGrow: 1,

  '& > .MuiInputBase-root': {
    borderRadius: 0,
  },

  '& input': {
    height: 24,
    padding: '0 8px',
    fontSize: 12,
    borderRadius: 0,
  },
}))
