import { createTheme } from '@mui/material'
import { green, lightBlue } from '@mui/material/colors'

export const theme = createTheme({
  palette: {
    primary: {
      main: lightBlue[700],
    },
    secondary: {
      main: green[500],
    },
  },
})
