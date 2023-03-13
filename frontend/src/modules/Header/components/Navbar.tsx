import React from 'react'
import { Stack } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { alpha, styled } from '@mui/material/styles'

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
  padding: '12px 10px',
  '&.active': {
    display: 'block',
    background: alpha(theme.palette.primary.dark, 1),
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
