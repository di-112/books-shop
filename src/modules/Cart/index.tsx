import React from 'react'
import { Divider, Stack } from '@mui/material'
import CartItem from './components/CartItem'
import { useCartBooksStore } from '../../store/cart'

const Cart = () => {
  const chosenBooks = useCartBooksStore(state => state.books)

  return (
    <Stack
      spacing={2}
      pt={2}
      component="section"
      sx={{
        overflow: 'auto',
        '::-webkit-scrollbar': {
          width: 0,
        },
      }}
    >
      {chosenBooks?.map(book => (
        <React.Fragment key={book.id}>
          <CartItem
            book={book}
          />
          <Divider sx={{ borderColor: 'common.black' }} />
        </React.Fragment>
      ))}
    </Stack>
  )
}

export default Cart
