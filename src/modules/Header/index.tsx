import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { Box } from '@mui/material'
import Logo from './components/Logo'
import Search from './components/Search'
import Cart from './components/Cart'
import Navbar from './components/Navbar'

const Header = () => (
  <AppBar position="fixed">
    <Toolbar sx={{ minHeight: 'var(--header-height) !important' }}>
      <Logo />
      <Navbar />
      <Box sx={{
        flexGrow: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center',
      }}
      >
        <Search />
        <Cart />
      </Box>
    </Toolbar>
  </AppBar>
)

export default Header
