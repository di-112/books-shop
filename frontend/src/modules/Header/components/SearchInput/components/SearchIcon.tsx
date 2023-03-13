import React from 'react'
import { styled } from '@mui/material/styles'
import SearchIconMUI from '@mui/icons-material/Search'

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const SearchIcon = () => (
  <SearchIconWrapper>
    <SearchIconMUI />
  </SearchIconWrapper>
)

export default SearchIcon
