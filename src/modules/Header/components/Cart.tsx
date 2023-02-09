import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Badge } from '@mui/material'
import { useCartBooksStore } from '../../../store/cart'

const Cart = () => {
  const chosenBooks = useCartBooksStore(state => state.booksIds)

  return (
    <Badge
      color="error"
      badgeContent={chosenBooks.length}
    >
      <ShoppingCartIcon />
    </Badge>
  )
}

export default Cart
