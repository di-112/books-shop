import React from 'react'
import { Stack } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { styled } from '@mui/material/styles'

type TypeLink = { path: string, label: string }

const links: TypeLink[] = [
  {
    path: '/',
    label: 'Каталог',
  },
  {
    path: '/cart',
    label: 'Корзина',
  },
]

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  color: theme.palette.common.white,
  textDecoration: 'none',
  '&.active': {
    textDecoration: 'underline',
  },
}))

const Navbar = () => (
  <nav>
    <Stack
      spacing={2}
      direction="row"
    >
      {links.map(link => (
        <StyledNavLink
          key={link.path}
          to={link.path}
        >
          {link.label}
        </StyledNavLink>
      ))}
    </Stack>
  </nav>
)

export default Navbar
