import React from 'react';
import {Stack} from "@mui/material";
import {NavLink} from "react-router-dom";
import {styled} from "@mui/material/styles";

type typeLink = { path: string, label: string };

const links: typeLink[] = [
  {
    path: '/',
    label: 'Главная'
  },
  {
    path: '/cart',
    label: 'Корзина'
  }
]

const StyledNavLink = styled(NavLink)(({theme}) => ({
  color: theme.palette.common.black,
  textDecoration: 'none',
  '&.active': {
    color: theme.palette.common.white,
  }
}))

const Navbar = () => {
  return (
    <nav>
      <Stack
        spacing={2}
        direction="row"
      >
        {links.map(link => (
          <StyledNavLink key={link.path} to={link.path}>
            {link.label}
          </StyledNavLink>
        ))}
      </Stack>
    </nav>
  );
};

export default Navbar;
