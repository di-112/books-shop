import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Badge } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useCartBooksStore } from '../../../store/cart'

const Cart = () => {
  const chosenBooks = useCartBooksStore(state => state.books)

  const navigate = useNavigate()

  return (
    <Badge
      color="error"
      sx={{
        cursor: 'pointer',
      }}
      onClick={() => navigate('/cart')}
      badgeContent={chosenBooks.length}
    >
      <ShoppingCartIcon />
    </Badge>
  )
}

export default Cart
