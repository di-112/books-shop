import React from 'react'
import { alpha } from '@mui/material/styles'
import { Box, Typography, useTheme } from '@mui/material'
import { useCartBooksStore } from '../../store/cart'
import OrderForm from './components/OrderForm'

const Order = () => {
  const theme = useTheme()

  const cartBooks = useCartBooksStore(state => state.books)

  return (
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
      [theme.breakpoints.down('md')]: {
        width: '100%',
        height: 'auto',
      },
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
  )
}

export default Order
