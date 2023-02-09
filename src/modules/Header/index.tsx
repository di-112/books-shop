import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Logo from './components/Logo'
import Search from './components/Search/Search'
import Cart from './components/Cart'
import Navbar from './components/Navbar'

const StyledToolbar = styled(Toolbar)(() => ({
  minHeight: 'var(--header-height) !important',
}))

const StyledRightBox = styled(Box)(() => ({
  flexGrow: 1,
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
}))

const Header = () => (
  <AppBar position="fixed">
    <StyledToolbar>
      <Logo />
      <Navbar />
      <StyledRightBox>
        <Search />
        <Cart />
      </StyledRightBox>
    </StyledToolbar>
  </AppBar>
)

export default Header
