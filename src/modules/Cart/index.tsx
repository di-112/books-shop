import React from 'react'
import { Divider } from '@mui/material'
import CartItem from './components/CartItem'
import { useCartBooksStore } from '../../store/cart'
import { CartContainer } from './components/CartContainer'
import EmptyData from '../EmptyData'

const Cart = () => {
  const chosenBooks = useCartBooksStore(state => state.books)

  return (
    <CartContainer>
      {
        chosenBooks.length
          ? (
            chosenBooks?.map(book => (
              <React.Fragment key={book.id}>
                <CartItem book={book} />
                <Divider sx={{ borderColor: 'common.black' }} />
              </React.Fragment>
            ))
          )
          : <EmptyData />
      }
    </CartContainer>
  )
}

export default Cart
