import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { alpha } from '@mui/material/styles'
import Cart from '../modules/Cart'
import PageWrapper from '../modules/PageWrapper'
import { useCartBooksStore } from '../store/cart'
import OrderForm from '../modules/OrderForm'

const CartPage = () => {
  const theme = useTheme()

  const cartBooks = useCartBooksStore(state => state.books)

  return (
    <PageWrapper
      withoutSidebar
    >
      <Box
        display="flex"
        gap="10%"
        height="100%"
      >
        <Cart />
        <Box sx={{
          width: 500,
          flexShrink: 0,
          border: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: 2,
          height: '100%',
          backgroundColor: alpha(theme.palette.common.white, 0.7),
        }}
        >
          <Typography fontWeight={700}>Общая информация</Typography>
          <Box
            flexGrow={1}
            display="flex"
            width="100%"
            flexDirection="column"
            paddingTop={4}
            paddingBottom={2}
            paddingLeft={2}
            paddingRight={2}
          >
            <OrderForm price={cartBooks.reduce((acc, book) => acc + (book.price * book.count), 0)} />
          </Box>
        </Box>
      </Box>
    </PageWrapper>
  )
}

export default CartPage
