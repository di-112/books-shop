import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

const FiltersWrapper = styled(Box)(() => ({
  overflow: 'auto',
  '::-webkit-scrollbar': {
    width: 0,
  },
  height: 'calc(100% - 48px)',
}))

export default FiltersWrapper
