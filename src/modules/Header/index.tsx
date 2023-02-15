import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import SearchInput from './components/SearchInput'
import CartIcon from './components/CartIcon'
import Navbar from './components/Navbar'

const StyledToolbar = styled(Toolbar)(() => ({
  minHeight: 'var(--header-height) !important',
  width: '100%',
  maxWidth: '1240px',
  margin: '0 auto',
}))

const StyledRightBox = styled(Box)(() => ({
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
}))

const Header = () => (
  <AppBar position="fixed">
    <StyledToolbar>
      <Navbar />
      <StyledRightBox>
        <SearchInput />
        <CartIcon />
      </StyledRightBox>
    </StyledToolbar>
  </AppBar>
)

export default Header
