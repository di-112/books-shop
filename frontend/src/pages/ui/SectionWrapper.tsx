import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

const SectionWrapper = styled(Box)(() => ({
  maxWidth: 1180,
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  margin: '0 auto',
  textAlign: 'center',
}))

export default SectionWrapper
