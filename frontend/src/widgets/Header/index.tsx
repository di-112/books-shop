import React, { useEffect } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import SearchInput from './ui/SearchInput'
import CartIcon from './ui/CartIcon'
import Navbar from './ui/Navbar'
import background from '../../assets/background.jpg'

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

const Header = () => {
  useEffect(() => {
    document.body.style.background = `url(${background})`
  }, [])

  return (
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
}

export default Header
