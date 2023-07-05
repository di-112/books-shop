import { styled } from '@mui/material/styles'
import { Slider as MUISlider } from '@mui/material'

export const Slider = styled(MUISlider)(({ theme }) => ({
  width: '80%',
  margin: '0 auto',
  '.MuiSlider-valueLabel': {
    backgroundColor: theme.palette.primary.main,
    borderRadius: 4,
    padding: `${theme.spacing(0.5)} ${theme.spacing(2)}`,
  },
}))
