import React from 'react'
import { Box, useTheme } from '@mui/material'
import Typography from '@mui/material/Typography'
import { alpha } from '@mui/material/styles'
import Button from '@mui/material/Button'
import Cart from '../modules/Cart'
import PageWrapper from '../modules/PageWrapper'
import { useCartBooksStore } from '../store/cart'

const CartPage = () => {
  const theme = useTheme()

  const cartBooks = useCartBooksStore(state => state.books)

  return (
    <PageWrapper
      title="Корзина"
      isDisabledSidebar
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
            justifyContent="center"
          >
            <Typography fontWeight={700}>Стоимость заказа:</Typography>
            <Typography fontWeight={700}>
              {`${cartBooks.reduce((acc, book) => acc + (book.price * book.count), 0)}  ₽`}
            </Typography>
          </Box>
          <Button
            sx={{ alignSelf: 'flex-end' }}
            variant="contained"
          >
            Оформить заказ
          </Button>
        </Box>
      </Box>
    </PageWrapper>
  )
}

export default CartPage
