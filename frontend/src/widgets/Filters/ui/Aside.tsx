import React, { FC } from 'react'
import { alpha, styled } from '@mui/material/styles'
import { Box } from '@mui/material'
import { BoxProps } from '@mui/material/Box/Box'

interface ISidebar {
  isDisabled?: boolean,
}
const StyledAside = styled(Box)<ISidebar>(({ theme }) => ({
  width: 300,
  flexShrink: 0,
  position: 'sticky',
  top: 68,
  border: 'none',
  flexDirection: 'column',
  padding: theme.spacing(2),
  paddingBottom: theme.spacing(8),
  height: 'calc(100vh - 2 * var(--header-height))',
  backgroundColor: alpha(theme.palette.common.white, 0.5),

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}))

const Aside:FC<BoxProps> = props => (
  <StyledAside
    component="aside"
    {...props}
  />
)

export default Aside
