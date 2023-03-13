import React from 'react'
import { Box, useTheme } from '@mui/material'
import Cart from '../modules/Cart'
import PageWrapper from '../modules/PageWrapper'
import Order from '../modules/Order'

const CartPage = () => {
  const theme = useTheme()

  return (
    <PageWrapper withoutFilters>
      <Box
        component="section"
        display="flex"
        gap={4}
        sx={{
          height: '100%',
          [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
          },
        }}
      >
        <Cart />
        <Order />
      </Box>
    </PageWrapper>
  )
}

export default CartPage
