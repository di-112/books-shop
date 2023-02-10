import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Search from './components/Search/Search'
import Cart from './components/Cart'
import Navbar from './components/Navbar'

const StyledToolbar = styled(Toolbar)(() => ({
  minHeight: 'var(--header-height) !important',
  maxWidth: '1240px',
  width: '100%',
  margin: '0 auto',
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
      <Navbar />
      <StyledRightBox>
        <Search />
        <Cart />
      </StyledRightBox>
    </StyledToolbar>
  </AppBar>
)

export default Header
